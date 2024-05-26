import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/logoQ.png';
import user from './Images/user.png';
import './CSS/menu.css';

function About() {
  return (
    <div className="container">
      <div id="menu">
        <div id="menu-content">
          <img src={logo} width={400} alt="Logo" />
          <div id="menubutton-active"><Link to="/">Odkrywaj</Link></div>
          <div id="menubutton"><Link to="/QuizySzkolne">Quizy szkolne</Link></div>
          <div id="menubutton"><Link to="/quizy-spolecznosciowe">Quizy społecznościowe</Link></div>
          <div id="menubutton"><Link to="/mojequizy">Dodaj Quiz</Link></div>
        </div>
        <div id="profile">
          <Link to="/profile"><img src={user} width={50} style={{ borderRadius: "50%" }} alt="user-image" /></Link>
          <div id="user-info">
            <div id="user-name">Simp Hunter</div>
            <div id="user-mail">Simp_Hunter69@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
