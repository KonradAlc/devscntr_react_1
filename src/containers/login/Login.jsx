import React from 'react';
import './login.css';

import logo from '../../assets/logo.png';


const Login = () => {
  return (
    <div className="login-box">
        <img src={logo} alt="Dashboard Kit" />
        <h3>Dashborad Kit</h3>
        <h1>Log In to Dashborad Kit</h1>
        <>Enter your email and password below</>

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
        <>Don't have an account? <span className='text--link'>Sign up</span></>
    </div>
  )
}

export default Login;