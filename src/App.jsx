import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import MainPage from './MainPage.jsx';
import Art from './Arts.jsx';
import Prices from './Prices.jsx';
import Rules from './Rules.jsx';
import InstagramFeed from './instagramFeed.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/art" element={<Art />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/insta" element={<InstagramFeed />} />
      </Routes>
    </Router>
  );
}

export default App;
