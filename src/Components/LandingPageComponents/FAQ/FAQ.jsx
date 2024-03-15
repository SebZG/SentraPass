import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  // State to track the expanded state of each accordion item
  const [expanded, setExpanded] = useState(null);

  // Function to handle accordion item click
  const handleAccordionClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id='FAQ'>
      <div id="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${expanded === 1 ? 'expanded' : ''}`}
                type="button"
                onClick={() => handleAccordionClick(1)}
              >
                What happens if I forget my master password?
              </button>
            </h2>
            <div
              id="collapseOne"
              className={`accordion-collapse collapse ${expanded === 1 ? 'show' : ''}`}
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We offer a secure password recovery process which will allow you to regain access to your account through the email address associated with your account.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${expanded === 2 ? 'expanded' : ''}`}
                type="button"
                onClick={() => handleAccordionClick(2)}
              >
                Does SentraPass work on mobile devices and tablets?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className={`accordion-collapse collapse ${expanded === 2 ? 'show' : ''}`}
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, SentraPass has been designed to accommodate a wide range of different devices including mobile, tablet, and PC.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${expanded === 3 ? 'expanded' : ''}`}
                type="button"
                onClick={() => handleAccordionClick(3)}
              >
                Can I trust SentraPass with my personal information?
              </button>
            </h2>
            <div
              id="collapseThree"
              className={`accordion-collapse collapse ${expanded === 3 ? 'show' : ''}`}
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, privacy is our top priority, and we do not have access to any of your passwords. Your information is encrypted and will always remain confidential.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${expanded === 4 ? 'expanded' : ''}`}
                type="button"
                onClick={() => handleAccordionClick(4)}
              >
                What is the maximum number of passwords I can store in SentraPass?
              </button>
            </h2>
            <div
              id="collapseFour"
              className={`accordion-collapse collapse ${expanded === 4 ? 'show' : ''}`}
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                N/A
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${expanded === 5 ? 'expanded' : ''}`}
                type="button"
                onClick={() => handleAccordionClick(5)}
              >
                Do I need to pay for SentraPass?
              </button>
            </h2>
            <div
              id="collapseFive"
              className={`accordion-collapse collapse ${expanded === 5 ? 'show' : ''}`}
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                No, SentraPass is completely free to use currently.
              </div>
            </div>
          </div>
        </div>
      <br></br>
      </div>
    </section>
  );
};

export default FAQ;