import React, { useState } from 'react';
import './login.css';

import logo from '../../assets/logo.png';
import { LoginForm, RegisterForm } from '../../components';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


const Login = () => {
  const [login, setLogin] = useState(0);

  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="login-box">
          <img src={logo} alt="Dashboard Kit" />
          <h3>Dashborad Kit</h3>
          <h1>Log In to Dashborad Kit</h1>
          <>Enter your email and password below</>
            <LoginForm />
          <>Don't have an account? <span className='text--link' onClick={navigate("/register")}>Sign up</span></>
      </div>
    </div>
  )
}

export default Login;