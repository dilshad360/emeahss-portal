import React, { useEffect, useState } from "react";
import { Formik, isEmptyArray } from "formik";
import * as yup from "yup";
import { TextField, Typography, Button } from "@mui/material";
import { SubmitButton, FormContainer } from "../styles/FormStyle";
import DescriptionIcon from "@mui/icons-material/Description";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";
import PdfDownload from "../components/PdfDownload";
import Loader from "../components/Loader";
import ErrorDialog from "../components/Dialogs/ErrorDialog";

const validationSchema = yup.object().shape({
  SingleWindowNo: yup.string().required("Single Window number is required"),
  DateOfBirth: yup.string().required("Date of birth is required"),
});

const initialValue = {
  SingleWindowNo: "",
  DateOfBirth: "",
};

export default function Application() {
  const navigate = useNavigate();
  const [registered, setRegistered] = useState({});
  const [submit, setSubmit] = useState(false);
  const [, setDateOfBirth] = useState("");
  const [dialogMessage, setDialogMesssage] = useState("")
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
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
    setOpenErrorDialog(false);
  };

  //To show error dialog with custom message
  const showErrorDialog = (message) => {
    setOpenErrorDialog(true)
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
        // alert("You are not registered");
        showErrorDialog("You are not registered")
        // navigate("/register");
        setLoading(false);
      } else {
        console.log(response.data[0]);
        setRegistered(response.data[0]);
        setSubmit(true);
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
            <PDFDownloadLink
              style={submit ? { display: "flex" } : { display: "none" }}
              document={
                <PdfDownload
                  formValues={registered}
                  syllabus={registered[0]?.Board}
                />
              }
              fileName="form_data.pdf"
            >
              {({ blob, url, loading, error }) => {
                if (loading) {
                  return "Loading document...";
                } else if (error) {
                  return `Error: ${error.message}`;
                } else if (url) {
                  return (
                    <div>
                      <Button component="a" href={url} download="form_data.pdf">
                        Download PDF
                      </Button>
                    </div>
                  );
                } else {
                  return null;
                }
              }}
            </PDFDownloadLink>
          <ErrorDialog open={openErrorDialog} onClose={handleClose} message={dialogMessage} />
          </FormContainer>
        )}
      </Formik>
    </div>
  );
}
