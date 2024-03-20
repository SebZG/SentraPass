import React, { useState } from "react";
import AccountCard from "../AccountCard/AccountCard";
import "./Accounts.css";

function Accounts() {
  const [passwords, setPasswords] = useState([
    {
      id: 1,
      Account: "Amazon",
      UserName: "email@gmail.com",
      Password: "123456",
      Link: "https://www.amazon.com",
      showPassword: false,
    },
    {
      id: 2,
      Account: "Ebay",
      UserName: "email@gmail.com",
      Password: "123456",
      Link: "https://www.ebay.com",
      showPassword: false,
    },
    {
      id: 3,
      Account: "Pornhub",
      UserName: "email@gmail.com",
      Password: "123456",
      Link: "https://www.pornhub.com",
      showPassword: false,
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newAccount, setNewAccount] = useState({
    Account: "",
    UserName: "",
    Password: "",
    Link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAccount({ ...newAccount, [name]: value });
  };

  const handleAddPassword = () => {
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = passwords.length + 1;
    const accountToAdd = {
      id: newId,
      ...newAccount,
    };
    setPasswords([...passwords, accountToAdd]);
    setModalOpen(false); // Close the modal
    setNewAccount({
      Account: "",
      UserName: "",
      Password: "",
      Link: "",
    });
  };

  const togglePasswordVisibility = (id) => {
    setPasswords(
      passwords.map((password) =>
        password.id === id
          ? { ...password, showPassword: !password.showPassword }
          : password
      )
    );
  };

  return (
    <>
      <div className="col-md-6 px-5 py-5">
        <div className="card" id="passGenBody">
          <div className="card-body" id="card">
            <h1 className="card-title">Your Accounts</h1>
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
              id="addPassword"
              className="btn btn-primary mx-1"
              onClick={handleAddPassword}
              type="button"
            >
              Add new password
            </button>
            <button
              id="showPassword"
              className="btn btn-primary"
              onClick={() =>
                setPasswords(
                  passwords.map((password) => ({
                    ...password,
                    showPassword: !password.showPassword,
                  }))
                )
              }
              type="button"
            >
              {passwords.every((password) => password.showPassword)
                ? "Hide all passwords"
                : "Show all passwords"}
            </button>

            <p className="card-text mt-3">
              Manage your accounts here, add new ones or remove them.
              <br />
            </p>

            <div className="row">
              {passwords.map((account) => (
                <div className="col-md-4 mt-3">
                  <AccountCard
                    key={account.id}
                    Account={account.Account}
                    UserName={account.UserName}
                    Password={
                      account.showPassword ? account.Password : "********"
                    }
                    Link={account.Link}
                    togglePasswordVisibility={() =>
                      togglePasswordVisibility(account.id)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Account</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="account" className="form-label">
                      Account
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="account"
                      name="Account"
                      value={newAccount.Account}
                      onChange={handleInputChange}
                      placeholder="Account"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="UserName"
                      value={newAccount.UserName}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="Password"
                      value={newAccount.Password}
                      onChange={handleInputChange}
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="link" className="form-label">
                      Link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="link"
                      name="Link"
                      value={newAccount.Link}
                      onChange={handleInputChange}
                      placeholder="Website/app link"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Accounts;
