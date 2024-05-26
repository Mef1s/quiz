import React from 'react';
import lookup from './Images/lookup.png';
import ico_1 from './Images/Component 1.png';
import ico_2 from './Images/Component 2.png';
import ico_3 from './Images/Component 3.png';
import ico_4 from './Images/Component 4.png';
import ico_5 from './Images/Component 5.png';
import ico_6 from './Images/Component 6.png';
import './CSS/mainpage.css';

function Contact() {
  return (
    <div className="container">
      <div id="main">
        <div id="title">{/* Opcjonalny tytuł */}</div> 
          <div id='lookup_area'>Szukaj Quizów..
            <div id='lookup_image'>
              <img src={lookup} width={50} style={{ borderRadius: "50%" }} alt="lookup-image" />
            </div>
          </div>
          <div id='ico_area'>
            <div id='main_ico'>
              <img src={ico_1} alt="ico-button" />
              <div id='ico_text'>Humanistyczne</div>
            </div>
            <div id='main_ico'>
              <img src={ico_2} alt="ico-button" />
              <div id='ico_text'>Ścisłe</div>
            </div>
            <div id='main_ico'>
              <img src={ico_3} alt="ico-button" />
              <div id='ico_text'>Języki obce</div>
            </div>
            <div id='main_ico'>
              <img src={ico_4} alt="ico-button" />
              <div id='ico_text'>Szkoła podstawowa</div>
            </div>
            <div id='main_ico'>
              <img src={ico_5} alt="ico-button" />
              <div id='ico_text'>Szkoła średnia</div>
            </div>
            <div id='main_ico'>
              <img src={ico_6} alt="ico-button" />
              <div id='ico_text'>Społecznościowe</div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Contact;
