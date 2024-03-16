import React, { useState, useEffect } from "react";
import "./CreatorCard.css";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import RotatingSphere from "../RotatingSphere";

import "./CreatorCard.css";

function CreatorCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!props.disableViewSkills) {
      setIsFlipped(true);
    }
  };

  useEffect(() => {
    if (isFlipped && !props.disableViewSkills) {
      const timer = setTimeout(() => {
        props.setShowSkills(props.id);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [isFlipped, props]);

  useEffect(() => {
    if (!props.showSkills) setIsFlipped(false);
  }, [props.showSkills]);

  if (props.showSkills) {
    return (
      <RotatingSphere
        id={props.id}
        setDisplayedCreatorId={props.setDisplayedCreatorId}
        skills={props.skills}
      />
    );
  }

  return (
    <div id="creator-card">
      <div
        className={`card-flipper-container ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="card-flipper">
          <div className="card" id="card">
            <div className="img-container">
              <img src={props.img} alt="" />
            </div>
            <h3 className="props.name">{props.name}</h3>
            <p>{props.desc}</p>
            <p onClick={!props.diableViewSkills ? handleClick : null}>
              VIEW SKILLS
            </p>
            <div className="icons">
              <a href={props.github} target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  color="var(--Color-Secondary)"
                  className="anchor-icon"
                />
              </a>
              <a href={props.linkedin} target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="var(--Color-Secondary)"
                  className="anchor-icon"
                />
              </a>
              <a href={props.email} target="_blank">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="var(--Color-Secondary)"
                  className="anchor-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorCard;
