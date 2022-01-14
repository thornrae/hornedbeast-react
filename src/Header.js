import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

class Header extends React.Component {
  render() {
    return (
      <Navbar sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Gallery of Horned Beasts</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link
              href="https://github.com/thornrae/hornedbeast-react"
              target="_blank"
            >
              GitHub Repo
            </Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
