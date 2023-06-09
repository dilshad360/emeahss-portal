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
              <Typography variant="subtitle2">
              Please ensure the details are entered correctly
        </Typography>
            </DialogContent>
            <DialogActions>
            <Button><Link to={props.link}>Register</Link></Button>
            </DialogActions>
          </Dialog>
  )
}

export default WarningDialog