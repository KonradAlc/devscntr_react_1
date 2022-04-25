import React, { useState } from 'react';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar, Header } from './components';
import { Overview, Tickets } from './pages';

function App() {
  const [page, setPage] = useState("Overview")

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Header />
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="*" element={<h1>Nie ma takiej strony</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
