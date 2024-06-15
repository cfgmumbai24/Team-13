import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BusinessList() {
  const [query, setQuery] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          console.log(latitude, longitude)
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported");
    }
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    // Ensure the coordinates are floats
    lat1 = typeof lat1 === 'string' ? parseFloat(lat1) : lat1;
    lon1 = typeof lon1 === 'string' ? parseFloat(lon1) : lon1;
    lat2 = typeof lat2 === 'string' ? parseFloat(lat2) : lat2;
    lon2 = typeof lon2 === 'string' ? parseFloat(lon2) : lon2;
    console.log(lat1, lon1, lat2, lon2);

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

  const searchBusinesses = () => {
    axios.get(`http://127.0.0.1:5000/business?query=${query}`)
      .then(response => {
        const filteredBusinesses = response.data.filter(business => {
          const nameMatches = business.name.toLowerCase().includes(query.toLowerCase());
          const descriptionMatches = business.description.toLowerCase().includes(query.toLowerCase());

          // Check if location is available before calculating distance
          if (location) {
            const distance = calculateDistance(location.latitude, location.longitude, business.latitude, business.longitude);
            console.log("----",distance)
            return (nameMatches || descriptionMatches) && distance < 200;
          }

          return nameMatches || descriptionMatches;
        });

        setBusinesses(filteredBusinesses);
        setError('');
      })
      .catch(error => {
        setError(error.response?.data?.error || 'An error occurred');
        setBusinesses([]);
      });
  };

  return (
    <div>
      <h1>Business Search</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for businesses"
      />
      <button onClick={searchBusinesses}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
  );
}

export default BusinessList;
