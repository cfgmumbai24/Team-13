import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LocationComponent() {
  const [query, setQuery] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch location when component mounts
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setError("Error getting geolocation");
        }
      );
    } else {
      setError("Geolocation is not supported");
    }
  }, []); // Empty dependency array means it runs only once on mount

  useEffect(() => {
    // Fetch businesses based on location
    if (location) {
      axios.get(`http://127.0.0.1:5000/search`)
        .then(response => {
          const filteredBusinesses = response.data.filter(business => {
            const distance = calculateDistance(location.latitude, location.longitude, business.latitude, business.longitude);
            return distance < 1000;
          });

          setBusinesses(filteredBusinesses);
          setError('');
        })
        .catch(error => {
          setError(error.response?.data?.error || 'An error occurred');
          setBusinesses([]);
        });
    }
  }, [location]); // Dependency on location, so it fetches when location changes

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    // Function to calculate distance between two points on Earth
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {location ? (
        <div>
          <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
          <ul>
            {businesses.map((business, index) => (
              <li key={index}>
                <h2>{business.name}</h2>
                <p>{business.description}</p>
                {business.images && business.images.map((image, i) => (
                  <img key={i} src={image} alt={business.name} width="100" />
                ))}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
}

export default LocationComponent;
