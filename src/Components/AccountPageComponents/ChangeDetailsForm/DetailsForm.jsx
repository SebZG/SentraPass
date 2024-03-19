import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";

const AccountCard = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <ul>
                    <li>
                      <Button variant="link">Personal Details</Button>
                    </li>
                    <li>
                      <Button variant="link">Change Password</Button>
                    </li>
                  </ul>
                  <Button variant="danger">Logout</Button>
                </Col>

                <Col md={6}>
                  {
                    <Form>
                      <Form.Group>
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your full name"
                          name="displayName"
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
                  }
                  {
                    <Form>
                      <Form.Group controlId="oldPassword">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter old password"
                          name="oldPassword"
                        />
                      </Form.Group>

                      <Form.Group controlId="newPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter new password"
                          name="newPassword"
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </Form>
                  }
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
