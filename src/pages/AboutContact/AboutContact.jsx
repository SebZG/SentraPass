import { useState } from "react";

import Header from "../../Components/GeneralComponents/Header";
import Footer from "../../Components/GeneralComponents/Footer";

import ContactUsForm from "../../Components/AboutContactPageComponents/ContactUsForm";
import "./AboutContact.css";
import ContactCardFlipper from "../../Components/AboutContactPageComponents/ContactCardFlipper/ContactCardFlipper";

const AboutContact = () => {
  const [showCreatorCard, setShowCreatorCard] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleCreatorCard = () => {
    setShowCreatorCard(true);
    setShowContactForm(false);
  };

  const toggleContactForm = () => {
    setShowContactForm(true);
    setShowCreatorCard(false);
  };

  return (
    <div id="about-contact">
      <Header />
      <div className="row">
        <div className="button-container">
          <button onClick={toggleCreatorCard}>Meet The Creators</button>
          <button onClick={toggleContactForm}>Get In Contact</button>
        </div>
        <div className="col d-flex justify-content-center">
          {showCreatorCard && <ContactCardFlipper />}
          {showContactForm && <ContactUsForm />}
        </div>
      </div>
      <div className="row mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default AboutContact;
