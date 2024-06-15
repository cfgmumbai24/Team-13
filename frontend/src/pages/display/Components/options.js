import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Style/optionsComponent.module.css';

const question = {
  question: 'What are you looking for ?',
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
    } else if (selectedAnswer === 'I need to make a network') {
      navigate('/');
    } else if (selectedAnswer === 'I need more emplyees') {
      navigate('/');
    } else if (selectedAnswer === 'I need resources for my business') {
      navigate('/');
    }
  };

  return (
    <div className={styles.questionnaire}>
      <div className={styles.questionContainer}>
        <h3>{question.question}</h3><br/>
        <div className={styles.questionbox}>
          <button
            className={styles.button}
            onClick={() => handleAnswer('Apply for Swarozgar Fellowship')}
          >
            Apply for Swarozgar Fellowship                   
          </button>
          <br/>
          <br/>
          <button
            className={styles.button}
            onClick={() => handleAnswer('I need to upscale my business')}
          >
            I need to upscale my business
          </button>
          <br/>
          <br/>
          <button
            className={styles.button}
            onClick={() => handleAnswer('I need to make a network')}
          >
            I need to make a network
          </button>
          <br/>
          <br/>
          <button
            className={styles.button}
            onClick={() => handleAnswer('I need more emplyees')}
          >
            I need more emplyees
          </button>
          <br/>
          <br/>
          <button
            className={styles.button}
            onClick={() => handleAnswer('I need resources for my business')}
          >
            I need resources for my business
          </button>
        </div>
      </div>
    </div>
  );
}

export default OptionComponent;
