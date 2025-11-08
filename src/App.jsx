import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import MainPage from './MainPage.jsx';
import Cennik from './Cennik.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cennik" element={<Cennik />} />
      </Routes>
    </Router>
  );
}

export default App;
