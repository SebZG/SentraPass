import React from "react";
import AccountCard from "../AccountCard/AccountCard";
import "./Accounts.css";
const creatorsdata = [
  {
    id: 1,
    Account: "Amazon",
    UserName: "email@gmail.com",
    Password: "123456",
    Link: "https://www.amazon.com",
  },
  {
    id: 2,
    Account: "Ebay",
    UserName: "email@gmail.com",
    Password: "123456",
    Link: "https://www.ebay.com",
  },
  {
    id: 3,
    Account: "Pornhub",
    UserName: "email@gmail.com",
    Password: "123456",
    Link: "https://www.pornhub.com",
  },
];
function Accounts() {
  return (
    <>
      <div className="col-md-6 px-5 py-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Your Accounts</h5>
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
            <button id="addPassword" className="btn btn-primary" type="submit">
              Add new password
            </button>
            <button id="showPassword" className="btn btn-primary" type="submit">
              Show all passwords...
            </button>

            <p className="card-text">
              Manage your accounts here, add new ones or remove them.
              <br />
            </p>

            <div className="row">
              {creatorsdata.map((account) => (
                <AccountCard
                  key={account.id}
                  Account={account.Account}
                  UserName={account.UserName}
                  Password={account.Password}
                  Link={account.Link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accounts;
