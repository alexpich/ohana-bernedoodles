import React from 'react';
import './ParentDogs.css';

const ParentDogs: React.FC = () => {
  return (
    <div className="parent-dogs">
      <h1>Our Parent Dogs</h1>
      <div className="parents-grid">
        <div className="parent-card">
          <img src="/images/Tee.heic" alt="Mother Dog" /> {/* Add your image path */}
          <h2>Mother: Tee</h2>
          <p>F1B Bernedoodle</p>
          <ul>
            <li>Health Tested</li>
            <li>Chocolate Merle</li>
            <li>Wonderful temperament</li>
          </ul>
        </div>
        
        <div className="parent-card">
          <img src="/placeholder-dad.jpg" alt="Father Dog" /> {/* Add your image path */}
          <h2>Father: TBD</h2>
          <p>TBD</p>
          <ul>
            <li>Health Tested</li>
            <li>OFA Certified</li>
            <li>Gentle disposition</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParentDogs; 