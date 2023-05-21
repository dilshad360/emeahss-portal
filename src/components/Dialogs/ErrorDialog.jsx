import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography , Button } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error';


function ErrorDialog(props) {
  return (
    <Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth
            className='text-center'
          >
            <DialogTitle>
              <ErrorIcon color="error" style={{ fontSize: 48 }} />
            </DialogTitle>
            <DialogContent>
              <Typography variant='h6'>{props.message}</Typography>
            </DialogContent>
            <DialogActions>
            <Button onClick={props.onClose}>Close</Button>
            </DialogActions>
          </Dialog>
  )
}

export default ErrorDialog