import React from 'react';
import { Link } from 'react-router-dom';
import './MenuHeader.css';

const MenuHeader = () => {
  return (
    <header className="header">

      <nav>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/upvideos">UpVideos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MenuHeader;
