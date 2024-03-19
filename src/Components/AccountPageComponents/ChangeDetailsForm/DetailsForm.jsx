import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";

const AccountCard = () => {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("accountFormData");
    return storedData
      ? JSON.parse(storedData)
      : {
          displayName: "",
          email: "",
          oldPassword: "",
          newPassword: "",
        };
  });

  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [changesSaved, setChangesSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("accountFormData", JSON.stringify(formData));
    setChangesSaved(true);
  };

  useEffect(() => {
    localStorage.setItem("accountFormData", JSON.stringify(formData));
  }, [formData]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Card.Title>
                    {formData.displayName
                      ? `Hi, ${formData.displayName}!`
                      : "Hi there"}
                  </Card.Title>
                  <ul>
                    <li>
                      <Button
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
                    <li>
                      <Button
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
                  <Button variant="danger">Logout</Button>
                </Col>

                <Col md={6}>
                  {showPersonalDetails && (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="displayName">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your display name"
                          name="displayName"
                          value={formData.displayName}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
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
                      <Form.Group controlId="oldPassword">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter old password"
                          name="oldPassword"
                          value={formData.oldPassword}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group controlId="newPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter new password"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </Form>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountCard;
