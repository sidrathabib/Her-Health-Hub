import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import './components/Header/Header.css';

function Header() {
  return (
    <header>
      {/* Logo and Tagline */}
      <div className="coverimg-container">
        <img src="pics/logo.png" alt="Logo" id="coverimg" />
        <p className="subtitle">Insert Tagline Here</p>
      </div>

      {/* Navigation Bar */}
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">Women's Health Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="her-health-hub/src/components/research-pages/PCOS.js">Poly Cystic Ovary Syndrome</Nav.Link>
              <Nav.Link href="her-health-hub/src/components/research-pages/Endo.js">Endometriosis</Nav.Link>
              <Nav.Link href="her-health-hub/src/components/research-pages/Hypo.js">Hypothyroidism</Nav.Link>
              <Nav.Link href="her-health-hub/src/components/research-pages/About-Us.js">About Us</Nav.Link>
            </Nav>

            {/* Search Bar */}
            <Form className="d-flex searchbar">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
