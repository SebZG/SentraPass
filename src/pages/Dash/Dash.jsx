import "./Dash.css";
import React, { useState } from "react";
import { writePassword } from "./script";

import Header from "../../Components/GeneralComponents/Header";
import Accounts from "../../Components/DashPageComponents/Accounts/Accounts";

const Dash = () => {
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    const generatedPassword = writePassword();
    setPassword(generatedPassword);
  };

  return (
    <div id="dash">
      <Header />
      <div className="container-fluid text-center">
        <div className="row justify-content-between col-12">
          <div className="col-6">
            <div id="leftSide" className="row py-3">
              <div className="col">
                <button
                  id="createPassword"
                  className="btn btn-primary w-100"
                  type="submit"
                >
                  Create new password
                </button>
              </div>
              <div className="col">
                <button
                  id="addPassword"
                  className="btn btn-primary w-100"
                  type="submit"
                >
                  Add new password
                </button>
              </div>
            </div>
            <div className="card-body py-3">
              <label htmlFor="passwordLength">
                Password Length (8-128 characters):
              </label>
              <input type="number" id="passwordLength" min="8" max="128" />
              <br />
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="upperCase"
                />
                <label className="form-check-label" htmlFor="upperCase">
                  Include Uppercase Characters
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="lowerCase"
                />
                <label className="form-check-label" htmlFor="lowerCase">
                  Include Lowercase Characters
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="numbers"
                />
                <label className="form-check-label" htmlFor="numbers">
                  Include Numbers
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="specialChars"
                />
                <label className="form-check-label" htmlFor="specialChars">
                  Include Special Characters
                </label>
              </div>
              <br />
              <button onClick={handleGeneratePassword} className="btn">
                Generate Password
              </button>
              <br />
              <br />
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Generated Password"
                  aria-label="Generated Password"
                  value={password}
                  readOnly
                />
                <button className="btn" type="button" id="button-addon2">
                  Copy button
                </button>
              </div>
            </div>
          </div>

          <div className="col-6">
            <Accounts />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dash;
