from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from flask import request, jsonify

app = Flask(__name__)
CORS(app)

# Connect to MongoDB for business.py
client = MongoClient('localhost', 27017)
db = client['business_db']
collection = db['businesses']

# Connect to MongoDB for user profiles
client_profiles = MongoClient('localhost', 27017)
db_profiles = client_profiles['user_profiles']
collection_profiles = db_profiles['profiles']


# Routes for business.py
from business import business_bp
app.register_blueprint(business_bp, url_prefix='/api')


# Routes for user profiles
@app.route('/api/profile', methods=['POST'])
def create_profile():
    data = request.get_json()

    # Check if email (primary key) already exists
    existing_profile = collection_profiles.find_one({"email": data["email"]})
    if existing_profile:
        return jsonify({"error": "Email already exists"}), 400

    # Insert new profile
    result = collection_profiles.insert_one(data)
    return jsonify({"message": "Profile created successfully", "profile_id": str(result.inserted_id)}), 201


@app.route('/api/profile/<email>', methods=['GET'])
def get_profile(email):
    profile = collection_profiles.find_one({"email": email})
    if profile:
        return jsonify(profile)
    else:
        return jsonify({"error": "Profile not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)
