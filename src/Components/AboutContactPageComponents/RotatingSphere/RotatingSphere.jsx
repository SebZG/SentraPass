import { useState, useEffect } from "react";

import TagCloud from "TagCloud";

import AboutContact from "../../../pages/AboutContact/";

import "./RotatingSphere.css";

const RotatingSphere = (props) => {
  const handleClick = () => {
    props.setDisplayedCreatorId(null);
  };

  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = props.skills;

      const options = {
        radius: 150,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div id="rotating-sphere">
      <h3 className="hide-skills" onClick={handleClick}>
        HIDE SKILLS
      </h3>
      <div className="text-sphere">
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};

export default RotatingSphere;
