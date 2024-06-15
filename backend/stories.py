from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('localhost', 27017)    
db = client['stories_db']
collection = db['stories']

@app.route('/stories', methods=['GET'])
def get_business():
    query = request.args.get('query')
    if not query:
        return jsonify({"error": "No query provided"}), 400

    # Perform case-insensitive search for the query in the name or description
    stories = list(collection.find({
        "$or": [
            {"name": {"$regex": query, "$options": "i"}},
            {"description": {"$regex": query, "$options": "i"}}
        ]
    }))

    if not stories:
        return jsonify({"error": "stories not found"}), 404

    # Prepare the response
    result = []
    for story in stories:
        result.append({
            "name": story["name"],
            "description": story["description"],
            "images": story["images"]
        })
    
    return jsonify(result)

