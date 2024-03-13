import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What happens if I forget my master password?</h3>
          <p>We offer a secure password receovery process which will allow you to regain access to your account through the email address associated with your account</p>
        </div>
        <div className="faq-item">
          <h3>Does SentraPass work on mobile devices and tablets?</h3>
          <p>Yes, SentraPass has been designed to accomodate a wide range of different devices including mobile, tablet and PC.</p>
        </div>
        <div className="faq-item">
          <h3>Can I trust SentraPass with my personal information?</h3>
          <p>Yes, privacy is our top priortiy and we do not have access to any of your passwords. Your information is encrypted and will always remain confidential.</p>
        </div>
        <div className="faq-item">
          <h3>What is the maximum number of passwords I can store in SentraPass?</h3>
          <p>N/A</p>
        </div>
        <div className="faq-item">
          <h3>Do I need to pay for SentraPass</h3>
          <p>No, SentraPass is completely free to use currently.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;