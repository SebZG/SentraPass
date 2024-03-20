import "./PassGen.css";
import React, { useState } from "react";
import { writePassword, copyToClipboard } from "./script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const PassGen = () => {
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    const generatedPassword = writePassword();
    setPassword(generatedPassword);
  };

  return (

    <div className="col-lg-6 px-5 py-5">
      <div className="card" id="passGenBody">
        <div className="card-body">
          <h1 className="card-title" id="passwordTitle">
            Password Generation
          </h1>
          <div className="row px-5">
            <div className="col-md-8 mb-3 d-flex align-items-center">
              <label
                htmlFor="passwordLength"
                className="form-label"
                id="passLength"
              >
                Password Length (8-128 characters):
              </label>
            </div>
            <div className="col-md-4 mb-3 justify-content-center d-flex align-items-center">
              <input
                type="number"
                id="passwordLength"
                min="8"
                max="128"
                className="form-control mb-3"
              />
            </div>
          </div>

        </div>
        <div className="row px-5">
          <div className="form-check mb-3 ">
            <input
              type="checkbox"
              className="form-check-input"
              id="upperCase"
            />
            <label className="form-check-label" htmlFor="upperCase">
              Include Uppercase Characters
            </label>
          </div>
        </div>
        <div className="row px-5">
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
        </div>
        <div className="row px-5">
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="numbers" />
            <label className="form-check-label" htmlFor="numbers">
              Include Numbers
            </label>
          </div>
        </div>
        <div className="row px-5">
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
        </div>
        <button
          onClick={handleGeneratePassword}
          className="btn btn-primary d-block mx-auto mb-3 px-5 py-3"
        >
          Generate Password
        </button>
        <div className="row px-5 py-3">
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


