import React, { useState } from 'react';
import './CSS/QuizCreator.css';
import Menu from './Menu.js';

function QuizySzkolne() {
  return (
    <div className="container">
      <div id="menu">
        <Menu />
      </div>
        <div id="main">
            Bardzo obszerna lista quizów, problem polega jednak na tym że nie istnieje
        </div>
    </div>
  );
}

export default QuizySzkolne;
