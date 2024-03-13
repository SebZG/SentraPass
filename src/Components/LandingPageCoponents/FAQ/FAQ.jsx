import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Question 1?</h3>
          <p>Answer to Question 1 goes here.</p>
        </div>
        <div className="faq-item">
          <h3>Question 2?</h3>
          <p>Answer to Question 2 goes here.</p>
        </div>
        <div className="faq-item">
          <h3>Question 3?</h3>
          <p>Answer to Question 3 goes here.</p>
        </div>
        {/* Add more FAQ items as needed */}
      </div>
    </section>
  );
};

export default FAQ;