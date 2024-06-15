import React, { useState } from 'react';
import styles from '../Style/questionsComponent.module.css';

const questions = [
  {
    question: 'Do you like React?',
    options: ['Yes', 'No'],
  },
  {
    question: 'Is JavaScript your favorite language?',
    options: ['Yes', 'No'],
  },
  {
    question: 'Do you use Git for version control?',
    options: ['Yes', 'No'],
  },
];

function QuestionsComponent() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (option) => {
    // Check if the option is already selected
    if (!answers.includes(option)) {
      setAnswers([...answers, option]); // Add the option to answers array
    } else {
      setAnswers(answers.filter((ans) => ans !== option)); // Remove the option if already selected
    }
  };

  const handleNext = () => {
    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered
      console.log('Answers:', answers);
      alert('Thank you for answering the questions!');
    }
  };

  return (
    <div className={styles.questionnaire}>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <div>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <label key={index} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={answers.includes(option)}
              onChange={() => handleAnswer(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button className={styles.button} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default QuestionsComponent;
