import "./PassGen.css";
import React, { useState } from "react";
import { writePassword, copyToClipboard } from "./script"; // Import copyToClipboard function
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const PassGen = () => {
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    const generatedPassword = writePassword();
    setPassword(generatedPassword);
  };

  return (
    <div className="col-md-6">
      <div className="card" id="passGenBody">
        <div className="card-body">
          <h1 className="card-title" id="passwordTitle">
            Password Generation
          </h1>
          <label
            htmlFor="passwordLength"
            className="form-label"
            id="passLength"
          >
            Password Length (8-128 characters):
          </label>
          <input
            type="number"
            id="passwordLength"
            min="8"
            max="128"
            className="form-control mb-3"
          />
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="upperCase"
            />
            <label className="form-check-label" htmlFor="upperCase">
              Include Uppercase Characters
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="lowerCase"
            />
            <label className="form-check-label" htmlFor="lowerCase">
              Include Lowercase Characters
            </label>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="numbers" />
            <label className="form-check-label" htmlFor="numbers">
              Include Numbers
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="specialChars"
            />
            <label className="form-check-label" htmlFor="specialChars">
              Include Special Characters
            </label>
          </div>
          <button
            onClick={handleGeneratePassword}
            className="btn btn-primary mb-3"
          >
            Generate Password
          </button>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Generated Password"
              aria-label="Generated Password"
              value={password}
              readOnly
            />
            <button
              onClick={() => copyToClipboard(password)}
              className="btn btn-outline-secondary"
              id="generatedPassword"
              type="button"
            >
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassGen;
