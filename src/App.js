import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './mainpage.js';
import Menu from './components/Menu.js';
import mainscreen from './components/mainscreen.js';
import QuizySzkolne from './components/QuizySzkolne.js';
import QuizySpolecznosciowe from './components/QuizySpolecznosciowe.js';
import MojeQuizy from './components/MojeQuizy';
import Profile from './components/profile.js';
import Quiz from './components/Quiz.js';

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
</Routes>

      </div>
    </Router>
  );
}

export default App;
