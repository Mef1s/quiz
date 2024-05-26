import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './mainpage.js';
import Menu from './components/Menu.js';
import mainscreen from './components/mainscreen.js';
import QuizySzkolne from './components/QuizySzkolne.js';
import QuizySpolecznosciowe from './components/QuizySpolecznosciowe.js';
import MojeQuizy from './components/MojeQuizy.js'; // Dodany rozszerzenie .js
import Profile from './components/profile.js';
import Quiz from './components/Quiz.js';
import Quiz_books from './components/Quiz_books.js';
import Quiz_film from './components/Quiz_film.js';
import Quiz_games from './components/Quiz_games.js';
import Quiz_general from './components/Quiz_general.js';
import Quiz_geography from './components/Quiz_Geography.js';
import Quiz_history from './components/Quiz_history.js';
import Quiz_IT from './components/Quiz_IT.js';
import Quiz_math from './components/Quiz_math.js';
import Quiz_music from './components/Quiz_music.js';
import Quiz_science from './components/Quiz_science.js';
import Quiz_ent from './components/Quiz_ent.js';
import Quiz_sciences from './components/Quiz_sciences.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/mainscreen" element={<mainscreen />} />
          <Route path="/mojequizy" element={<MojeQuizy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quizyszkolne" element={<QuizySzkolne />} />
          <Route path="/quizy-spolecznosciowe" element={<QuizySpolecznosciowe />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Quiz_books" element={<Quiz_books />} />
          <Route path="/Quiz_film" element={<Quiz_film />} />
          <Route path="/Quiz_games" element={<Quiz_games />} />
          <Route path="/Quiz_general" element={<Quiz_general />} />
          <Route path="/Quiz_geography" element={<Quiz_geography />} />
          <Route path="/Quiz_history" element={<Quiz_history />} />
          <Route path="/Quiz_IT" element={<Quiz_IT />} />
          <Route path="/Quiz_math" element={<Quiz_math />} />
          <Route path="/Quiz_music" element={<Quiz_music />} />
          <Route path="/Quiz_science" element={<Quiz_science />} />
          <Route path="/Quiz_ent" element={<Quiz_ent />} />
          <Route path="/Quiz_sciences" element={<Quiz_sciences />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
