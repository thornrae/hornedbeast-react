import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import allBeasts from "./data.json";
import SelectedBeast from "./SelectedBeast.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeasts: allBeasts,
      selectedBeasts: {},
      displayTheModal: false,
    };
  }

  beastModalDisplay = (title) => {
    const showThisBeastModal = allBeasts.find((beast) => beast.title === title);
    console.log(showThisBeastModal);
    this.setState({
      selectedBeasts: showThisBeastModal,
      displayTheModal: true,
    });
  };

  closeModal = () => {
    this.setState({ displayTheModal: false });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          allBeasts={this.state.allBeasts}
          beastModalDisplay={this.beastModalDisplay}
        />
        <SelectedBeast
          selectedBeasts={this.state.selectedBeasts}
          displayTheModal={this.state.displayTheModal}
          closeTheModal={this.closeModal}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
