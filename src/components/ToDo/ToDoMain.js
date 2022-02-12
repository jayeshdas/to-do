import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import CreateToDO from "./CreateToDo";
import ToDoList from "./ToDoList";
import '../../css/AppStyle.css'
import MUISnackbar from "../Utility/MUISnackbar";
import { useSnackbar } from "notistack";
import IconTabs from "../Utility/MUITabs";
import BasicTabs from "../Utility/MUITabs";
class ToDoMain extends Component {
  render() {
    return (
      
            <BasicTabs/>
       
    );
  }
}

export default ToDoMain;


function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
    </React.Fragment>
  );
}