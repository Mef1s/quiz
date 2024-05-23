import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";




const LoginForm = () => {
    return (
        
        <div className='wrapper'>
            <form action="">
                <h1> Zaloguj się</h1>
                <div className="inputbox">
                    <input type="text" 
                    placeholder='Nazwa użytkownika' required />
                    <FaUser className='icon' />
                </div>
                <div className="inputbox">
                    <input type="password" 
                    placeholder='Hasło' required />
                    <FaLock className='icon' />
                </div>

                <div className="Przypomnij">
                    <label>
                        <input type="checkbox" /> Pamiętaj mnie </label>
                        <a href="#"> Zapomniałeś hasła?</a>
                </div>

                <button type="sumbit">Zaloguj się</button>

                <div className="zarejestruj">
                    <p>Nie masz konta? <a href="RegisterForm.jsx">Zarejestruj się.</a></p>
                </div>
                
            </form>
            </div>
    )
}

export default LoginForm;