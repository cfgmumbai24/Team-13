from flask import Flask, request, jsonify
import bcrypt
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # To allow cross-origin requests

# MongoDB connection settings
MONGO_URI = "mongodb://localhost:27017/"
DATABASE_NAME = "user_auth_db"
COLLECTION_NAME = "users"

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
users_collection = db[COLLECTION_NAME]

def hash_password(password):
    """Hash a password for storing."""
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt())

def check_password(hashed_password, user_password):
    """Check hashed password. Using bcrypt, the salt is saved into the hash itself."""
    return bcrypt.checkpw(user_password.encode(), hashed_password)

@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    username = data['username']
    password = data['password']

    if users_collection.find_one({"username": username}):
        return jsonify({"message": "Username already exists."}), 400

    hashed_password = hash_password(password)
    users_collection.insert_one({"username": username, "password": hashed_password})
    return jsonify({"message": "User registered successfully."}), 201

@app.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    username = data['username']
    password = data['password']

    user = users_collection.find_one({"username": username})
    if user and check_password(user["password"], password):
        return jsonify({"message": "Login successful."}), 200
    else:
        return jsonify({"message": "Invalid username or password."}), 401

if __name__ == '__main__':
    app.run(debug=True)
