import json

# Example user input
user_input = {
    "asset_requirements": {"Pine needles": 2, "Infra": 2, "Cattle": 2, "Land for sheltering": 3},
    "skill_requirements": {"Power operators": 2, "Technical training": 3, "Maintenance":1}
}

# Load business data from JSON
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
        if asset["asset"] in user_input["asset_requirements"]:
            score += asset["weight"] * user_input["asset_requirements"][asset["asset"]]
    for skill in business["skill_requirements"]:
        if skill["skill"] in user_input["skill_requirements"]:
            score += skill["weight"] * user_input["skill_requirements"][skill["skill"]]
    return score

# Calculate scores for each business
scores = []
for business in businesses:
    score = calculate_weighted_score(user_input, business)
    scores.append((business["name"], score))

# Sort businesses by score
sorted_scores = sorted(scores, key=lambda x: x[1], reverse=True)

# Display recommendations
print("The preference list for ")

for business, score in sorted_scores:
 return business