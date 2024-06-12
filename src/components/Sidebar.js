import React from 'react';
import './style.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Quick Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/contactus">Contact</a></li>
          <li><a href="/faq">FAQs</a></li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Recommended Reading</h3>
        <ul>
          <li><a href="/article1">Article 1</a></li>
          <li><a href="/article2">Article 2</a></li>
          <li><a href="/article3">Article 3</a></li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Follow Us</h3>
        <ul className="social-links">
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
