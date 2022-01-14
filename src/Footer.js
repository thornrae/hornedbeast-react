import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

class Footer extends React.Component {
  render() {
    return (
      <Navbar fixed="bottom" expand="lg" variant="light" bg="dark">
        <Container>
          <Navbar.Brand
            href="https://www.linkedin.com/in/thornrae/"
            target="_blank"
          >
            Created By: Taylor Thornton 2022
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
