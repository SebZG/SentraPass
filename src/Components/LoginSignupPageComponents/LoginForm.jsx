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
        <h1 id="title" className="mb-3 fs-3 fw-normal">
          Create an account
        </h1>
        <Form.Group className="mb-3" controlId="sign-in-email-address">
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
        <Form.Group className="mb-3" controlId="confirm-password">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Confirm Password"
            autoComplete="confirm-password"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-center mb-4"
          controlId="remember-me"
        >
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid mb-3">
          <Button id="sign-in-button" size="lg">
            Sign up
          </Button>
        </div>
        <p>Already registered?</p>
        <span className="line">
          {/* {} */}
          <a href="#">Login</a>
        </span>
      </Form>
    </Container>
  );
};

export default LoginForm;
