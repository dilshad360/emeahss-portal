import React, { useEffect, useState } from "react";
import { Formik, isEmptyArray } from "formik";
import * as yup from "yup";
import { TextField, Typography } from "@mui/material";
import { SubmitButton, FormContainer } from "../styles/FormStyle";
import DescriptionIcon from "@mui/icons-material/Description";
import axios from "axios";
import Loader from "../components/Loader";
import ErrorDialog from "../components/Dialogs/ErrorDialog";
import WarningDialog from "../components/Dialogs/WarningDialog";
import PdfDialog from "../components/Dialogs/PdfDialog";

const validationSchema = yup.object().shape({
  SingleWindowNo: yup.string().required("Single Window number is required"),
  DateOfBirth: yup.string().required("Date of birth is required"),
});

const initialValue = {
  SingleWindowNo: "",
  DateOfBirth: "",
};

export default function Application() {
  const [registered, setRegistered] = useState({});
  const [, setDateOfBirth] = useState("");
  const [dialogMessage, setDialogMesssage] = useState("")
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [openWarningDialog, setOpenWarningDialog] = useState(false);
  const [openPdfDialog, setOpenPdfDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  // Checking if the user is registered or not

  const handleChangeDate = (handleChange, event) => {
    const { name, value } = event.target;
    // Reformat the date value to MM/DD/YYYY format
    const formattedDate = value.split("-").reverse().join("/");
    setDateOfBirth(formattedDate);
    handleChange({ target: { name, value: formattedDate } });
  };

  // To close error dialog
  const handleClose = () => {
    setOpenPdfDialog(false);
    setOpenErrorDialog(false);
    setOpenWarningDialog(false);
  };

  //To show error dialog with custom message
  const showErrorDialog = (message) => {
    setOpenErrorDialog(true)
    setDialogMesssage(message)
  }

  //To show warning for not registered users
  const showWarningDialog = (message) => {
    setOpenWarningDialog(true)
    setDialogMesssage(message)
  }

  const handleSubmit = async (values) => {
    setLoading(true);
    let dateOfBirth = values.DateOfBirth;
    setDateOfBirth(dateOfBirth);
    let singleWindowNo = values.SingleWindowNo;
    try {
      const response = await axios.get(
        `https://sheet.best/api/sheets/2112eec1-f365-43b1-b918-287af866f358/search?SingleWindowNo=${singleWindowNo}&DateOfBirth=${dateOfBirth}`
      );
      if (isEmptyArray(response.data)) {
        showWarningDialog("You are not registered")
        setLoading(false);
      } else {
        console.log(response.data[0]);
        setRegistered(response.data[0]);
        setOpenPdfDialog(true)
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      showErrorDialog(error.message)
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(registered);
  }, [registered]);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <DescriptionIcon color="primary" style={{ fontSize: 72 }} />
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValue}
        validationSchema={validationSchema}
      >
        {({ errors, touched, handleChange }) => (
          <FormContainer>
            <Loader open={loading} />
            <Typography
              variant="h4"
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#006666",
              }}
            >
              EMEA HSS PlusOne Admission Application Download
            </Typography>
            <TextField
              fullWidth
              name="SingleWindowNo"
              label="Single Window Appln. No"
              type="number"
              onChange={handleChange}
              error={touched.SingleWindowNo && Boolean(errors.SingleWindowNo)}
              helperText={touched.SingleWindowNo && errors.SingleWindowNo}
              margin="normal"
            />

            <TextField
              fullWidth
              name="DateOfBirth"
              label="Date of Birth"
              type="date"
              onChange={(event) => handleChangeDate(handleChange, event)}
              error={touched.DateOfBirth && Boolean(errors.DateOfBirth)}
              helperText={touched.DateOfBirth && errors.DateOfBirth}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <SubmitButton
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Submit
            </SubmitButton>
          <PdfDialog open={openPdfDialog} onClose={handleClose} registered={registered} />
          <ErrorDialog open={openErrorDialog} onClose={handleClose} message={dialogMessage} />
          <WarningDialog open={openWarningDialog} onClose={handleClose}  message={dialogMessage} />
          </FormContainer>
        )}
      </Formik>
    </div>
  );
}
