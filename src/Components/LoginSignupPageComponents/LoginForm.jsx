import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../firebase/init";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import Logo from "../../assets/images/finalLogo.jpg";

import "./LoginForm.css";

const LoginForm = () => {
  // User Object
  const auth = getAuth();
  const user = auth.currentUser;

  const [formData, setFormData] = useState({
    // Set the component's initial state
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginMode, setLoginMode] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModeChange = () => {
    setLoginMode(!loginMode);
    // Clear the confirm password field when switching modes
    if (loginMode) {
      setFormData({
        ...formData,
        confirmPassword: "",
      });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    // const rememberedEmail = localStorage.getItem("rememberedEmail");
    // const rememberedPassword = localStorage.getItem("rememberedPassword");

    // if (rememberedEmail && rememberedPassword && rememberMe) {
    // 	setFormData({
    // 		...formData,
    // 		email: rememberedEmail,
    // 		password: rememberedPassword,
    // 	});
    // }

    onAuthStateChanged(auth, (user) => {
      if (user && !user.emailVerified) {
        // navigate("/");
        // sendEmailVerification(user)
        // .then(() => {
        // setShowEmailVerification(true);
        // signOut(auth);
        // console.log("Email verification sent");
        // });
      } else if (user && user.emailVerified) {
        // navigate("/dash");
      } else {
        // navigate("/");
      }

      // setInterval(() => {
      // 	setIsLoading(false);
      // }, 500);
    });
  }, [rememberMe]);

  // const handleRememberMeChange = () => {
  // 	setRememberMe(!rememberMe);
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // if (rememberMe) {
    // 	localStorage.setItem("rememberedEmail", formData.email);
    // 	localStorage.setItem("rememberedPassword", formData.password);
    // }

    setShowModal(true);

    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });

    if (loginMode) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCred) => {
          // const user = userCred.user;
          // navigate("/dash");
          console.log("Logged in");
        })
        .catch((error) => {
          // setError(error.code);
          console.log(error.code);
        });
    } else if (!loginMode) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCred) => {
          // const user = userCred.user;
          // navigate("/dash");
          // setSelected("Login");
          console.log("Account created");
        })
        .catch((error) => {
          // setError(error.code);
          console.log(error.code);
        });
    }
  };

  const checkPasswordMatch = () => {
    setPasswordsMatch(formData.password === formData.confirmPassword);
  };

  useEffect(() => {
    checkPasswordMatch();
  }, [formData.password, formData.confirmPassword]);

  return (
    <Container id="login-container">
      <Row className="justify-content-center">
        <Form id="sign-in-form" className="text-center p-3">
          <img className="mb-4 sentra-logo" src={Logo} alt="Own logo" />
          <h1 className="mb-4 fs-3 fw-normal">
            {loginMode ? "Login" : "Create an Account"}
          </h1>
          <Form.Group className="mb-4" controlId="sign-in-email-address">
            <Form.Control
              type="email"
              size="lg"
              placeholder="Email address"
              autoComplete="username"
              className="custom-input"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="sign-in-password">
            <Form.Control
              type="password"
              size="lg"
              placeholder="Password"
              autoComplete="current-password"
              className="custom-input"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group
            className={`mb-4 ${loginMode ? "d-none" : ""}`}
            controlId="confirm-password"
          >
            <Form.Control
              type="password"
              size="lg"
              placeholder="Confirm Password"
              autoComplete="confirm-password"
              className="custom-input"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            {!passwordsMatch && (
              <Form.Text className="text-danger">
                Password do not match.
              </Form.Text>
            )}
          </Form.Group>
          {/* <Form.Group
						className="d-flex justify-content-center mb-4"
						controlId="remember-me"
					>
						<Form.Check
							label="Remember me"
							checked={rememberMe}
							onChange={handleRememberMeChange}
						/>
					</Form.Group> */}
          <div className="mb-3">
            <Button id="sign-in-button" size="lg" onClick={handleFormSubmit}>
              {loginMode ? "Login" : "Sign up"}
            </Button>
          </div>
          <p> {loginMode ? "Don't have an account?" : "Already registered?"}</p>
          <span className="line">
            <a href="#" onClick={handleModeChange}>
              {loginMode ? "Create an account" : "Login"}
            </a>
          </span>
        </Form>

        {/* Email Confirmation Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Email Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please check your email inbox and follow the instructions to confirm
            your email address.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default LoginForm;
