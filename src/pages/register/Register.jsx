import React from 'react';
import './register.css';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';


const Register = () => {
  return (
    <div className="container">
      <div className="register-box">
          <img src={logo} alt="Dashboard Kit" />
          <h3>Dashborad Kit</h3>
          <h1>Register to Dashborad Kit</h1>
          <span>Enter your data to create new account!</span>

          <form className='register-form' onSubmit={e => {e.preventDefault()}}>
            <div className="input-row">

              <div className="input-box">
                  <label htmlFor="username">USERNAME</label>
                  <input 
                    type="text" 
                    id="username" 
                    name="username"
                    placeholder="Username" 
                    autoComplete="off"
                    required
                  />
                  <div className="error"></div>
              </div>

              <div className="input-box">
                <label htmlFor="email">EMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="Email address" 
                  autoComplete="off"
                  required
                />
                <div className="error"></div>
              </div>

            </div>
            <div className="input-row">

              <div className="input-box">
                  <label htmlFor="password">PASSWORD</label>
                  <input 
                    type="password" 
                    id="password" 
                    name="password"
                    placeholder="Password" 
                    autoComplete="off"
                    required
                  />
                  <div className="error"></div>
              </div>

              <div className="input-box">
                <label htmlFor="password-repeat">REPEAT PASSWORD</label>
                <input 
                  type="password" 
                  id="password-repeat" 
                  name="password-repeat"
                  placeholder="Repeat password" 
                  autoComplete="off"
                  required
                />
                <div className="error"></div>
              </div>

            </div>
            

            <button className='register-form__btn'>Register</button>
          </form>
          
          <>Do you have account already? <Link to="/" className='text--link'>Log in</Link></>
      </div>
    </div>
  )
}

export default Register;