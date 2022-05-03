import React, { useState } from 'react';
import './App.css';

import { Routes, Route, BrowserRouter, Navigate, useNavigate } from 'react-router-dom';
import { Navbar, Header } from './components';
import { Overview, Tickets, Login, Register } from './pages';

function App() {
  // Page name
  const [page, setPage] = useState("Login")

  // User
  const [user, setUser] = useState({
    email: ""
  })
  
  const loginData = data => {
    console.log('login')
    if (data.email != "") {
      setUser({
        email: data.email
      })
    }
  }


  const logout = () => {
    setUser({
      email: ""
    })
  }


  return (
    <div className="App">
      <BrowserRouter>

      {(user.email === "") ? (
        <>
          <Routes>
            <Route path="/login" element={<Login loginData={loginData} />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </>
      ) : (
        <>
          <Navbar />
          <main>
            <Header logout={logout} page={page} />
            <Routes>
              <Route path="/app">
                <Route path="overview" element={<Overview page={setPage} />} />
                <Route path="tickets" element={<Tickets page={setPage} />} />
              </Route>
              
              <Route path="*" element={<Navigate to="/app/overview" />} />
            </Routes>
          </main>
        </>
      )}

      </BrowserRouter>
    </div>
  );
}

export default App;
