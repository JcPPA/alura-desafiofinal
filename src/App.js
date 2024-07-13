import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/PageHome/Home.js';
import UpVideos from './components/PageUpVideos/UpVideos.js';
import NotFound from './components/PageNotFound/NotFound.js';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upvideos" element={<UpVideos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;