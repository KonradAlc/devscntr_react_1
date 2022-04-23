import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar, Header } from './components';
import { Overview } from './pages';

function App() {
  return (
    <div className="App">
        <Navbar />
        <main>
          <Header />
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
