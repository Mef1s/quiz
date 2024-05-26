import React from 'react';
import './CSS/list.css'; // Import stylów CSS
import Menu from './Menu.js';
import { Link } from 'react-router-dom';

const QuizList = () => {
  // Lista quizów
  const quizzes = ['Books', 'Film', 'Games'];

  return (
    <div className="container">
      <div id="menu">
        <Menu />
      </div>
      <div id="main">
        <div className="quiz-list">
          <h2>Quiz List</h2>
          <ul>
            {/* Mapowanie quizów na elementy listy */}
            {quizzes.map((quiz, index) => (
              <li key={index}>
                {/* Dodanie linku dla każdego quizu */}
                <Link to={`/quiz_${quiz.toLowerCase()}`}>{quiz}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizList;
