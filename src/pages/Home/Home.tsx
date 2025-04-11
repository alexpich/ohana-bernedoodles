import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  console.log('Home component rendered');

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Ohana Bernedoodles</h1>
        <p>Breeding loving, healthy Bernedoodle puppies for your family</p>
      </div>
      
      <div className="features-section">
        <div className="feature">
          <h2>Quality Breeding</h2>
          <p>Health-tested parents and carefully planned breeding programs</p>
        </div>
        <div className="feature">
          <h2>Family Raised</h2>
          <p>All puppies are raised in our home with love and care</p>
        </div>
        <div className="feature">
          <h2>Lifetime Support</h2>
          <p>We're here to support you throughout your puppy's life</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 