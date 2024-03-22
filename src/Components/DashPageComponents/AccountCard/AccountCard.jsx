import "./AccountCard.css";

function AccountCard(props) {
	return (
		<>
			<div className="card">
				<ul className="list-group list-group-flush">
					<li className="list-group-item acc-account">{props.Account}</li>
					<li className="list-group-item acc-username">{props.UserName}</li>
					<li className="list-group-item acc-email">{props.Email}</li>
					<li className="list-group-item acc-password">{props.Password}</li>
					<li className="list-group-item">
						<a href={props.Link} className="link" target="_blank">
							Link
						</a>
					</li>
					<li className="list-group-item d-flex justify-content-evenly">
						<i onClick={() => props.handleShowUpdate(props.Id)} className="fa-solid fa-pen-nib me-2"></i>
						<i onClick={() => props.deleteAccount(props.Id)} className="fa-regular fa-trash-can"></i>
					</li>
				</ul>
			</div>
		</>
	);
}

export default AccountCard;
