import logo from './logoQ.png';
import user from './user.png';
import quit from './quit.png';
import lookup from './lookup.png';
import ico_1 from './Component 1.png';
import ico_2 from './Component 2.png';
import ico_3 from './Component 3.png';
import ico_4 from './Component 4.png';
import ico_5 from './Component 5.png';
import ico_6 from './Component 6.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <div id="menu">
        <div id="menu-content">
          <img src={logo} width={400} alt="Logo" />
          <div id="menubutton-active">Odkrywaj</div>
          <div id="menubutton">Quizy szkolne</div>
          <div id="menubutton">Quizy społecznościowe</div>
          <div id="menubutton">Moje quizy</div>
          <div id="menubutton">Moja biblioteka</div>
        </div>
        <div id="profile">
          <img src={user} width={50} style={{ borderRadius: "50%" }} alt="user-image" />
          <div id="user-info">
            <div id="user-name">Simp Hunter</div>
            <div id="user-mail">Simp_Hunter69@gmail.com</div>
          </div>
          <div id="quit">
            <img src={quit} width={50} style={{ borderRadius: "50%" }} alt="user-image" />
          </div>
        </div>
      </div>



        <div id="main">
          <div id="title">{/*Opcjonalny tytuł*/}</div> 
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


export default App;
