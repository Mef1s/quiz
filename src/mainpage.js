import Menu from './components/Menu.js';
import Main from './components/mainscreen.js';
import './maincss.css';
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
