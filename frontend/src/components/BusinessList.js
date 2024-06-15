import React, { useState } from 'react';
import axios from 'axios';

function BusinessList() {
  const [query, setQuery] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [error, setError] = useState('');

  const searchBusinesses = () => {
    axios.get(`http://127.0.0.1:5000/business?query=${query}`)
      .then(response => {
        setBusinesses(response.data);
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
      {error && <p style={{color: 'red'}}>{error}</p>}
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
