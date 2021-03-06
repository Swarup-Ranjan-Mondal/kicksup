import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container className="px-5">
          {/* Website Logo */}
          <Navbar.Brand role="button">
            <Image
              src={`${process.env.PUBLIC_URL}/websitelogo.png`}
              width="50px"
              height="50px"
            />
          </Navbar.Brand>
          {/** **/}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation Links */}
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>HOME</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/thejourney">
                <Nav.Link>THE JOURNEY</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/team">
                <Nav.Link>TEAM</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/store">
                <Nav.Link>STORE</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link>CONTACT</Nav.Link>
              </LinkContainer>
            </Nav>
            {/** **/}

            {/* Logged in user */}
            <Nav className="ms-auto">
              <Nav.Item>
                <i className="fa-regular fa-user me-2"></i> GAGAN
              </Nav.Item>
            </Nav>
            {/** **/}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
