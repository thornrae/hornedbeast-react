import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import allBeasts from "./data.json";
import SelectedBeast from "./SelectedBeast.js";
import Form from "react-bootstrap/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeasts: allBeasts,
      selectedBeasts: {},
      displayTheModal: false,
      filteredBeasts: allBeasts,
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

  filterHorns = (e) => {
    let userInput = parseInt(e.target.value);
    console.log(userInput);
    let newRender = this.state.allBeasts.filter(
      (beast) => beast.horns === userInput
    );
    console.log(newRender);
    this.setState({ filteredBeasts: newRender });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* <HornForm /> */}
        <Form onChange={this.filterHorns}>
          <Form.Group className="mb-3">
            <Form.Label>Filter by Horns</Form.Label>
            <Form.Control as="select">
              <option> Select an Option</option>
              <option value="1">1 horn</option>
              <option value="2">2 horns</option>
              <option value="3">3 horns</option>
              <option value="100">Hella horns</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Main
          allBeasts={this.state.filteredBeasts}
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
