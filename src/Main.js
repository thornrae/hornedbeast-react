import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HornedBeast from "./HornedBeast";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="grid-please">
        {this.props.allBeasts.map((beast) => (
          <HornedBeast
            title={beast.title}
            img={beast.image_url}
            description={beast.description}
            key={beast.title}
            beastModalDisplay={this.props.beastModalDisplay}
          />
        ))}
      </div>
    );
  }
}

export default Main;
