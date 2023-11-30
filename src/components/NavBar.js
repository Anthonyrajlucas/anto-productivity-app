import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import logo from "../assets/productivity_logo.jpg"
import styles from "../styles/NavBar.module.css"


const NavBar = () => {
  return ( 
    <Container>
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Navbar.Brand> <img src={logo} alt="logo" height="45" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <Nav.Link href="#home"> <i className='fas fa-home'></i>Home</Nav.Link>
                    <Nav.Link href="#link"> <i className='fas fa-sign-in-alt'></i>Sign in</Nav.Link>
                    <Nav.Link href="#link"> <i className='fas fa-user-plus'></i>Sign up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
  );
};

export default NavBar