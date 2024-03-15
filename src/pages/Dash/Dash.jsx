import "./Dash.css";

//global components//
import Header from "../../Components/GeneralComponents/Header";
import Footer from "../../Components/GeneralComponents/Footer";

const Dash = () => {
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
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Generated Password"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Copy button
              </button>
            </div>
          </div>

          <div className="col-6">
            <div className="row">
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
                        <button
                          className="btn btn-outline-success"
                          type="submit"
                        >
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

      <Footer />
    </div>
  );
};
export default Dash;
