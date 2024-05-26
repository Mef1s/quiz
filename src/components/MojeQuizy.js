import React, { useState } from 'react';
import './CSS/QuizCreator.css';
import Menu from './Menu.js';

function MojeQuizy() {
  return (
    <div className="container">
      <div id="menu">
        <Menu />
      </div>
        <div id="main">
            list quizów i przycisk dodaj nowy
        </div>
    </div>
  );
}

export default MojeQuizy;
