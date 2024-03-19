import "./Dash.css";
import React, { useState } from "react";
import { writePassword } from "./script";

import Header from "../../Components/GeneralComponents/Header";

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
            <div className="row">
              <div className="col-sm-12 mb-3 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search Account Bar"
                        aria-label="Search"
                      />
                      <button className="btn" type="submit">
                        Search
                      </button>
                    </form>
                    <button
                      id="hidePassword"
                      className="btn btn-primary"
                      type="submit"
                    >
                      Hide all passwords...
                    </button>

                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>

                    <div className="row">
                      <div className="card col-4">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Account</li>
                          <li className="list-group-item">Username</li>
                          <li className="list-group-item">Password</li>
                          <li className="list-group-item">Link</li>
                        </ul>
                      </div>
                      <div className="card col-4">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Account</li>
                          <li className="list-group-item">Username</li>
                          <li className="list-group-item">Password</li>
                          <li className="list-group-item">Link</li>
                        </ul>
                      </div>
                      <div className="card col-4">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Account</li>
                          <li className="list-group-item">Username</li>
                          <li className="list-group-item">Password</li>
                          <li className="list-group-item">Link</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dash;
