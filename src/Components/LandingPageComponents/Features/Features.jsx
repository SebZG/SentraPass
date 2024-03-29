import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h1>Features</h1>
        <div className="row">
          <div className="col-md-4 py-3">
            <div className="feature-item">
              <h3>Secure storage for all your password needs.</h3>
              <p>
                Between online shopping, entertainment and work we have
                passwords for all kinds of things in life and it can get
                difficult to remember all of them. With SentraPass you can store
                your passwords and set categories for all your accounts avoiding
                confusion and hassle of remembering them all.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 py-3">
            <div className="feature-item">
              <h3>Secure password generation</h3>
              <p>
                Autogenerate secure passwords with our password generator. No
                need to note down your passwords on your phone or computer to
                keep them safe. SentraPass will generate a secure password for
                you and keep it safe from opportunists and hackers.
              </p>
            </div>
          </div>
          <div className="col-md-4 py-3">
            <div className="feature-item">
              <h3>Passwords for all your accounts</h3>
              <p>
                Between online shopping, entertainment and work we have
                passwords for all kinds of things in life and it can get
                difficult to remember all of them. With SentraPass you can store
                your passwords and set categories for all your accounts avoiding
                confusion and hassle of remembering them all.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
