import React from 'react';
import './CSS/RegisterForm.css';




const RegisterForm = () => {
    return (
        <div className="container">
        <div id="main">
        <div className='wrapper'>
            <form action="">
                <h1> Zarejestruj się</h1>
                <div className="inputbox">
                    <input type="text" 
                    placeholder='Nazwa użytkownika' required />
                </div>
                <div className="inputbox">
                    <input type="text" 
                    placeholder='E-mail' required />
                </div>
                <div className="inputbox">
                    <input type="password" 
                    placeholder='Hasło' required />
                </div>
                <div className="inputbox">
                    <input type="password" 
                    placeholder='Powtórz hasło' required />
                </div>

                <button type="sumbit">Zarejestruj się</button>

                <div className="zarejestruj">
                    <p>Masz już konto? <a href="LoginForm.jsx">Zaloguj się.</a></p>
                </div>

            </form>
            </div>
    </div></div>
    )
}

export default RegisterForm;