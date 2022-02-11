import { faCalendarWeek, faDatabase, faPlus, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export class CreateToDo extends Component {
  render() {
    return (
      <Form className='card m-4 p-4'>
          <Form.Text className='name'><FontAwesomeIcon icon={faStickyNote} /> Create your new To-Do </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Your To-do Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            as="textarea"
            placeholder="Leave a to-do description here"
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="" />
        </Form.Group> */}

        <Button className='btn btn-primary ' variant="primary" type="submit">
        <FontAwesomeIcon icon={faPlus} /> Create New To-Do
        </Button>
      </Form>
    );
  }
}

export default CreateToDo;
