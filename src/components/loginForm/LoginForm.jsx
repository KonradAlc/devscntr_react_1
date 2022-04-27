import React from 'react';
import './loginForm.css';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  let navigate = useNavigate();

  const loginBtn = e => {
    e.preventDefault()
    navigate("/overview")
  }

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
            <button className='login-form__btn' onClick={loginBtn()}>Log in</button>
        </form>
    </>
  )
}

export default LoginForm;