import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Style/option.css'; // Assuming this is the correct CSS file
// import NewOpeningComponent from './BusinessFormComponent'; // Adjust the path accordingly
import swaroz from '../Assets/swaroz.png'; // Adjust the path accordingly

const question = {
  question: 'SWAROZGAR FELLOWSHIP',
};

function OptionComponent() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
      const response = await axios.post('http://127.0.0.1:5000/api/get_address', {
        latitude,
        longitude,
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
        <p>The Swarozgar Fellowship is a program designed to support individuals in starting or expanding their businesses. It provides mentorship, resources, and financial assistance to help entrepreneurs succeed.</p>
        <p>At Margashala Foundation, we believe in empowering the youth to create livelihood opportunities for themselves. Only by empowering the next generation can we collectively contribute to a bright future for the mountains!</p>
        <p>Margshala Swarozgar Fellowship is a 9-month program for budding young entrepreneurs from Uttarakhand who are in the initial stages of setting up their business ventures.</p>
        {/* Example: Replace with imported images */}
        {/* <img src={whatis} alt="What is Swarozgar Fellowship" /> */}
      </div>

      <div className="section whatYouGet">
        <h2>What will you get?</h2>
        <ul>
          <li>Mentorship from experienced professionals</li>
          <li>Access to financial resources</li>
          <li>Networking opportunities</li>
          <li>Training and development programs</li>
        </ul>
      </div>

      <div className="section opportunity">
        <h2>Opportunity</h2>
        <p>Discover various opportunities that the Swarozgar Fellowship can offer to help you achieve your entrepreneurial goals.</p>
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
          <a href="https://forms.gle/your-google-form-url" target="_blank" rel="noopener noreferrer">
            Fill Google Form
          </a>
        </button>
      </div>
    </div>
  );
}

export default OptionComponent;
