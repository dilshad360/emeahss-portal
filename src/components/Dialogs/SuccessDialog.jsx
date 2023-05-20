import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography , Button } from '@mui/material'
import CheckCircle from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";


function SuccessDialog(props) {
  return (
    <Dialog
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>
              <CheckCircle color="primary" style={{ fontSize: 48 }} />
            </DialogTitle>
            <DialogContent>
              <Typography>{props.message}</Typography>
              <Typography>Please Download the PDF.</Typography>
            </DialogContent>
            <DialogActions>
            <Button><Link to={"/application"}>Download PDF</Link></Button>
            </DialogActions>
          </Dialog>
  )
}

export default SuccessDialog