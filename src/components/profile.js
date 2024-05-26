import Menu from './Menu.js';
import Main from './LoginForm.jsx';
import './CSS/maincss.css';
function mainp() {
  return (
    <div className="container">
      <div id="menu">
      <Menu />
      </div>
        <div id="main">
        <Main />
        </div>
      </div>
  );
}


export default mainp;
