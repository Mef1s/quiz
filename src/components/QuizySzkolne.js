import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import './CSS/Quizy.css';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    // Example quizzes data
    const quizList = [
      { id: 9, name: 'General Knowledge' },
      { id: 17, name: 'Science & Nature' },
      { id: 21, name: 'Sports' },
      { id: 23, name: 'History' },
      { id: 22, name: 'Geography' },
    ];
    setQuizzes(quizList);
  };

  return (
    <div className="container">
      <div id="menu">
        <Menu />
      </div>
      <div id="main">
        <h2>Select a Quiz</h2>
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <Link to={`/quiz/${quiz.id}`}>{quiz.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizList;
