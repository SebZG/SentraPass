import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../../../firebase/init";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PlaceholderAvatar from "../../../assets/images/avatar-placeholder.png";

import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";

import "./DetailsForm.css";

const AccountCard = () => {
	const [userProfile, setUserProfile] = useState({});
	const [formData, setFormData] = useState({
		displayName: "",
		email: "",
		oldPassword: "",
		newPassword: "",
	});

	const [showPersonalDetails, setShowPersonalDetails] = useState(false);
	const [showChangePassword, setShowChangePassword] = useState(false);
	const [changesSaved, setChangesSaved] = useState(false);
	const [profilePicture, setProfilePicture] = useState(userProfile?.photoURL || PlaceholderAvatar);
	const [uploadedImage, setUploadedImage] = useState(null);

	// Other hooks
	const navigate = useNavigate();

	// Event handlers
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handlePictureChange = (e) => {
		const file = e.target.files[0];
		setProfilePicture(URL.createObjectURL(file));
		setUploadedImage(URL.createObjectURL(file));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		localStorage.setItem("accountFormData", JSON.stringify(formData));
		setChangesSaved(true);
	};

	// Effects
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user && !user.emailVerified) {
				navigate("/login");
			} else if (user && user.emailVerified) {
				navigate("/account");
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

			setInterval(() => {
				// setIsLoading(false);
			}, 500);
		});
	}, []);

	return (
		<Container>
			<Row className="justify-content-center">
				<Col md={8} className="text-center">
					<Card id="accountForm" className="mb-4">
						<Card.Body>
							<Card.Title className="hiGreeting">
								{formData.displayName
									? `Hi ${formData.displayName}!`
									: "Hi there!"}
							</Card.Title>
							<label htmlFor="profilePictureInput">
								{profilePicture ? (
									<img
										src={profilePicture}
										alt="Profile"
										className="rounded-circle mb-3"
										style={{
											width: "150px",
											height: "150px",
											cursor: "pointer",
										}}
									/>
								) : (
									<div
										className="profilePic mb-3"
										style={{
											width: "150px",
											height: "150px",
											cursor: "pointer",
										}}
									>
										<img
											src={PlaceholderAvatar}
											alt="Placeholder"
											style={{
												width: "100%",
												height: "100%",
											}}
										/>
									</div>
								)}
							</label>
							<Form.Group className="d-none">
								<Form.Control
									type="file"
									onChange={handlePictureChange}
									id="profilePictureInput"
									className="custom-input"
								/>
							</Form.Group>
							<ul className="button-container">
								<li className="mb-2">
									<Button
										className="btn"
										variant="link"
										onClick={() => {
											setShowPersonalDetails(true);
											setShowChangePassword(false);
											setChangesSaved(false);
										}}
									>
										Personal Details
									</Button>
								</li>
								<li className="mb-2">
									<Button
										className="btn"
										variant="link"
										onClick={() => {
											setShowChangePassword(true);
											setShowPersonalDetails(false);
											setChangesSaved(false);
										}}
									>
										Change Password
									</Button>
								</li>
							</ul>
							{showPersonalDetails && (
								<Form onSubmit={handleSubmit}>
									<Form.Group id="displayName">
										<Form.Label>Display Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter your display name"
											name="displayName"
											value={formData.displayName}
											onChange={handleChange}
											className="custom-input"
											required
										/>
									</Form.Group>

									<Form.Group id="email">
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className="custom-input"
											required
										/>
									</Form.Group>
									<Button variant="primary" type="submit">
										Save Changes
									</Button>
								</Form>
							)}
							{showChangePassword && (
								<Form onSubmit={handleSubmit}>
									<Form.Group id="oldPassword">
										<Form.Label>Old Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Enter old password"
											name="oldPassword"
											value={formData.oldPassword}
											className="custom-input"
											onChange={handleChange}
										/>
									</Form.Group>

									<Form.Group id="newPassword">
										<Form.Label>New Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Enter new password"
											name="newPassword"
											value={formData.newPassword}
											className="custom-input with-icon"
											onChange={handleChange}
										/>
									</Form.Group>
									<Button className="btn" variant="primary" type="submit">
										Save Changes
									</Button>
								</Form>
							)}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default AccountCard;
