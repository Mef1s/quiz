import React from 'react';
import './RegisterForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";




const RegisterForm = () => {
    return (
        
        <div className='wrapper'>
            <form action="">
                <h1> Zarejestruj się</h1>
                <div className="inputbox">
                    <input type="text" 
                    placeholder='Nazwa użytkownika' required />
                    <FaUser className='icon' />
                </div>
                <div className="inputbox">
                    <input type="text" 
                    placeholder='E-mail' required />
                    <IoIosMail className='icon' />
                </div>
                <div className="inputbox">
                    <input type="password" 
                    placeholder='Hasło' required />
                    <FaLock className='icon' />
                </div>
                <div className="inputbox">
                    <input type="password" 
                    placeholder='Powtórz hasło' required />
                    <FaLock className='icon' />
                </div>

                <button type="sumbit">Zarejestruj się</button>

                <div className="zarejestruj">
                    <p>Masz już konto? <a href="LoginForm.jsx">Zaloguj się.</a></p>
                </div>

            </form>
            </div>
    )
}

export default RegisterForm;