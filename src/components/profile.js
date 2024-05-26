import React, { useState } from 'react';
import './CSS/QuizCreator.css';
import Menu from './Menu.js';

function QuizCreator() {
  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    questions: [{ text: '', answers: [{ text: '', isCorrect: false }], isOpen: true }]
  });

  const handleTitleChange = (e) => {
    setQuizData({ ...quizData, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setQuizData({ ...quizData, description: e.target.value });
  };

  const handleQuestionChange = (text, index) => {
    const questions = [...quizData.questions];
    questions[index].text = text;
    setQuizData({ ...quizData, questions });
  };

  const handleAnswerChange = (answer, questionIndex, answerIndex) => {
    const questions = [...quizData.questions];
    questions[questionIndex].answers[answerIndex].text = answer;
    setQuizData({ ...quizData, questions });
  };

  const handleCorrectAnswerChange = (questionIndex, answerIndex) => {
    const questions = [...quizData.questions];
    questions[questionIndex].answers.forEach((answer, index) => {
      if (index === answerIndex) {
        answer.isCorrect = true;
      } else {
        answer.isCorrect = false;
      }
    });
    setQuizData({ ...quizData, questions });
  };

  const addQuestion = () => {
    if (quizData.questions.length < 10) {
      setQuizData({
        ...quizData,
        questions: [...quizData.questions, { text: '', answers: [{ text: '', isCorrect: false }], isOpen: true }]
      });
    }
  };

  const removeQuestion = (index) => {
    const questions = [...quizData.questions];
    questions.splice(index, 1);
    setQuizData({ ...quizData, questions });
  };

  const addAnswer = (questionIndex) => {
    const questions = [...quizData.questions];
    if (questions[questionIndex].answers.length < 4) {
      questions[questionIndex].answers.push({ text: '', isCorrect: false });
      setQuizData({ ...quizData, questions });
    }
  };

  const removeAnswer = (questionIndex, answerIndex) => {
    const questions = [...quizData.questions];
    questions[questionIndex].answers.splice(answerIndex, 1);
    setQuizData({ ...quizData, questions });
  };

  const toggleQuestion = (questionIndex) => {
    const questions = [...quizData.questions];
    questions[questionIndex].isOpen = !questions[questionIndex].isOpen;
    setQuizData({ ...quizData, questions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quizData); // Tutaj możesz wysłać dane na serwer lub wykonać inne operacje
  };

  return (
    <div className="container">
      <div id="menu">
        <Menu />
      </div>
      <div id='main'>
        <form onSubmit={handleSubmit}>
          <label>
            Tytuł Quizu:
            <input type="text" value={quizData.title} onChange={handleTitleChange} />
          </label>
          <label>
            <br></br>
            <br></br>
            Opis Quizu:
            <textarea value={quizData.description} onChange={handleDescriptionChange} />
          </label>
          {quizData.questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <label>
                <br></br>
                Pytanie {questionIndex + 1}:
                <input
                  type="text"
                  value={question.text}
                  onChange={(e) => handleQuestionChange(e.target.value, questionIndex)}
                />
              </label>
              <button type="button" onClick={() => removeQuestion(questionIndex)}>
                Usuń Pytanie
              </button>
              <button type="button" onClick={() => toggleQuestion(questionIndex)}>
                {question.isOpen ? 'Zwiń Pytanie' : 'Rozwiń Pytanie'}
              </button>
              {question.isOpen && (
                <>
                  {question.answers.map((answer, answerIndex) => (
                    <div key={answerIndex}>
                      <label>
                        <br></br>
                        Odpowiedź {answerIndex + 1}:
                        <input
                          type="text"
                          value={answer.text}
                          onChange={(e) => handleAnswerChange(e.target.value, questionIndex, answerIndex)}
                        />
                      </label>
                      <label>
                        Poprawna:
                        <input
                          type="checkbox"
                          checked={answer.isCorrect}
                          onChange={() => handleCorrectAnswerChange(questionIndex, answerIndex)}
                        />
                      </label>
                      <button type="button" onClick={() => removeAnswer(questionIndex, answerIndex)}>
                        Usuń Odpowiedź
                      </button>
                    </div>
                  ))}
                  {question.answers.length < 4 &&
                    <button type="button" onClick={() => addAnswer(questionIndex)}>Dodaj Odpowiedź</button>
                  }
                </>
              )}
            </div>
          ))}
          {quizData.questions.length < 10 &&
            <button type="button" onClick={addQuestion}>Dodaj Pytanie</button>
          }
          <br></br>
          <button type="submit">Potwierdź Quiz</button>
        </form>
      </div>
    </div>
  );
}

export default QuizCreator;
