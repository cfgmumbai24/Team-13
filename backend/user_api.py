from flask import Flask, request, jsonify
from flask_cors import CORS
import mongoengine as me
from user_model import User

app = Flask(__name__)
CORS(app)  # To allow cross-origin requests

# MongoDB connection settings
MONGO_URI = "mongodb://localhost:27017/user_auth_db"
me.connect(host=MONGO_URI)

@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    username = data['username']
    password = data['password']

    if User.objects(username=username).first():
        return jsonify({"message": "Username already exists."}), 400

    user = User(username=username)
    user.set_password(password)
    user.save()
    return jsonify({"message": "User registered successfully."}), 201

@app.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    username = data['username']
    password = data['password']

    user = User.objects(username=username).first()
    if user and user.check_password(password):
        return jsonify({"message": "Login successful."}), 200
    else:
        return jsonify({"message": "Invalid username or password."}), 401

if __name__ == '__main__':
    app.run(debug=True)
