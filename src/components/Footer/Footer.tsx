import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Ohana Bernedoodles</h4>
          <p>Breeding healthy, happy Bernedoodles with love</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: your@email.com</p>
          <p>Phone: (555) 555-5555</p>
          <p>Location: Your City, State</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ohana Bernedoodles. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 