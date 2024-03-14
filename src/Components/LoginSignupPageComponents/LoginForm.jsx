import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/finalLogo.jpg";
import "./LoginForm.css";
import React, { useState, useEffect } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    // Set the component's initial state
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginMode, setLoginMode] = useState(false);

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

  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberedEmail && rememberedPassword && rememberMe) {
      setFormData({
        ...formData,
        email: rememberedEmail,
        password: rememberedPassword,
      });
    }
  }, [rememberMe]);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(`email is ${formData.email}`);
    console.log(`password is ${formData.password}`);
    console.log(`confirmed password is ${formData.confirmPassword}`);

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", formData.email);
      localStorage.setItem("rememberedPassword", formData.password);
    }

    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Container
      id="main-container"
      className="d-flex align-items-center justify-content-center h-100"
    >
      <Form id="sign-in-form" className="text-center p-3">
        <img className="mb-4 sentra-logo" src={Logo} alt="Own logo" />
        <h1 id="title" className="mb-3 fs-3 fw-normal">
          {loginMode ? "Login" : "Create an Account"}
        </h1>
        <Form.Group className="mb-3" controlId="sign-in-email-address">
          <Form.Control
            type="email"
            size="lg"
            placeholder="Email address"
            autoComplete="username"
            className="position-relative"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Password"
            autoComplete="current-password"
            className="position-relative"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group
          className={`mb-3 ${loginMode ? "d-none" : ""}`}
          controlId="confirm-password"
        >
          <Form.Control
            type="password"
            size="lg"
            placeholder="Confirm Password"
            autoComplete="confirm-password"
            className="position-relative"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-center mb-4"
          controlId="remember-me"
        >
          <Form.Check
            label="Remember me"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
        </Form.Group>
        <div className="d-grid mb-3">
          <Button id="sign-in-button" size="lg" onClick={handleFormSubmit}>
            {loginMode ? "Login" : "Sign up"}
          </Button>
        </div>
        <p> {loginMode ? "Don't have an account?" : "Already registered?"}</p>
        <span className="line">
          {/* {} */}
          <a href="#" onClick={handleModeChange}>
            {loginMode ? "Create an account" : "Login"}
          </a>
        </span>
      </Form>
    </Container>
  );
};

export default LoginForm;
