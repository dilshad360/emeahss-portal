import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField, Typography } from "@mui/material";
import { SubmitButton, FormContainer } from "../styles/FormStyle";
import DescriptionIcon from "@mui/icons-material/Description";

const validationSchema = yup.object().shape({
  SingleWindowNo: yup.string().required("Single Window number is required"),
  DateOfBirth: yup.date().required("Date of birth is required"),
});

const initialValues = {
  SingleWindowNo: "",
  DateOfBirth: "",
};

export default function Application() {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <DescriptionIcon color="primary" style={{ fontSize: 72 }} />
      <Formik
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched, handleChange }) => (
          <FormContainer>
            <Typography
              variant="h4"
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#006666",
              }}
            >
              EMEA HSS Application for PlusOne Admission Download
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
              onChange={handleChange}
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
              Download
            </SubmitButton>
          </FormContainer>
        )}
      </Formik>
    </div>
  );
}
