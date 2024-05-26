import Menu from './components/Menu';
import Main from './components/mainscreen';
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
