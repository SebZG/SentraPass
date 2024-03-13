import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/finalLogo.jpg";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <Container
      id="main-container"
      className="d-flex align-items-center justify-content-center h-100"
    >
      <Form id="sign-in-form" className="text-center p-3">
        <img className="mb-4 sentra-logo" src={Logo} alt="Own logo" />
        <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control
            type="email"
            size="lg"
            placeholder="Email address"
            autoComplete="username"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Password"
            autoComplete="current-password"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-center mb-4"
          controlId="remember-me"
        >
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <Button id="sign-in-button" size="lg">
            Sign in
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
