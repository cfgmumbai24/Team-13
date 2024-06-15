from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection setup
client = MongoClient('mongodb://localhost:27017/')
db = client['jobdb']
jobs_collection = db['jobs']

# Route to get jobs by location
@app.route('/jobs', methods=['GET'])
def get_jobs():
    location = request.args.get('location')
    
    if not location:
        return jsonify({'error': 'Location parameter is required'}), 400

    # Query MongoDB for jobs matching the location
    jobs = list(jobs_collection.find({"location": location}))

    # Convert MongoDB documents to list of dictionaries
    jobs_list = []
    for job in jobs:
        job['_id'] = str(job['_id'])  # Convert ObjectId to string for JSON serialization
        jobs_list.append(job)

    return jsonify(jobs_list), 200

if __name__ == '__main__':
    app.run(debug=True)
