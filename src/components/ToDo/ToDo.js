import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import CreateToDO from "./CreateToDo";
import ToDoList from "./ToDoList";
export class ToDo extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <CreateToDO />
          </Col>
          <Col>
            <ToDoList />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ToDo;
