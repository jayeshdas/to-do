import { faCalendarWeek, faDatabase, faEye, faPlus, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { Alert, FloatingLabel, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import TransitionAlerts from "./MUIAlert";
import ToDoCard from "./MUICards";

export class CreateToDo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      desc: '',
      dataList: []
    }
  }
  CreateToDo = (e) => {
    e.preventDefault();
    let temp = this.state.dataList;
    temp.push({ id: uuid(),'username':'thestillordinary' ,'title': this.state.title, 'desc': this.state.desc, 'fav': false, datetime: new Date().toUTCString(),'imgurl':'https://avatars.githubusercontent.com/u/40832354?v=4' })
    this.setState({
      dataList: temp,
    })

  }

  ShowToDoList = (e) => {
    e.preventDefault();
    console.log(this.state);


  }
  render() {
    return (
      <React.Fragment>
        <Form className='card m-4 p-4' >
          <Form.Text className='name'><FontAwesomeIcon icon={faStickyNote} /> Create your new To-Do </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Your To-do Title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              as="textarea"
              placeholder="Leave a to-do description here" value={this.state.desc} onChange={(e) => this.setState({ desc: e.target.value })}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="" />
        </Form.Group> */}

          <Button className='btn btn-primary ' variant="primary" type="submit" onClick={this.CreateToDo}>
            <FontAwesomeIcon icon={faPlus} /> Create New To-Do
          </Button>

          {/* <Button className='btn btn-secondary ' variant="primary" type="submit" onClick={this.ShowToDoList}>
            <FontAwesomeIcon icon={faEye} /> Show All List
          </Button> */}

        </Form>

        {/* {this.state.flag?<Alert onClose={() => {}}>This is a success alert — check it out!</Alert>:false}

        <TransitionAlerts flag={this.state.flag} /> */}
        <ToDoCard data={this.state.dataList} />
        

      </React.Fragment>
    );
  }
}

export default CreateToDo;
