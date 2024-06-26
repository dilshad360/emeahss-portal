import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

function SuccessDialog(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullWidth
      className="text-center"
    >
      <DialogTitle>
        <CheckCircle color="primary" style={{ fontSize: 48 }} />
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">{props.message}</Typography>
        <p className="text-center text-gray-500" >{props.note}</p>
        <Typography variant="subtitle2">
          Please download the PDF and get ApplicationNo
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button >
          <Link to={props.link}>Download</Link>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SuccessDialog;
