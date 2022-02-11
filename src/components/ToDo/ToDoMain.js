import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import CreateToDO from "./CreateToDo";
import ToDoList from "./ToDoList";
import '../../css/AppStyle.css'
class ToDoMain extends Component {
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

export default ToDoMain;
