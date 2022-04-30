import React, { useState } from 'react';
import './App.css';

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Navbar, Header } from './components';
import { Overview, Tickets, Login } from './pages';

function App() {
  // Page name
  const [page, setPage] = useState("")

  // User
  const [user, setUser] = useState({
    email: "test@gmail.com"
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
    console.log('logout')
    setUser({
      email: ""
    })
  }


  return (
    <div className="App">
      <BrowserRouter>

      {(user.email === "") ? (
        <>
          <Login loginData={loginData} />
        </>
      ) : (
        <>
          <Navbar />
          <main>
            <Header logout={logout} page={page} />
            <Routes>
              <Route path="/overview" element={<Overview page={setPage} />} />
              <Route path="/tickets" element={<Tickets page={setPage} />} />
              <Route path="*" element={<h1>Nie ma takiej strony</h1>} />
            </Routes>
          </main>
        </>
      )}

      </BrowserRouter>
    </div>
  );
}

export default App;
