from flask import Flask, jsonify, request
from pymongo import MongoClient
from geopy.exc import GeocoderTimedOut, GeocoderServiceError

from geopy.geocoders import Nominatim
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
# Connect to MongoDB for business.py
client = MongoClient('localhost', 27017)
db = client['business_db']
collection = db['businesses']

# Connect to MongoDB for user profiles
client_profiles = MongoClient('localhost', 27017)
db_profiles = client_profiles['user_profiles']
collection_profiles = db_profiles['profiles']

@app.route('/search', methods=['GET'])
def get_job():

    # Perform case-insensitive search for the query in the name or description
    businesses = list(collection.find())

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

business_data = {
    "businesses": [
        {
            "name": "Renewable assets",
            "asset_requirements": [
                {"asset": "Land area", "weight": 3},
                {"asset": "Pine needles", "weight": 2},
                {"asset": "Storage space", "weight": 1}
            ],
            "skill_requirements": [
                {"skill": "Technical training", "weight": 3},
                {"skill": "Power operators", "weight": 2},
                {"skill": "Maintenance of machines", "weight": 1}
            ]
        },
        {
            "name": "Homestays",
            "asset_requirements": [
                {"asset": "enough sightseeing spots around the location", "weight": 3},
                {"asset": "Infrastructure facilities", "weight": 2},
                {"asset": "Advertisement and promotion capital.", "weight": 1}
            ],
            "skill_requirements": [
                {"skill": "hospitality skills", "weight": 3},
                {"skill": "verbal skills", "weight": 2}
            ]
        },
        {
            "name": "Tourism",
            "asset_requirements": [
                {"asset": "Camping kit and basic amenities", "weight": 1},
                {"asset": "Camera", "weight": 2},
                {"asset": "Local rich natural areas with diverse bird and wildlife", "weight": 3}
            ],
            "skill_requirements": [
                {"skill": "verbal skill", "weight": 3},
                {"skill": "photography", "weight": 1},
                {"skill": "knowledge", "weight": 2}
            ]
        },
        {
            "name": "Dairy Farming",
            "asset_requirements": [
                {"asset": "Land for sheltering", "weight": 3},
                {"asset": "Cattle", "weight": 2},
                {"asset": "Cattle feedstock", "weight": 1}
            ],
            "skill_requirements": [
                {"skill": "animal keeping", "weight": 3},
                {"skill": "animal healthcare", "weight":1},
                {"skill": "dairy product development", "weight": 2}
            ]
        }
    ]
}

businesses = business_data["businesses"]

def calculate_weighted_score(user_input, business):
    score = 0
    for asset in business["asset_requirements"]:
        if asset["asset"] in user_input["assets"]:
            score += asset["weight"]
    for skill in business["skill_requirements"]:
        if skill["skill"] in user_input["skills"]:
            score += skill["weight"]
    return score

@app.route('/recommend', methods=['POST'])
def recommend():
    user_input = request.json
    print("Received user input:", user_input)

    # Calculate scores for each business
    scores = []
    for business in businesses:
        score = calculate_weighted_score(user_input, business)
        scores.append((business["name"], score))

    # Sort businesses by score
    sorted_scores = sorted(scores, key=lambda x: x[1], reverse=True)

    # Return the sorted list of business recommendations
    return jsonify(sorted_scores)

if __name__ == '__main__':
    # Ensure user_profiles database and profiles collection exist
    if 'user_profiles' not in client.list_database_names():
        # Create user_profiles database and profiles collection
        db_profiles = client['user_profiles']
        collection_profiles = db_profiles['profiles']
        print("Created 'user_profiles' database and 'profiles' collection.")

    app.run(debug=True)