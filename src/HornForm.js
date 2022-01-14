import React from "react";
import Form from "react-bootstrap/Form";

class HornForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Filter by Horns</Form.Label>
          <Form.Control as="select">
            <option value="1">1 horn</option>
            <option value="2">2 horns</option>
            <option value="3">3 horns</option>
            <option value="100">Hella horns</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default HornForm;
