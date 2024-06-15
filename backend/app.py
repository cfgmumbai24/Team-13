from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Connect to MongoDB for business.py
client = MongoClient('localhost', 27017)
db = client['business_db']
collection = db['businesses']

# Example business data (could be loaded from a database or file)
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
                {"asset": "Enough sightseeing spots around the location", "weight": 3},
                {"asset": "Infrastructure facilities", "weight": 2},
                {"asset": "Advertisement and promotion capital", "weight": 1}
            ],
            "skill_requirements": [
                {"skill": "Hospitality skills", "weight": 3},
                {"skill": "Verbal skills", "weight": 2}
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
                {"skill": "Verbal skills", "weight": 3},
                {"skill": "Photography", "weight": 1},
                {"skill": "Knowledge", "weight": 2}
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
                {"skill": "Animal keeping", "weight": 3},
                {"skill": "Animal healthcare", "weight": 1},
                {"skill": "Dairy product development", "weight": 2}
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
    app.run(debug=True)
