import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import KnowledgePage from './pages/KnowledgePage';
import FeedbackPage from './pages/FeedbackPage';
import UserFeedbackPage from './pages/UserFeedbackPage'; // Your new page

import './components/Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/knowledge" className={location.pathname === '/knowledge' ? 'active' : ''}>Knowledge</Link>
      <Link to="/feedback" className={location.pathname === '/feedback' ? 'active' : ''}>Feedback</Link>
      <Link to="/user-feedback" className={location.pathname === '/user-feedback' ? 'active' : ''}>User Feedback</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/user-feedback" element={<UserFeedbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
