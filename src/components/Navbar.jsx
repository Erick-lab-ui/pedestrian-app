import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/knowledge' ? 'active' : ''}`}>
          <Link to="/knowledge">Knowledge</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/feedback' ? 'active' : ''}`}>
          <Link to="/feedback">Feedback</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/user-feedback' ? 'active' : ''}`}>
          <Link to="/user-feedback">User Feedback</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
