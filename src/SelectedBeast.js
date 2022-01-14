import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <div data-testid="modal">
          <Modal
            show={this.props.displayTheModal}
            onHide={this.props.closeTheModal}
            animation={false}
          >
            <Modal.Header>
              <Modal.Title>{this.props.selectedBeasts.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: "18rem" }} onClick={this.handleFavorites}>
                <Card.Img
                  variant="top"
                  src={this.props.selectedBeasts.image_url}
                  alt={this.props.selectedBeasts.title}
                />
                <Card.Body>
                  <Card.Title>{this.props.selectedBeasts.title}</Card.Title>
                  <Card.Text>{this.props.selectedBeasts.description}</Card.Text>
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.closeTheModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }
}

export default SelectedBeast;
