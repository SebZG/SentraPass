import React from "react";

function AccountCard(props) {
  return (
    <>
      <div className="card col-4">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.Account}</li>
          <li className="list-group-item">{props.UserName}</li>
          <li className="list-group-item">{props.Password}</li>
          <li className="list-group-item">
            <a href={props.Link} target="_blank">
              {props.Link}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AccountCard;
