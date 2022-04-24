import React, { useState } from 'react';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar, Header } from './components';
import { Overview } from './pages';

function App() {
  const [page, setPage] = useState("Overview")

  return (
    <div className="App">
        <Navbar />
        <main>
          <Header page={page} />
          <BrowserRouter>
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="*" element={<h1>Nie ma takiej strony</h1>} />
            </Routes>
          </BrowserRouter>
        </main>
    </div>
  );
}

export default App;
