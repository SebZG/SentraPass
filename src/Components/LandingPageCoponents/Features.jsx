import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section background-image-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="feature-item">
              <h3>Secure storage for all your password needs.</h3>
              <p>Browse the web with peace of mind knowing that all your passwords are securely stored in SentraPass. 
               With the click of a button you can reveal all your passwords and then quickly hide them from prying eyes.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-item">
              <h3>Secure password generation</h3>
              <p>Autogenerate secure passwords with our password generator. No need to note down your passwords on your phone or computer to keep them safe. SentraPass will generate a secure password for you and keep it safe from opportunists and hackers.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-item">
              <h3>Passwords for all your accounts</h3>
              <p>Between online shopping, entertainment and work we have passwords for all kinds of things in life 
               and it can get difficult to remember all of them. No longer. With SentraPass you can store your passwords 
               and set categories for all your accounts avoiding confusion and hassle of remembering them all. </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-item">
              <h3>Security insights</h3>
              <p>SentraPass also provides an easy-to-use dashboard to keep track of your security and compare the security of your passwords with the top most common
               utilized passwords. Get access to security insights 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;