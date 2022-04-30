import React from 'react';
import './login.css';

import { useRef, useState, useEffect } from 'react';
import logo from '../../assets/logo.png';


const Login = () => {
  
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [passwd, setPasswd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, passwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user, passwd)
    setUser('')
    setPasswd('')
    setSuccess(true)
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
                  placeholder="Email address" 
                  ref={userRef}
                  autoComplete="off"
                  onChange={ e => setUser(e.target.value) }
                  value={user}
                  required
                />
                <div className="error"></div>
            </div>

            <div className="input-box">
                <label htmlFor="email">PASSWORD</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="Password" 
                  onChange={ e => setPasswd(e.target.value) }
                  value={passwd}
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