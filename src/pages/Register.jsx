import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import styled from "@emotion/styled";
import {
  years,
  genderOptions,
  religionOptions,
  panchayatOptions,
} from "../Const";
import { SelectInput } from "../components/common/SelectInput";
import { SelectYear } from "../components/common/SelectYear";

const FormField = styled(Field)`
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 2rem;
`;

const FormContainer = styled(Form)`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem 2rem 1rem;
`;

const initialValues = {
  name: "",
  mobileNumber: "",
  whatsappNumber: "",
  singleWindowNo: "",
  examName: "",
  regNumber: "",
  year: "",
  schoolName: "",
  gender: "",
  religion: "",
  dateOfBirth: "",
  motherName: "",
  fatherName: "",
  houseName: "",
  postOffice: "",
  panchayath: "",
  ward: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Name of Applicant is required"),
  mobileNumber: yup
    .string()
    .matches(/^\d+$/, "Mobile number must be a valid number")
    .min(10, "Mobile number must be at least 10 digits")
    .required("Mobile number is required"),
  whatsappNumber: yup
    .string()
    .matches(/^\d+$/, "Whatsapp number must be a valid number")
    .min(10, "Whatsapp number must be at least 10 digits")
    .required("Whatsapp number is required"),
  singleWindowNo: yup
    .string()
    .matches(/^\d+$/, "Single Window number must be a valid number")
    .required("Single Window number is required"),
  examName: yup.string().required("Name of qualifying examination is required"),
  regNumber: yup
    .string()
    .matches(/^\d+$/, "Single Window number must be a valid number")
    .required("Single Window number is required"),
  year: yup.string().required("Year is required"),
  schoolName: yup.string().required("Name of school is required"),
  gender: yup.string().required("Gender is required"),
  religion: yup.string().required("Religion is required"),
  dateOfBirth: yup.string().required("Date of Birth is required"),
  motherName: yup.string().required("Name of Mother is required"),
  fatherName: yup.string().required("Name of Father is required"),
  houseName: yup.string().required("House Name is required"),
  postOffice: yup.string().required("Post Office is required"),
  panchayath: yup.string().required("Panchayath is required"),
  ward: yup.string().required("Ward is required"),
});

function RegistrationForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }) => (
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
            Application for PlusOne Admission 2023-24 (Management Quota)
          </Typography>
          <Grid container spacing={1.5}>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="name"
                label="Name of Applicant"
                type="text"
                fullWidth
                error={errors.name && touched.name}
                helperText={errors.name && touched.name && errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="mobileNumber"
                label="Mobile Number"
                type="number"
                fullWidth
                error={errors.mobileNumber && touched.mobileNumber}
                helperText={
                  errors.mobileNumber &&
                  touched.mobileNumber &&
                  errors.mobileNumber
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="whatsappNumber"
                label="Whatsapp Number"
                type="number"
                fullWidth
                error={errors.whatsappNumber && touched.whatsappNumber}
                helperText={
                  errors.whatsappNumber &&
                  touched.whatsappNumber &&
                  errors.whatsappNumber
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="singleWindowNo"
                label="Single Window Appln. No."
                type="number"
                fullWidth
                error={errors.singleWindowNo && touched.singleWindowNo}
                helperText={
                  errors.singleWindowNo &&
                  touched.singleWindowNo &&
                  errors.singleWindowNo
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="examName"
                label="Name of qualifying examination"
                type="text"
                fullWidth
                error={errors.examName && touched.examName}
                helperText={
                  errors.examName && touched.examName && errors.examName
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="regNumber"
                label="Register Number"
                type="number"
                fullWidth
                error={errors.regNumber && touched.regNumber}
                helperText={
                  errors.regNumber && touched.regNumber && errors.regNumber
                }
              />
            </Grid>
            <Grid item xs={3}>
              <SelectYear
                name="year"
                label="Year"
                options={years}
                error={errors.year && touched.year}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="schoolName"
                label="Name of school in which studied"
                type="text"
                fullWidth
                error={errors.schoolName && touched.schoolName}
                helperText={
                  errors.schoolName && touched.schoolName && errors.schoolName
                }
              />
            </Grid>
            <Grid item xs={6}>
              <SelectInput
                name="gender"
                label="Gender"
                options={genderOptions}
                error={errors.gender && touched.gender}
              />
            </Grid>
            <Grid item xs={6}>
              <SelectInput
                name="religion"
                label="Religion"
                options={religionOptions}
                error={errors.religion && touched.religion}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="dateOfBirth"
                label="Date of Birth"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                error={errors.dateOfBirth && touched.dateOfBirth}
                helperText={
                  errors.dateOfBirth && touched.dateOfBirth && errors.dateOfBirth
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="motherName"
                label="Name of Mother"
                type="text"
                fullWidth
                error={errors.motherName && touched.motherName}
                helperText={
                  errors.motherName && touched.motherName && errors.motherName
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="fatherName"
                label="Name of Father"
                type="text"
                fullWidth
                error={errors.fatherName && touched.fatherName}
                helperText={
                  errors.fatherName && touched.fatherName && errors.fatherName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                as={TextField}
                name="houseName"
                label="House Name"
                type="text"
                fullWidth
                error={errors.houseName && touched.houseName}
                helperText={
                  errors.houseName && touched.houseName && errors.houseName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                as={TextField}
                name="postOffice"
                label="Post Office"
                type="text"
                fullWidth
                error={errors.postOffice && touched.postOffice}
                helperText={
                  errors.postOffice && touched.postOffice && errors.postOffice
                }
              />
            </Grid>
            <Grid item xs={6}>
              <SelectInput
                name="panchayath"
                label="Panchayath"
                options={panchayatOptions}
                error={errors.panchayath && touched.panchayath}
              />
            </Grid>
            <Grid item xs={6}>
              <FormField
                as={TextField}
                name="ward"
                label="Ward"
                type="number"
                fullWidth
                error={errors.ward && touched.ward}
                helperText={errors.ward && touched.ward && errors.ward}
              />
            </Grid>
          </Grid>
          <Divider className="py-4"/>

          <SubmitButton variant="contained" type="submit">
            Submit
          </SubmitButton>
        </FormContainer>
      )}
    </Formik>
  );
}

export default RegistrationForm;
