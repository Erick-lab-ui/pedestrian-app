import React from 'react';
import './KnowledgePage.css';

const KnowledgePage = () => {
  return (
    <div className="knowledge-container">
      <h1 className="knowledge-title">Street Knowledge</h1>

      <div className="knowledge-item">
        <img src="/OIP.jpg" alt="Pedestrian Zone" />
        <div>
          <h2>Pedestrian Zone</h2>
          <p><strong>Description:</strong> Indicates areas where only pedestrians are allowed.</p>
          <p><strong>Purpose:</strong> Keeps vehicles out of pedestrian-only zones for safety.</p>
        </div>
      </div>

      <div className="knowledge-item">
        <img src="cwz.jpg" alt="Crosswalk Sign" />
        <div>
          <h2>Crosswalk Sign</h2>
          <p><strong>Description:</strong> Marks safe crossing zones for pedestrians.</p>
          <p><strong>Purpose:</strong> Alerts drivers to slow down and yield to walkers.</p>
        </div>
      </div>

<div className="knowledge-item">
  <img src="yield.jpg" alt="Yield Sign" />
  <div>
    <h2>Yield Sign</h2>
    <p><strong>Description:</strong> A triangular sign indicating drivers must slow down and give way.</p>
    <p><strong>Purpose:</strong> Prevents collisions by ensuring vehicles yield to cross traffic or pedestrians.</p>
  </div>
</div>

<div className="knowledge-item">
  <img src="school.jpg" alt="School Zone" />
  <div>
    <h2>School Zone</h2>
    <p><strong>Description:</strong> Sign that warns drivers they are near a school area.</p>
    <p><strong>Purpose:</strong> Protects students by reducing vehicle speed near schools.</p>
  </div>
</div>

<div className="knowledge-item">
  <img src="no go.jpg" alt="No Pedestrian Sign" />
  <div>
    <h2>No Pedestrian Zone</h2>
    <p><strong>Description:</strong> Indicates areas where pedestrian access is not allowed.</p>
    <p><strong>Purpose:</strong> Keeps people safe by warning them to avoid dangerous zones.</p>
  </div>
</div>

      <div className="knowledge-item">
        <img src="stop.jpg" alt="Stop Sign" />
        <div>
          <h2>Stop Sign</h2>
          <p><strong>Description:</strong> A red sign that tells vehicles to stop completely.</p>
          <p><strong>Purpose:</strong> Prevents accidents by regulating vehicle flow at intersections.</p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgePage;
