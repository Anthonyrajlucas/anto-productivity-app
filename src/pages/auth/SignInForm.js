import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import appStyles from "../../App.module.css";




const SignInForm = () => {
  return (
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <p>Dont have an account?</p>
<Link to="/signup">
  <p>Click <span className={appStyles.DarkText}>here </span>to Sign up!</p>
</Link>
</Form>
  )
}

export default SignInForm