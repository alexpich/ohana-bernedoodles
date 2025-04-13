import React from 'react';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
      </div>
      
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact; 