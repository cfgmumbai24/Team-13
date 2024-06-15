import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/option.css'; // Importing the CSS file directly

const question = {
  question: 'SWAROZGAR FELLOWSHIP',
};

function OptionComponent() {
  const [answer, setAnswer] = useState(null);
  const navigate = useNavigate();

  const handleAnswer = (selectedAnswer) => {
    setAnswer(selectedAnswer);
    // Redirect based on the selected answer
    if (selectedAnswer === 'Starting/Expanding a business') {
      navigate('/jobs');
    } else if (selectedAnswer === 'Exploring jobs near me') {
      navigate('/');
    }
  };

  return (
    <div className="container">
      <h1>{question.question}</h1>
      <div className="section whatIs">
        <h2>What is Swarozgar Fellowship?</h2>
        <p>The Swarozgar Fellowship is a program designed to support individuals in starting or expanding their businesses. It provides mentorship, resources, and financial assistance to help entrepreneurs succeed.</p>
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
      <div className="section achievers">
        <h2>Our Achievers</h2>
        <p>Meet some of our successful fellows who have started and grown their businesses with the help of the Swarozgar Fellowship.</p>
        <div className="achieversList">
          <div className="achiever">
            <h3>Achiever 1</h3>
            <p>Details about Achiever 1's success story.</p>
          </div>
          <div className="achiever">
            <h3>Achiever 2</h3>
            <p>Details about Achiever 2's success story.</p>
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
