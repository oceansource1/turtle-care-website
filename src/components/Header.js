import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="header-content">
            <h1>Welcome to Turtle Care Sharing</h1>
            <div className="nav-buttons">
              <Link to="/login-register" className="button">Login</Link>
              <Link to="/register" className="button">Register</Link>
            </div>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/basics">Turtle Basics</Link></li>
              <li><Link to="/environment">Habitat Setup</Link></li>
              <li><Link to="/feeding">Feeding</Link></li>
              <li><Link to="/health">Health Care</Link></li>
              <li><Link to="/species">Species</Link></li>
              <li><Link to="/communitystories">Community Stories</Link></li>
              <li><Link to="/events-news">Events & News</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
