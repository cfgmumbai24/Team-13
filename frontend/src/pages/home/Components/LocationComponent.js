import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          await fetchAddress(latitude, longitude);
        },
        (error) => {
          setError(error.message);
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await axios.post('/api/get_address', {
        latitude,
        longitude
      });
      setAddress(response.data.address);
    } catch (error) {
      setError(`Error fetching address: ${error.message}`);
    }
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {location ? (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
      {address && <p>Address: {address}</p>}
    </div>
  );
};

export default LocationComponent;
