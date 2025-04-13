import React from 'react';
import './ContactInfo.css';

interface ContactDetail {
  icon: string;
  text: string;
  href?: string;
}

const ContactInfo: React.FC = () => {
  const contactDetails: ContactDetail[] = [
    { icon: '📞', text: '(424) 999-5366', href: 'tel:4249995366' },
    { icon: '✉️', text: 'info@ohanabernedoodles.com', href: 'mailto:info@ohanabernedoodles.com' },
    { icon: '📍', text: 'San Diego, CA' }
  ];

  return (
    <div className="contact-info-card">
      <h2>Get in Touch</h2>
      <div className="contact-details">
        {contactDetails.map((detail, index) => (
          <div key={index} className="contact-detail">
            <span className="contact-icon">{detail.icon}</span>
            {detail.href ? (
              <a href={detail.href} className="contact-link">
                {detail.text}
              </a>
            ) : (
              <span>{detail.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo; 