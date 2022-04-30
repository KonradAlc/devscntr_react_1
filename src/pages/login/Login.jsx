import React, { useRef, useState, useEffect } from 'react';
import './login.css';

import { Navigate } from 'react-router-dom';
import logo from '../../assets/logo.png';


const Login = ({ loginData, error}) => {
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      errMsg: "",
      success: false
    }
  )

  const handleChange = e => {
    setFormData(prevFormData => {
      const { name, value } = e.target
      return (
        {
          ...prevFormData,
          [name]: value
        }
      )
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    loginData(formData)
    console.log(formData)
  }
  

  return (
    <div className="container">
      <div className="login-box">
          <img src={logo} alt="Dashboard Kit" />
          <h3>Dashborad Kit</h3>
          <h1>Log In to Dashborad Kit</h1>
          <>Enter your email and password below</>

          <form className='login-form' onSubmit={ handleSubmit }>
            <div className="input-box">
                <label htmlFor="email">EMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="Email address" 
                  autoComplete="off"
                  onChange={ handleChange }
                  value={ formData.email }
                  required
                />
                <div className="error"></div>
            </div>

            <div className="input-box">
                <label htmlFor="email">PASSWORD</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  placeholder="Password" 
                  onChange={ handleChange }
                  value={ formData.passwd }
                  required
                />
                <div className="error"></div>
            </div>

            <button className='login-form__btn'>Log in</button>
          </form>
          
          <>Don't have an account? <span className='text--link'>Sign up</span></>
      </div>
    </div>
  )
}

export default Login;