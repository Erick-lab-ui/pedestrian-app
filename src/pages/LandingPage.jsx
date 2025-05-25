import React from 'react';
import './LandingPage.css'; // We'll create this CSS file next

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-overlay">
        <h1 className="landing-title">"Welcome!Walk smart,walk safe."</h1>
       <p className="landing-subtitle">
  Empowering pedestrians with the knowledge they need to navigate streets safely and confidently.
  Discover the meaning behind street signs, understand how streetlights guide your way,
  and learn essential lane safety practices for a safer walking experience.
</p>

      </div>
    </div>
  );
}

export default LandingPage;
