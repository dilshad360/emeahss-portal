import React, { useEffect } from "react";
import { Grid, TextField, Typography, Divider, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import CheckCircle from '@mui/icons-material/CheckCircle';
import { Formik, Field, isEmptyArray } from "formik";
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
import { useState } from "react";
import axios from "axios";
import { SubmitButton, FormContainer } from "../styles/FormStyle";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const [formValues, setFormValues] = useState(initialValues);
  const [submit, setSubmit] = useState(false);
  const [syllabus, setSyllabus] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeDate = (handleChange, event) => {
    const { name, value } = event.target;
    // Reformat the date value to MM/DD/YYYY format
    const formattedDate = value.split("-").reverse().join("/");
    setDateOfBirth(formattedDate)
    handleChange({ target: { name, value: formattedDate } });
  };

  //handling submit
  const handleSubmit = async (values) => {
    const formattedValues = {

      Name: values.Name,
      MobileNumber: values.MobileNumber,
      WhatsappNumber: values.WhatsappNumber,
      SingleWindowNo: values.SingleWindowNo,
      Board: values.Board,
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
      /*
      for state subjects which do not appear 
      in CBSE will null in if syllabus is CBSE */
      //grade section
      Language1: syllabus === 'STATE' ? values.statesubjectsMarks[0].grade : '',
      Language2: syllabus === 'CBSE' ? values.cbseMarks[0].grade : values.statesubjectsMarks[1].grade,
      English: syllabus === 'CBSE' ? values.cbseMarks[1].grade : values.statesubjectsMarks[2].grade,
      Hindi: syllabus === 'STATE' ? values.statesubjectsMarks[3].grade : '',
      SocialScience: syllabus === 'CBSE' ? values.cbseMarks[3].grade : values.statesubjectsMarks[4].grade,
      Physics: syllabus === 'STATE' ? values.statesubjectsMarks[5].grade : '',
      Chemistry: syllabus === 'STATE' ? values.statesubjectsMarks[6].grade : '',
      Biology: syllabus === 'STATE' ? values.statesubjectsMarks[7].grade : '',
      Maths: syllabus === 'CBSE' ? values.cbseMarks[4].grade : values.statesubjectsMarks[8].grade,
      IT: syllabus === 'STATE' ? values.statesubjectsMarks[9].grade : '',
      Science: syllabus === 'CBSE' ? values.cbseMarks[2].grade : '',

      //course selection
      coursePreference1: values.coursePreference1,
      coursePreference2: values.coursePreference2,
      coursePreference3: values.coursePreference3,
    };

    let singleWindowNo = values.SingleWindowNo
    console.log(singleWindowNo);
    try {
      const response = await axios.get(`https://sheet.best/api/sheets/2112eec1-f365-43b1-b918-287af866f358/search?SingleWindowNo=${singleWindowNo}`);
      console.log(response.data);
      if (isEmptyArray(response.data)) {
        await axios.post("https://sheet.best/api/sheets/2112eec1-f365-43b1-b918-287af866f358", formattedValues).then(response => {
        console.log("response", response.data[0]);
        })
        setSubmit(true)
        handleClickOpen()
      }
      else {
        alert("You are already registered")
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  const HandleExamChange = (value, setFieldValue) => {
    setSyllabus(value)
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
        handleSubmit(values);
        setFormValues(values);
        console.log(formValues.DateOfBirth);
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
            EMEA HSS Application for PlusOne Admission 2023-24 (Management
            Quota)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
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
              <Field
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
              <Field
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
              <Field
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
                name="Board"
                label="Board of qualifying examination"
                options={examOptions}
                error={errors.Board && touched.Board}
                onChange={HandleExamChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
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
              <Field
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
              <Field
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
              <Field
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
              <Field
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
              <Field
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
              <Field
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
              <Field
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
          <SubmitButton fullWidth variant="contained" type="submit">
            Submit
          </SubmitButton>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>
              <CheckCircle color="primary" style={{ fontSize: 48 }} />
            </DialogTitle>
            <DialogContent>
              <Typography>Application Form filled Successfully.</Typography>
              <Typography>Please Download the PDF.</Typography>
            </DialogContent>
            <DialogActions>
              <Link to={'/application'}>Download PDF</Link>
            </DialogActions>
          </Dialog>
        </FormContainer>
      )}
    </Formik>
  );
}

export default RegistrationForm;
