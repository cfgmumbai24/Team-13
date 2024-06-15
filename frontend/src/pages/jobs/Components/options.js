import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Style/option.css'; // Importing the CSS file directly
import whatis from '../Assets/whatis.png';
import swaroz from '../Assets/swaroznew.png';

const question = {
  question: 'SWAROZGAR FELLOWSHIP',
};

function OptionComponent() {
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
    <div className="container">
      {error && <p>Error: {error}</p>}
      {location ? (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
      {address && <p>Address: {address}</p>}
      
      <h1>{question.question}</h1>
      <div className="section whatIs">
        <h2>What is Swarozgar Fellowship?</h2>
        <p>At Margashala Foundation, we believe in empowering the youth to create livelihood opportunities for themselves. Only by empowering the next generation can we collectively contribute to a bright future for the mountains!</p>
        <p>Margshala Swarozgar Fellowship is a 9-month program for budding young entrepreneurs from Uttarakhand who are in the initial stages of setting up their business ventures.</p>
        <img src={whatis} alt="What is Swarozgar Fellowship" />
      </div>

      <div className="section whatYouGet">
        <h2>What can you expect to gain from the Fellowship?</h2>
        <ul>
          <li>Work on your business plan and create a business proof of concept</li>
          <li>Identify the right strategies to increase your sales</li>
          <li>Build a community of customers and fellow entrepreneurs</li>
          <li>Will explore local and global markets for your business</li>
        </ul>
      </div>

      <div className="section opportunities">
        <h2>Fellowship Opportunities</h2>
        <ul>
          <li>Workshops and oral resources</li>
          <div className="opportunity">
            <p>Learn the principles of business development and product expertise, sales and marketing, customer acquisition, entrepreneurial mindset and much more as you build and build your business using offline and online workshops as well as self-learning resources!</p>
          </div>
          <li>Identify the right strategies to increase your sales</li>
          <div className="opportunity">
            <p>Learn the principles of business development and product expertise, sales and marketing, customer acquisition, entrepreneurial mindset and much more as you build and build your business using offline and online workshops as well as self-learning resources!</p>
          </div>
          <li>Build a community of customers and fellow entrepreneurs</li>
          <li>Will explore local and global markets for your business</li>
        </ul>
      </div>

      <div className="section achievers">
        <h2>Our Achievers</h2>
        <p>Meet some of our successful fellows who have started and grown their businesses with the help of the Swarozgar Fellowship.</p>
        <div className="achieversList">
          <div className="achiever">
            <img src={swaroz} alt="Swarozgar Fellowship Achiever" />
          </div>
        </div>
      </div>

      <div className="section preRequisites">
        <h2>Pre-requisites</h2>
        <ul>
          <li>Basic understanding of business concepts</li>
          <li>Commitment to attend all training sessions</li>
          <li>Willingness to actively participate in the program</li>
        </ul>
      </div>

      <div className="section howToApply">
        <h2>How to Apply</h2>
        <p>To apply for the Swarozgar Fellowship, please click the link below. Make sure to provide all the necessary details and documents.</p>
        <button className="applyButton">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScWRdIlPMrWfUMcFCBMuv2iLBiV_xnkVtSe5IiyYq6d3bdf5A/viewform" target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </button>
      </div>
    </div>
  );
}

export default OptionComponent;
