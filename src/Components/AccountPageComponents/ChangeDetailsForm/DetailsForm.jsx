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
  const [profilePicture, setProfilePicture] = useState(() => {
    const savedImage = localStorage.getItem("profilePicture");
    return savedImage ? savedImage : null;
  });
  const [uploadedImage, setUploadedImage] = useState(null);

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

  useEffect(() => {
    localStorage.setItem("accountFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (profilePicture) {
      localStorage.setItem("profilePicture", profilePicture);
    }
  }, [profilePicture]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6} className="text-center">
                  <Card.Title className="hiGreeting">
                    {formData.displayName
                      ? `Hi ${formData.displayName}`
                      : "Hi there"}
                  </Card.Title>
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
                      onClick={() =>
                        document.getElementById("profilePictureInput").click()
                      }
                    />
                  ) : (
                    <div
                      className="rounded-circle bg-secondary mb-3"
                      style={{
                        width: "150px",
                        height: "150px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        document.getElementById("profilePictureInput").click()
                      }
                    ></div>
                  )}
                  <Form.Group id="profilePicture" className="d-none">
                    <Form.Control
                      type="file"
                      onChange={handlePictureChange}
                      id="profilePictureInput"
                    />
                  </Form.Group>
                  <ul>
                    <li className="mb-2">
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
                    <li className="mb-2">
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
                      <Form.Group id="displayName">
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

                      <Form.Group id="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
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
