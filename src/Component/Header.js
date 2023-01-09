import React from "react";
import { NavLink } from "react-router-dom";
import NavigationStrings from "../Constant/NavigationStrings"
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';


const Header = () => {
    return (
        <>
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
       <NavLink to="/"> <Navbar.Brand>Mohit</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas  id={`offcanvasNavbar-expand-md`}>
        <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Mohit
                </Offcanvas.Title>
              </Offcanvas.Header>
          <Nav className="ms-auto">
            <NavLink href="/">Home</NavLink>
            <NavLink to={NavigationStrings.ABOUT_ME}>About</NavLink>
            <NavLink to="/">Skills</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to={NavigationStrings.PORTFOLIO}>Portfolio</NavLink>
            <NavLink to={NavigationStrings.CONTACT}>Contact</NavLink>
          </Nav>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
        </>
    )
}

export default Header