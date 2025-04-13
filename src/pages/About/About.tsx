import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="page-container about-page">
      <h1>About Ohana Bernedoodles</h1>
      <div className="about-content card">
        <section>
          <h2>Our Story</h2>
          <p>Welcome to Ohana Bernedoodles! We are passionate about breeding healthy,
          well-tempered Bernedoodles that bring joy to families.</p>
        </section>
        
        <section>
          <h2>Our Mission</h2>
          <p>Our mission is to raise happy, healthy Bernedoodles in a loving home
          environment. We focus on health testing, temperament, and genetic diversity
          to produce the best possible puppies.</p>
        </section>
      </div>
    </div>
  );
};

export default About; 