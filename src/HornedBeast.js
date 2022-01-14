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

{
  /* <div>
  <h3>{this.props.title}</h3>
  <img src={this.props.img} alt="" />
  <p>{this.props.description}</p>
  <p>favorites: {this.state.favorites}</p>
  <button onClick={this.handleFavorites}>fave me</button>
</div>; */
}
