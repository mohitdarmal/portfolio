import React from "react";
import { NavLink } from "react-router-dom";
import NavigationStrings from "../../Constant/NavigationStrings"
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import "../Header/Header.css"


const HeaderDesktop = () => {
    return (
        <>
    <Navbar className="header-sec" collapseOnSelect expand="lg"  variant="light" sticky="top">
      <Container>
       <NavLink to="/"> <Navbar.Brand>Mohit</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas  id={`offcanvasNavbar-expand-md`}>
        <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Mohit
                </Offcanvas.Title>
              </Offcanvas.Header>
          <Nav className="ms-auto header-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to={NavigationStrings.ABOUT_ME}>About</NavLink>
            <NavLink to="skill">Skills</NavLink>
            <NavLink to="service">Services</NavLink>
            <NavLink to={NavigationStrings.PORTFOLIO}>Portfolio</NavLink>
            <NavLink to={NavigationStrings.CONTACT}>Contact</NavLink>
          </Nav>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
 
        </>
    )
}

export default HeaderDesktop