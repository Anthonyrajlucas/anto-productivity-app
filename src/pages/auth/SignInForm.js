import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/CredentialsForm.module.css";
import appStyles from "../../App.module.css";

const SignInForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="col-sm-6 mx-auto" md={6}>
        <Container className={`${styles.Form} p-4 `}>
          <h1 className={styles.Header}>Sign In!</h1>
          <p>Please enter your credentials below.</p>
          
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                className={styles.Input}
        
              />
            </Form.Group>
            

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                className={styles.Input}
                
              />
            </Form.Group>
            
            <Button className={appStyles.Button} type="submit">
              Log in
            </Button>
            
          <p className={`${appStyles.DarkText} ${styles.TopMargin}`}>Dont have an account?</p>
          <Link to="/signup">
          <p className={`${appStyles.DarkText}`}>Click <span className={appStyles.DarkText}>here </span>to Sign up!</p>
          </Link>
        </Container>
      </Col>
    </Row>
  );
}

export default SignInForm;

