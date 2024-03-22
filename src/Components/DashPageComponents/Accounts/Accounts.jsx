import {
	getAuth,
	onAuthStateChanged
} from 'firebase/auth';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	updateDoc,
	where
} from 'firebase/firestore';
import { auth, db } from "../../../firebase/init";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AccountCard from "../AccountCard/AccountCard";

import "./Accounts.css";

function Accounts() {
	const [userProfile, setUserProfile] = useState({});
	const [searchTerm, setSearchTerm] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [accounts, setAccounts] = useState([]);
	const [newAccount, setNewAccount] = useState({
		Account: "",
		UserName: "",
		Email: "",
		Password: "",
		Link: "",
	});

	const navigate = useNavigate();

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewAccount({ ...newAccount, [name]: value });
	};

	const handleAddPassword = () => {
		setModalOpen(true);
	};

	// Effects
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user && !user.emailVerified) {
				navigate("/login");
			} else if (user && user.emailVerified) {
				navigate("/dash");
				setUserProfile({
					displayName: user.displayName,
					email: user.email,
					photoURL: user.photoURL,
					emailVerified: user.emailVerified,
					uid: user.uid
				});
			} else {
				navigate("/login");
			}

			getAccountsByUid(user.uid);

			setInterval(() => {
				// setIsLoading(false);
			}, 500);
		});
	}, []);

	const getAccountsByUid = async (uid) => {
		const postCollectionUidRef = query(collection(db, "accounts"), where("uid", "==", uid));
		const { docs } = await getDocs(postCollectionUidRef);
		const accounts = docs.map(doc => ({ ...doc.data(), id: doc.id }));
		setAccounts(accounts);
	};

	// Add new account
	const handleSubmit = (e) => {
		e.preventDefault();

		const accountToAdd = {
			...newAccount,
			uid: auth.currentUser.uid
		};

		addDoc(collection(db, "accounts"), accountToAdd)
			.then(() => getAccountsByUid(auth.currentUser.uid));

		setNewAccount({
			Account: "",
			UserName: "",
			Email: "",
			Password: "",
			Link: "",
		});
		setModalOpen(false); // Close the modal
	};

	const deleteAccount = async (id) => {
		const docRef = doc(db, "accounts", id);
		await deleteDoc(docRef);
		const newAccounts = accounts.filter(account => account.id !== id);
		setAccounts(newAccounts);
	};

	const togglePasswordVisibility = (id) => {
		setAccounts(
			accounts.map((password) =>
				password.id === id
					? { ...password, showPassword: !password.showPassword }
					: password
			)
		);
	};

	const filteredAccounts = accounts.filter((account) =>
		account.Account.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<div className="col-lg-6 px-5 py-5">
				<div className="card" id="passGenBody">
					<div className="card-body" id="card">
						<h1 className="card-title">Your Accounts</h1>
						<form className="d-flex" role="search">
							<input
								className="form-control me-2 mb-2"
								id="search-bar"
								type="search"
								placeholder="Search Account Bar"
								aria-label="Search"
								value={searchTerm}
								onChange={handleSearchChange}
							/>
						</form>
						<button
							id="addPassword"
							className="btn btn-primary mx-1 mt-1"
							onClick={handleAddPassword}
							type="button"
						>
							Add new password
						</button>
						<button
							id="showPassword"
							className="btn btn-primary mt-1"
							onClick={() =>
								setAccounts(
									accounts.map((password) => ({
										...password,
										showPassword: !password.showPassword,
									}))
								)
							}
							type="button"
						>
							{accounts.every((password) => password.showPassword)
								? "Hide all accounts"
								: "Show all accounts"}
						</button>

						<p className="card-text my-5">
							Manage your accounts here, add new ones or remove them.
							<br />
						</p>

						<div className="row">
							{filteredAccounts.map((account) => (
								<div
									className="col-md-4 mt-3"
									key={account.id}
								>
									<AccountCard
										Account={account.Account}
										UserName={account.UserName}
										Email={account.Email}
										Password={
											account.showPassword ? account.Password : "********"
										}
										Link={account.Link}
										togglePasswordVisibility={() =>
											togglePasswordVisibility(account.id)
										}
										Id={account.id}
										deleteAccount={deleteAccount}
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
											placeholder="Username"
										/>
									</div>
									<div className="mb-3">
										<label htmlFor="email" className="form-label">
											Email
										</label>
										<input
											type="email"
											className="form-control"
											id="email"
											name="Email"
											value={newAccount.Email}
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
