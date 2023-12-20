import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import appStyles from "../../App.module.css";
import styles from "../../styles/HomePage.module.css"

const Homepage = () => {
  return (
    <>
      <Row className={`text-center ${styles.HomepageBackground}`}>
        <Col sm={12}>
          <Container className={styles.HomepageBoxPos}>
            <Card className={styles.HomepageCard}>
              <Card.Body>
                <Card.Title>
                  <h1 className="mb-4">Welcome to Anto-Productivity-App!</h1>
                </Card.Title>
                <Card.Text className="font-weight-bold">
                  Enhance your productivity and manage your tasks efficiently.
                  <br />
                  Ready to take control of your time?
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Link to="/signin">
                  <Button className={`${appStyles.Button} mb-3`}>
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className={`${appStyles.Button} mb-3`}>
                    Sign up
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
      <Container fluid className={styles.Footer}>
        <footer className="d-flex justify-content-between align-items-center py-3">
          <div className={styles.ContactInfo}>
            <p>Contact us: info@antoproductivity.com</p>
          </div>
          <div>
            <a
              href="https://twitter.com/yourprofile"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/yourprofile"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Homepage;
