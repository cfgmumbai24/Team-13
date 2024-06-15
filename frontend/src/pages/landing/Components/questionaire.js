import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Style/questionsComponent.module.css';

const question = {
  question: 'What are you looking for ?',
};

function QuestionsComponent() {
  const [answer, setAnswer] = useState(null);
  const navigate = useNavigate();

  const handleAnswer = (selectedAnswer) => {
    setAnswer(selectedAnswer);
    // Redirect based on the selected answer
    if (selectedAnswer === 'Starting/Expanding a business') {
      navigate('/display');
    } else if (selectedAnswer === 'Exploring jobs near me') {
      navigate('/');
    }
    else if (selectedAnswer === 'Businesses near me') {
      navigate('/location');
    }
  };

  return (
    <div className={styles.questionnaire}>
      <div className={styles.questionContainer}>
        <h3>{question.question}</h3><br />
        <div className={styles.questionbox}>
          <button
            className={styles.button}
            onClick={() => handleAnswer('Starting/Expanding a business')}
          >
            Starting/Expanding a business
          </button>
          <br />
          <br />
          <button
            className={styles.button}
            onClick={() => handleAnswer('Exploring jobs near me')}
          >
            Exploring jobs near me
          </button>
          <br/>
          <br/>
          <button
            className={styles.button}
            onClick={() => handleAnswer('Businesses near me')}
          >
            Businesses near me
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionsComponent;
