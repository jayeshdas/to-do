import { faCalendarWeek, faDatabase, faEye, faPlus, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { Alert, Col, FloatingLabel, Form, Row } from "react-bootstrap";
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
    temp.push({ id: uuid(), 'username': 'thestillordinary', 'title': this.state.title, 'desc': this.state.desc, 'fav': false, datetime: new Date().toUTCString(), 'imgurl': 'https://avatars.githubusercontent.com/u/40832354?v=4' })
    this.setState({
      dataList: temp,
    })
    localStorage.setItem('dataList',JSON.stringify(this.state.dataList));
    console.log( JSON.parse(localStorage.getItem('dataList')));


  }

  ShowToDoList = (e) => {
    e.preventDefault();
    console.log(this.state);


  }

  componentDidMount(){
    this.setState({
      dataList: JSON.parse(localStorage.getItem('dataList'))
    })
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

          

              <Button className='btn btn-primary ' variant="primary" type="submit" onClick={this.CreateToDo}>
                <FontAwesomeIcon icon={faPlus} /> Create New To-Do
              </Button>

             

            </Form>
     
          <div className="d-flex m-2">
            <ToDoCard data={this.state.dataList} />
          </div>



      </React.Fragment>
    );
  }
}

export default CreateToDo;
