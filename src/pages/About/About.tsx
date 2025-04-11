import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Ohana Bernedoodles</h1>
      <section className="about-content">
        <h2>Our Story</h2>
        <p>
          Welcome to Ohana Bernedoodles! We are passionate about breeding healthy,
          well-tempered Bernedoodles that bring joy to families.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to raise happy, healthy Bernedoodles in a loving home
          environment. We focus on health testing, temperament, and genetic diversity
          to produce the best possible puppies.
        </p>

        <h2>Why Choose Us</h2>
        <ul>
          <li>Health-tested parent dogs</li>
          <li>Puppies raised in our home</li>
          <li>Early socialization and training</li>
          <li>Lifetime support for our puppy families</li>
        </ul>
      </section>
    </div>
  );
};

export default About; 