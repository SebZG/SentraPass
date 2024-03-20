import React from "react";
import "./AccountCard.css";
function AccountCard(props) {
  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.Account}</li>
          <li className="list-group-item">{props.UserName}</li>
          <li className="list-group-item">{props.Password}</li>
          <li className="list-group-item">
            <a href={props.Link} className="link" target="_blank">
              Website Link
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AccountCard;
