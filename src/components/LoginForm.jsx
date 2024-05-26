import React from 'react';
import './CSS/LoginForm.css';


const LoginForm = () => {
    return (
        <div className="container">
        <div id="main">
            <form action="">
                <h1> Zaloguj się</h1>
                <div className="inputbox">
                    <input type="text" 
                    placeholder='Nazwa użytkownika' required />

                </div>
                <div className="inputbox">
                    <input type="password" 
                    placeholder='Hasło' required />

                </div>

                <div className="Przypomnij">
                    <label>
                        <input type="checkbox" /> Pamiętaj mnie </label>
                </div>

                <button type="sumbit">Zaloguj się</button>

                <div className="zarejestruj">
                    <p>Nie masz konta? <a href="RegisterForm.jsx">Zarejestruj się.</a></p>
                </div>
                
            </form>
            </div></div>
    )
}

export default LoginForm;