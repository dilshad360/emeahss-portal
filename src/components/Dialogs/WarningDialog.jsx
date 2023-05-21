import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography , Button } from '@mui/material'
import WarningIcon from '@mui/icons-material/Warning';
import { Link } from "react-router-dom";


function WarningDialog(props) {
  return (
    <Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth
            className='text-center'
          >
            <DialogTitle>
              <WarningIcon color="warning" style={{ fontSize: 48 }} />
            </DialogTitle>
            <DialogContent>
              <Typography variant='h6'>{props.message}</Typography>
            </DialogContent>
            <DialogActions>
            <Button><Link to={"/register"}>Register</Link></Button>
            </DialogActions>
          </Dialog>
  )
}

export default WarningDialog