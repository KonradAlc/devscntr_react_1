import React, { useState } from 'react';
import './login.css';

import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


const Login = ({ loginData, error}) => {
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      errMsg: ""
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

  // Form validation
  const checkForm = () => {
    let success = true
    return success
  }

  const handleSubmit = e => {
    e.preventDefault();
    checkForm() && loginData(formData)
    console.log(formData)
  }
  

  return (
    <div className="container">
      <div className="login-box">
          <img src={logo} alt="Dashboard Kit" />
          <h3>Dashborad Kit</h3>
          <h1>Log In to Dashborad Kit</h1>
          <span>Enter your email and password below</span>

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
                  value={ formData.password }
                  required
                />
                <div className="error"></div>
            </div>

            <button className='login-form__btn'>Log in</button>
          </form>
          
          <>Don't have an account? <Link to="/register" className='text--link'>Sign up</Link></>
      </div>
    </div>
  )
}

export default Login;