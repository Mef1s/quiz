import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Mainpage from './mainpage.js';
import logo from './Images/logoQ.png';
import background_landing from './Images/background_landing.png';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/mainpage" element={<Mainpage />} />
                </Routes>
                    <Link to="/mainpage">
                    <div id="logo-button">
                        <img src={logo} alt="Logo" />
                    </div>
                    </Link>
            </div>
        </Router>
    );
}

export default App;
