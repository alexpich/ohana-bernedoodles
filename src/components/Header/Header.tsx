import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Ohana Bernedoodles</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/available-puppies">Available Puppies</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/parent-dogs">Parent Dogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 