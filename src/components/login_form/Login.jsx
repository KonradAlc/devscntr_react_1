import React from 'react';
import './login.css';


const LoginForm = () => {
  return (
    <>
        <form className='login-form'>
            <div className="input-box">
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" placeholder="Email address" />
                <div className="error"></div>
            </div>
            <div className="input-box">
                <label htmlFor="email">PASSWORD</label>
                <input type="password" id="password" placeholder="Password" />
                <div className="error"></div>
            </div>
            <button className='login-form__btn'>Log in</button>
        </form>
    </>
  )
}

export default LoginForm;