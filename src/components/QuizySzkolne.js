import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import './CSS/Quizy.css';

const QuizList = () => {
  const quizzes = ['IT', 'Math', 'science','Books','History','Geography'];

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
