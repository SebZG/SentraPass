import React, { useState, useEffect } from "react";
import "./TypewriterHeader.css";
const TypewriterEffect = () => {
  const [text, setText] = useState("");
  const phrases = ["The Creators", "EdX Bootcamp"];

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let typingTimeout;
    let deletingTimeout;

    const typeText = () => {
      setText((prevText) =>
        phrases[currentPhraseIndex].slice(0, currentCharIndex + 1)
      );
      currentCharIndex++;
      if (currentCharIndex < phrases[currentPhraseIndex].length) {
        typingTimeout = setTimeout(typeText, 100);
      } else {
        deletingTimeout = setTimeout(deleteText, 1500);
      }
    };

    const deleteText = () => {
      setText((prevText) => {
        if (prevText.length === 0) {
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          currentCharIndex = 0;
          return "";
        }
        return prevText.slice(0, prevText.length - 1);
      });
      deletingTimeout = setTimeout(deleteText, 50);
    };

    typingTimeout = setTimeout(typeText, 1000);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, []);

  return <h1 className="creators col">{text}</h1>;
};

export default TypewriterEffect;
