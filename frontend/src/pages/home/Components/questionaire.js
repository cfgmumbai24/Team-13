import React, { useState } from 'react';
import axios from 'axios';
import styles from '../Style/questionsComponent.module.css';

const assetsQuestions = [
  {
    question: 'What are the assets you own or can manage to arrange?',
    options: [
      'Land area',
      'Pine needles',
      'Storage space',
      'Enough sightseeing spots around the location',
      'Infrastructure facilities',
      'Advertisement and promotion capital',
      'Camping kit and basic amenities',
      'Camera',
      'Local rich natural areas with diverse bird and wildlife',
      'Land for sheltering',
      'Cattle',
      'Cattle feedstock',
    ],
  },
];

const skillsQuestions = [
  {
    question: 'Which of the following are you interested in?',
    options: [
      'Technical training',
      'Power operators',
      'Maintenance of machines',
      'Hospitality skills',
      'Verbal skills',
      'Photography',
      'Knowledge',
      'Animal keeping',
      'Animal healthcare',
      'Dairy product development',
    ],
  },
];

function QuestionsComponent() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({
    assets: [],
    skills: [],
  });

  const handleAnswer = (questionType, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionType]: prevAnswers[questionType].includes(option)
        ? prevAnswers[questionType].filter((ans) => ans !== option)
        : [...prevAnswers[questionType], option],
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < assetsQuestions.length + skillsQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('All Answers:', answers);
      // Send answers to backend
      axios.post('http://127.0.0.1:5000/recommend', answers)
        .then(response => {
          console.log('Recommendations:', response.data);
          alert('Recommendations: ' + response.data);
        })
        .catch(error => {
          console.error('Error fetching recommendations:', error);
        });
    }
  };

  return (
    <div className={styles.questionnaire}>
      <div className={styles.questionContainer}>
        <h3>
          {currentQuestionIndex < assetsQuestions.length
            ? assetsQuestions[currentQuestionIndex].question
            : skillsQuestions[currentQuestionIndex - assetsQuestions.length].question}
        </h3>
        <div>
          {currentQuestionIndex < assetsQuestions.length
            ? assetsQuestions[currentQuestionIndex].options.map((option, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={answers.assets.includes(option)}
                  onChange={() => handleAnswer('assets', option)}
                />
                {option}
              </label>
            ))
            : skillsQuestions[currentQuestionIndex - assetsQuestions.length].options.map(
              (option, idx) => (
                <label key={idx} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={answers.skills.includes(option)}
                    onChange={() => handleAnswer('skills', option)}
                  />
                  {option}
                </label>
              )
            )}
        </div>
      </div>
      <button className={styles.button} onClick={handleNext}>
        {currentQuestionIndex < assetsQuestions.length + skillsQuestions.length - 1
          ? 'Next'
          : 'Submit'}
      </button>
    </div>
  );
}

export default QuestionsComponent;