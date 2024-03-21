import { useState } from "react";

import Header from "../../Components/GeneralComponents/Header";
import ContactUsForm from "../../Components/AboutContactPageComponents/ContactUsForm";
import ContactCardFlipper from "../../Components/AboutContactPageComponents/ContactCardFlipper/ContactCardFlipper";
import SnakeGame from "../../Components/AboutContactPageComponents/SnakeGame/SnakeGame";

import "./AboutContact.css";

const AboutContact = () => {
  const [showCreatorCard, setShowCreatorCard] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showSnakeGame, setShowSnakeGame] = useState(false);
  const toggleCreatorCard = () => {
    setShowCreatorCard(true);
    setShowContactForm(false);
    setShowSnakeGame(false);
  };

  const toggleContactForm = () => {
    setShowContactForm(true);
    setShowCreatorCard(false);
    setShowSnakeGame(false);
  };

  const toggleSnakeGame = () => {
    setShowSnakeGame(true);
    setShowContactForm(false);
    setShowCreatorCard(false);
  };

  return (
    <div id="about-contact">
      <Header />
      <div className="content-container">
        <div className="row">
          <div className="button-container p-0 mb-5">
            <button className="btn" onClick={toggleCreatorCard}>
              Meet The Creators
            </button>
            <button className="btn" onClick={toggleContactForm}>
              Get In Contact
            </button>
            <button className="btn" id="play-snake" onClick={toggleSnakeGame}>
              Play Snake
            </button>
          </div>
          <div className="col d-flex justify-content-center p-0">
            {showCreatorCard && <ContactCardFlipper />}
            {showContactForm && <ContactUsForm />}
            {showSnakeGame && <SnakeGame />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
