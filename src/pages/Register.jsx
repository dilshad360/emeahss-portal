  import React, { useEffect } from "react";
  import { Grid, TextField, Button, Typography, Divider } from "@mui/material";
  import { Formik, Form, Field } from "formik";
  import styled from "@emotion/styled";
  import {
    initialValues,
    validationSchema,
    years,
    genderOptions,
    religionOptions,
    panchayatOptions,
    subjects,
    examOptions,
  } from "../Const";
  import { SelectInput } from "../components/common/SelectInput";
  import SubjectsGradeInput from "../components/SubjectsGradeInput";
  import CourseInput from "../components/CourseInput";
  import {
    PDFDownloadLink,
  } from "@react-pdf/renderer";
  import { useState } from "react";
  import PdfDocument from "../components/PdfDocument";
  import axios from "axios";



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

  function RegistrationForm() {
    const [formValues, setFormValues] = useState(initialValues);
    const [submit, setSubmit] = useState(false)
    const [syllabus, setSyllabus] = useState("");
    //handling submit
    const handleSubmit = async (values) => {
      try {
        const formattedValues = {
          Name: values.Name,
          MobileNumber: values.MobileNumber,
          WhatsappNumber: values.WhatsappNumber,
          SingleWindowNo: values.SingleWindowNo,
          ExamName: values.ExamName,
          RegNumber: values.RegNumber,
          Year: values.Year,
          SchoolName: values.SchoolName,
          Gender: values.Gender,
          Religion: values.Religion,
          DateOfBirth: values.DateOfBirth,
          MotherName: values.MotherName,
          FatherName: values.FatherName,
          HouseName: values.HouseName,
          PostOffice: values.PostOffice,
          Panchayath: values.Panchayath,
          Ward: values.Ward,
          
          Language1:  values.statesubjectsMarks[0].grade,
          Language2: syllabus === 'CBSE'?values.cbseMarks[0].grade:values.statesubjectsMarks[1].grade,
          English: syllabus === 'CBSE'?values.cbseMarks[1].grade:values.statesubjectsMarks[2].grade,
          Hindi: values.statesubjectsMarks[3].grade,
          SocialScience: syllabus === 'CBSE'?values.cbseMarks[3].grade:values.statesubjectsMarks[4].grade,
          Physics: values.statesubjectsMarks[5].grade,
          Chemistry: values.statesubjectsMarks[6].grade,
          Biology: values.statesubjectsMarks[7].grade,
          Maths: syllabus === 'CBSE'?values.cbseMarks[4].grade:values.statesubjectsMarks[8].grade,
          IT: values.statesubjectsMarks[9].grade,
          Science: syllabus === 'CBSE'?values.cbseMarks[2].grade:'',
          coursePreference1: values.coursePreference1,
          coursePreference2: values.coursePreference2,
        };
        
        //Google sheet heading format
        axios.post("https://sheet.best/api/sheets/2112eec1-f365-43b1-b918-287af866f358", formattedValues).then(response => {
          console.log("response", response.data[0]);
          if (response.status === 200) {
            setSubmit(true)
          }
        })
      } catch (error) {
        console.log('error',error);
      }
    }

    const HandleExamChange = (value, setFieldValue) => {
      setSyllabus(value)
      setFieldValue('ExamName', value)
    }

    useEffect(() => {
      // Here you can perform actions based on the syllabus value
      if (syllabus === "CBSE") {
        // User selected CBSE
        console.log("selected", syllabus);
      } else if (syllabus === "SSLC") {
        // User selected State
        console.log("selected", syllabus);
      }
    }, [syllabus]);
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        //on submit section
        onSubmit={(values) => {
          console.log(initialValues.statesubjectsMarks[0]);
          handleSubmit(values);
          setFormValues(values);
          console.log(values);
          alert("Application Form filled Successfully.'\n' Please Download the PDF.");
        }}
      >
        {({ errors, touched, setFieldValue }) => (
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
              EMEA HSS Application for PlusOne Admission 2023-24 (Management
              Quota)
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormField
                  as={TextField}
                  name="Name"
                  label="Name of Applicant"
                  type="text"
                  fullWidth
                  error={errors.Name && touched.Name}
                  helperText={errors.Name && touched.Name && errors.Name}
                />
              </Grid>
              <Grid item xs={12}>
                <FormField
                  as={TextField}
                  name="MobileNumber"
                  label="Mobile Number"
                  type="number"
                  fullWidth
                  error={errors.MobileNumber && touched.MobileNumber}
                  helperText={
                    errors.MobileNumber &&
                    touched.MobileNumber &&
                    errors.MobileNumber
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormField
                  as={TextField}
                  name="WhatsappNumber"
                  label="Whatsapp Number"
                  type="number"
                  fullWidth
                  error={errors.WhatsappNumber && touched.WhatsappNumber}
                  helperText={
                    errors.WhatsappNumber &&
                    touched.WhatsappNumber &&
                    errors.WhatsappNumber
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormField
                  as={TextField}
                  name="SingleWindowNo"
                  label="Single Window Appln. No."
                  type="number"
                  fullWidth
                  error={errors.SingleWindowNo && touched.SingleWindowNo}
                  helperText={
                    errors.SingleWindowNo &&
                    touched.SingleWindowNo &&
                    errors.SingleWindowNo
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <SelectInput
                  name="ExamName"
                  label="Name of qualifying examination"
                  options={examOptions}
                  error={errors.ExamName && touched.ExamName}
                  onChange={(e)=>{HandleExamChange(e, setFieldValue)}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormField
                  as={TextField}
                  name="RegNumber"
                  label="Register Number"
                  type="number"
                  fullWidth
                  error={errors.RegNumber && touched.RegNumber}
                  helperText={
                    errors.RegNumber && touched.RegNumber && errors.RegNumber
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <SelectInput
                  name="Year"
                  label="Year"
                  options={years}
                  error={errors.Year && touched.Year}
                />
              </Grid>
              <Grid item xs={12}>
                <FormField
                  as={TextField}
                  name="SchoolName"
                  label="Name of school in which studied"
                  type="text"
                  fullWidth
                  error={errors.SchoolName && touched.SchoolName}
                  helperText={
                    errors.SchoolName && touched.SchoolName && errors.SchoolName
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <SelectInput
                  name="Gender"
                  label="Gender"
                  options={genderOptions}
                  error={errors.Gender && touched.Gender}
                />
              </Grid>
              <Grid item xs={6}>
                <SelectInput
                  name="Religion"
                  label="Religion"
                  options={religionOptions}
                  error={errors.Religion && touched.Religion}
                />
              </Grid>
              <Grid item xs={12}>
                <FormField
                  as={TextField}
                  name="DateOfBirth"
                  label="Date of Birth"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  error={errors.DateOfBirth && touched.DateOfBirth}
                  helperText={
                    errors.DateOfBirth &&
                    touched.DateOfBirth &&
                    errors.DateOfBirth
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormField
                  as={TextField}
                  name="FatherName"
                  label="Name of Father"
                  type="text"
                  fullWidth
                  error={errors.FatherName && touched.FatherName}
                  helperText={
                    errors.FatherName && touched.FatherName && errors.FatherName
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormField
                  as={TextField}
                  name="MotherName"
                  label="Name of Mother"
                  type="text"
                  fullWidth
                  error={errors.MotherName && touched.MotherName}
                  helperText={
                    errors.MotherName && touched.MotherName && errors.MotherName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  as={TextField}
                  name="HouseName"
                  label="House Name"
                  type="text"
                  fullWidth
                  error={errors.HouseName && touched.HouseName}
                  helperText={
                    errors.HouseName && touched.HouseName && errors.HouseName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  as={TextField}
                  name="PostOffice"
                  label="Post Office"
                  type="text"
                  fullWidth
                  error={errors.PostOffice && touched.PostOffice}
                  helperText={
                    errors.PostOffice && touched.PostOffice && errors.PostOffice
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <SelectInput
                  name="Panchayath"
                  label="Panchayath"
                  options={panchayatOptions}
                  error={errors.Panchayath && touched.Panchayath}
                />
              </Grid>
              <Grid item xs={6}>
                <FormField
                  as={TextField}
                  name="Ward"
                  label="Ward No"
                  type="number"
                  fullWidth
                  error={errors.Ward && touched.Ward}
                  helperText={errors.Ward && touched.Ward && errors.Ward}
                />
              </Grid>
            </Grid>
            <Divider className="py-4" />
            <SubjectsGradeInput
              subjects={subjects}
              label="Grades"
              name="subjectsMarks"
              syllabus={syllabus}
            />
            <CourseInput />
            <SubmitButton variant="contained" type="submit">
              Submit
            </SubmitButton>
            <PDFDownloadLink style={submit?{'display':'flex'}:{'display':'none'}}
              document={<PdfDocument formValues={formValues} syllabus={syllabus}/>}
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
          </FormContainer>
        )}
      </Formik>
    );
  }

  export default RegistrationForm;
