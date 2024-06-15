from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('localhost', 27017)    
db = client['business_db']
collection = db['businesses']

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
            "images": business["images"]
        })
    
    return jsonify(result)
