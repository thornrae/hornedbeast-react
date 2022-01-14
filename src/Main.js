import React from "react";
import data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import HornedBeast from "./HornedBeast";
import "./Main.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { CardColumns } from "react-bootstrap";
// import CardColumns from "react-bootstrap/CardColumns";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeasts: data,
    };
  }

  render() {
    return (
      <div className="grid-please">
        {this.state.allBeasts.map((beast) => (
          <HornedBeast
            title={beast.title}
            img={beast.image_url}
            description={beast.description}
          />
        ))}
      </div>
    );
  }
}

export default Main;
