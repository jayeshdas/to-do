import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

export class MUIDragableBox extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        open:true
      }
    }

    handleClickOpen = () => {
        this.setState({
            open:true
        })
    };

    handleClose = () => {
        this.setState({
            open:false
        })
    };

    PaperComponent=()=> {
        return (
          <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
          >
            <Paper {...this.props} />
          </Draggable>
        );
      }

  render() {
    return (
        <div>
        <Button variant="outlined" onClick={this.handleClickOpen}>
          Open draggable dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          PaperComponent={this.PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Subscribe
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={this.handleClose}>
              Cancel
            </Button>
            <Button onClick={this.handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default MUIDragableBox






