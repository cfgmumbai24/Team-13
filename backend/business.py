from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from geopy.exc import GeocoderTimedOut, GeocoderServiceError

from geopy.geocoders import Nominatim

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
@app.route('/business', methods=['GET'])
def get_business():
    query = request.args.get('query')
    if not query:
        return jsonify({"error": "No query provided"}), 400

    # Perform case-insensitive search for the query in the name or description
    businesses = list(collection.find({
        "$or": [
            {"name": {"$regex": query, "$options": "i"}},
            {"description": {"$regex": query, "$options": "i"}}
        ]
    }))

    if not businesses:
        return jsonify({"error": "Business not found"}), 404

    # Prepare the response
    result = []
    for business in businesses:
        result.append({
            "name": business["name"],
            "description": business["description"],
            "images": business["images"],
            "latitude":business["latitude"],
            "longitude":business["longitude"]
        })
    
    return jsonify(result)

# Routes for user profiles
@app.route('/api/profile', methods=['POST'])
def create_or_update_profile():
    data = request.get_json()

    # Check if email (primary key) already exists
    existing_profile = collection_profiles.find_one({"email": data["email"]})
    if existing_profile:
        # Append new data to existing profile
        updated_data = {**existing_profile, **data}  # Merge existing and new data
        collection_profiles.update_one({"email": data["email"]}, {"$set": updated_data})
        return jsonify({"message": "Profile updated with new data successfully"}), 200
    else:
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
    
def get_address(latitude, longitude):
    geolocator = Nominatim(user_agent="geoapiExercises")
    try:
        location = geolocator.reverse((latitude, longitude), exactly_one=True)
        print(f"Geopy response: {location.raw}")  # Log the raw response from Geopy
        return location.address if location else "Address not found"
    except (GeocoderTimedOut, GeocoderServiceError) as e:
        print(f"Geopy error: {e}")  # Log the error
        return f"Error: {e}"

@app.route('/api/get_address', methods=['GET'])
def address():
    data = request.json
    print(f"Received data: {data}")  # Log received data
    latitude = data.get('latitude')  # Corrected this line
    longitude = data.get('longitude')  # Corrected this line
    if latitude is None or longitude is None:
        return jsonify({'error': 'Invalid input'}), 400

    address = get_address(latitude, longitude)
    return jsonify({'address': address})

if __name__ == '__main__':
    # Ensure user_profiles database and profiles collection exist
    if 'user_profiles' not in client.list_database_names():
        # Create user_profiles database and profiles collection
        db_profiles = client['user_profiles']
        collection_profiles = db_profiles['profiles']
        print("Created 'user_profiles' database and 'profiles' collection.")

    app.run(debug=True)
