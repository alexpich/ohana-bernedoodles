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
          <p>Email: ohanabernedoodles@gmail.com</p>
          <p>Phone: (424) 999-5366</p>
          <p>Location: San Diego, CA</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com/ohanabernedoodles" target="_blank" rel="noopener noreferrer">Instagram</a>
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