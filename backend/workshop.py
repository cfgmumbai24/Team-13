from flask import Flask, request
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection setup
client = MongoClient('mongodb://localhost:27017/')
db = client['workshopsdb']
collection = db['workshops']

@app.route('/workshop')
def workshop_suggestion():
    interest = request.args.get('interest', '')
    workshop = collection.find_one({'interest': interest.lower()})
    
    if workshop:
        return f"Suggested workshop for {interest}: {workshop['workshop_name']}"
    else:
        return f"No workshop found for {interest}"

if __name__ == '__main__':
    app.run(debug=True)
