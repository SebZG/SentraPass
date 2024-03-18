import React, { useState, useEffect } from "react";
import "./TypewriterHeader.css";

const TypewriterEffect = () => {
  const [text, setText] = useState("");
  const phrases = ["Sentra Pass Creators", "EdX Bootcamp"];
  const typingSpeed = 100;
  const phraseChangeDelay = 1500;

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let typingTimeout;

    const typeText = () => {
      setText((prevText) =>
        phrases[currentPhraseIndex].slice(0, currentCharIndex + 1)
      );

      if (currentCharIndex < phrases[currentPhraseIndex].length - 1) {
        currentCharIndex++;
        typingTimeout = setTimeout(typeText, typingSpeed);
      } else {
        typingTimeout = setTimeout(changePhrase, phraseChangeDelay);
      }
    };

    const changePhrase = () => {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      currentCharIndex = 0;
      typingTimeout = setTimeout(typeText, typingSpeed);
    };

    typingTimeout = setTimeout(typeText, typingSpeed);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <>
      <div className="typewriter">
        <h1 className="creators">{text}</h1>
        <h1 className="flashing-text">_</h1>
      </div>
    </>
  );
};

export default TypewriterEffect;
