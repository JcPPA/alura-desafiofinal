import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './components/PageHome/Home.js';
import UpVideos from './components/PageUpVideos/UpVideos.js';
import NotFound from './components/PageNotFound/NotFound.js';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="app-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>StudyFlix</title>
          <meta name="description" content="Este app criado por React tem a função de criar links entre diferentes conteúdos almejados." />
          <link rel="canonical" href="https://www.studyflix.com/" />
          <link rel="icon" href="%PUBLIC_URL%/logo.ico" />


        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upvideos" element={<UpVideos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
