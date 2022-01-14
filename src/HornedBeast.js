import React from "react";
import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  handleFavorites = () => {
    this.setState({ favorites: this.state.favorites + 1 });
    this.props.beastModalDisplay(this.props.title);
  };

  render() {
    return (
      <Card style={{ width: "18rem" }} onClick={this.handleFavorites}>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text> ❤️ = {this.state.favorites}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
