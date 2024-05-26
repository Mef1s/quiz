import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple');
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const shuffleAnswers = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].correct_answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Koniec quizu, możesz tutaj dodać obsługę zakończenia quizu
      console.log('Quiz ended!');
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestionData = questions[currentQuestion];
  const shuffledAnswers = shuffleAnswers([
    currentQuestionData.correct_answer,
    ...currentQuestionData.incorrect_answers,
  ]);

  return (
    <div>
      <h2>{currentQuestionData.question}</h2>
      <div>
        {shuffledAnswers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
      <p>Question {currentQuestion + 1} of {questions.length}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default Quiz;
