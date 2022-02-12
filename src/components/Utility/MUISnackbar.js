import { SnackbarProvider, useSnackbar } from 'notistack';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';



export class MUISnackbar extends Component {
    
    
  render() {
    return (
      <SnackbarProvider maxSnack={4}>
        {/* <MyApp /> */}
        {this.props.MyApp}
      </SnackbarProvider>
    );
  }
}

export default MUISnackbar