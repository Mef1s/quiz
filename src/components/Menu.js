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
          <nav>
            <ul>
              <li id="menubutton-active"><Link to="/mainpage">Odkrywaj</Link></li>
              <li id="menubutton"><Link to="/quizy-szkolne">Quizy szkolne</Link></li>
              <li id="menubutton"><Link to="/quizy-spolecznosciowe">Quizy społecznościowe</Link></li>
              <li id="menubutton"><Link to="/moje-quizy">Moje quizy</Link></li>
              <li id="menubutton"><Link to="/moja-biblioteka">Moja biblioteka</Link></li>
            </ul>
          </nav>
        </div>
          <div id="profile">
          <Link to="/profile" id="profile-link">
            <img src={user} width={50} style={{ borderRadius: "50%" }} alt="user-image" /></Link>
            <div id="user-info">
              <div id="user-name">Username</div>
              <div id="user-mail">Usermail@gmail.com</div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default About;
