import requests
from geopy.geocoders import Nominatim

def get_location_by_ip():
    """Get location based on IP address using ipinfo.io."""
    try:
        response = requests.get('https://ipinfo.io')
        data = response.json()
        location = data['loc'].split(',')
        latitude = location[0]
        longitude = location[1]
        return latitude, longitude
    except Exception as e:
        print(f"Error: {e}")
        return None, None

def get_location_details(latitude, longitude):
    """Get detailed location information using geopy."""
    try:
        geolocator = Nominatim(user_agent="geoapiExercises")
        location = geolocator.reverse(f"{latitude}, {longitude}", language='en')
        return location.address
    except Exception as e:
        print(f"Error: {e}")
        return None

if __name__ == "__main__":
    lat, lon = get_location_by_ip()
    if lat and lon:
        print(f"Latitude: {lat}, Longitude: {lon}")
        address = get_location_details(lat, lon)
        if address:
            print(f"Address: {address}")
        else:
            print("Could not get detailed location information.")
    else:
        print("Could not get location based on IP address.")
