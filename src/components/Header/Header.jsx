import React from "react";
import {Link}  from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import './Header.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>Find Your Bank!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link as={Link} to = {"/all-banks"}> All Banks</Nav.Link>
            <Nav.Link as={Link} to = {"/favourites"}> Favorites </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Header;