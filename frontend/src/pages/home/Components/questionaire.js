import React, { useState } from 'react';
import styles from "../Style/questionsComponent.module.css"

const questions = [
  {
    question: "Do you like React?",
    options: ["Yes", "No"]
  },
  {
    question: "Is JavaScript your favorite language?",
    options: ["Yes", "No"]
  },
  {
    question: "Do you use Git for version control?",
    options: ["Yes", "No"]
  }
];

function QuestionsComponent() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
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
          <button
            key={index}
            className={styles.button}
            onClick={() => handleAnswer(option)}
          >
            
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionsComponent;
