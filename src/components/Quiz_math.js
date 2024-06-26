import React, { useState, useEffect } from 'react';
import Menu from './Menu.js';
import './CSS/Quizy.css';

const Quiz_books = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [quizEnded, setQuizEnded] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple');
      const data = await response.json();
      console.log('Fetched data:', data); // Dodaj diagnostykę
      if (data.results && data.results.length > 0) {
        setQuestions(data.results);
        setLoading(false); // Ustawienie flagi loading na false po pobraniu danych
      } else {
        console.warn('No questions returned from API');
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);
    }
  };

  const shuffleAnswers = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].correct_answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizEnded(true);
      console.log('Quiz ended!');
    }
  };

  // Sprawdź, czy dane są ładowane
  if (loading) {
    return <div>Loading...</div>;
  }

  // Sprawdź, czy nie ma pytań
  if (!questions || questions.length === 0) {
    return <div>No questions available</div>;
  }

  // Sprawdź, czy quiz zakończył się
  if (quizEnded) {
    const percentageScore = ((score / questions.length) * 100).toFixed(2);
    return (
      <div className="container">
        <div id="menu">
          <Menu />
        </div>
        <div id="main">
          <div className="summary">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} out of {questions.length}</p>
            <p>Percentage: {percentageScore}%</p>
          </div>
        </div>
      </div>
    );
  }

  // Jeśli wszystko jest w porządku, renderuj pytania
  const currentQuestionData = questions[currentQuestionIndex];
  const shuffledAnswers = shuffleAnswers([
    currentQuestionData.correct_answer,
    ...currentQuestionData.incorrect_answers,
  ]);

  return (
    <div className="container">
      <div id="menu">
        <Menu />
      </div>
      <div id="main">
        <div className="top-section">
          <h2>{currentQuestionData.question}</h2>
        </div>
        <div className="bottom-section">
          <div className="buttons-grid">
            {shuffledAnswers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswer(answer)}>
                {answer}
              </button>
            ))}
          </div>
        </div>
        <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default Quiz_books;
