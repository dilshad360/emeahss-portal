import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
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
import Loader from "../components/Loader";
import SuccessDialog from "../components/Dialogs/SuccessDialog";
import { schoolOptions, kondottyWardOptions, pullikkalWardOptions } from "../Const";
import ErrorDialog from "../components/Dialogs/ErrorDialog";



function ManagementForm() {

  const [, setSubmit] = useState(false);
  const [syllabus, setSyllabus] = useState("");
  const [dialogMessage, setDialogMesssage] = useState("");
  const [school, setSchool] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [kward, setKward] = useState(false);
  const [pward, setPward] = useState(false)
  const [openErrorDialog, setOpenErrorDialog] = useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
    setOpenErrorDialog(false);
  };


  //To show successful dialog with custom message
  const showSuccessDialog = (message) => {
    handleClickOpen();
    setDialogMesssage(message)
  }

  //To show error dialog with custom message
  const showErrorDialog = (message) => {
    setOpenErrorDialog(true)
    setDialogMesssage(message)
  }


  const HandleExamChange = (value) => {
    setSyllabus(value);
  };


  const HandleSchoolChange = (value) => {
    if (value === 'Others') {
      setSchool(true)
    }
  }


  const HandlePanchayathChange = (value) => {
    if (value === 'Kondotty') {
      setKward(true)
    }
    else if (value === 'Pulikkal') {
      setPward(true)
    }
    else{
      setKward(false)
      setPward(false)
    }
  }


  //handling submit
  const handleSubmit = async (values) => {
    setLoading(true)
    const formattedValues = {
      Name: values.Name,
      MobileNumber: values.MobileNumber,
      WhatsappNumber: values.WhatsappNumber,
      SingleWindowNo: values.SingleWindowNo,
      Board: values.Board,
      RegNumber: values.RegNumber,
      Year: values.Year,
      SchoolName: school ? values.SchoolNameOthers : values.SchoolName,
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
      Language1: syllabus === "STATE" ? values.statesubjectsMarks[0].grade : "",
      Language2:
        syllabus === "CBSE"
          ? values.cbseMarks[0].grade
          : values.statesubjectsMarks[1].grade,
      English:
        syllabus === "CBSE"
          ? values.cbseMarks[1].grade
          : values.statesubjectsMarks[2].grade,
      Hindi: syllabus === "STATE" ? values.statesubjectsMarks[3].grade : "",
      SocialScience:
        syllabus === "CBSE"
          ? values.cbseMarks[3].grade
          : values.statesubjectsMarks[4].grade,
      Physics: syllabus === "STATE" ? values.statesubjectsMarks[5].grade : "",
      Chemistry: syllabus === "STATE" ? values.statesubjectsMarks[6].grade : "",
      Biology: syllabus === "STATE" ? values.statesubjectsMarks[7].grade : "",
      Maths:
        syllabus === "CBSE"
          ? values.cbseMarks[4].grade
          : values.statesubjectsMarks[8].grade,
      IT: syllabus === "STATE" ? values.statesubjectsMarks[9].grade : "",
      Science: syllabus === "CBSE" ? values.cbseMarks[2].grade : "",

      //course selection
      coursePreference1: values.coursePreference1,
      coursePreference2: values.coursePreference2,
      coursePreference3: values.coursePreference3,
    };

    let singleWindowNo = values.SingleWindowNo;
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/search?SingleWindowNo=${singleWindowNo}`
      );
      if (isEmptyArray(response.data)) {
        await axios
          .post(
            `${process.env.REACT_APP_BASE_URL}`,
            formattedValues
          )
          .then((response) => {
            showSuccessDialog("Application Form filled Successfully.")
          });
        setSubmit(true);
        setLoading(false)
      } else {
        showSuccessDialog("You are already registered")
        setLoading(false)
      }
    } catch (error) {
      // console.log(error);
      showErrorDialog(error.message)
      setLoading(false)
    }
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      //on submit section
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <Loader open={loading} />
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#006666",
            }}
          >
            EMEA HSS Application for PlusOne Admission 2023-24 (Management
            Quota)
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Student's Details
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
              <SelectInput
                name="SchoolName"
                label="Name of school studied"
                options={schoolOptions}
                error={errors.SchoolName && touched.SchoolName}
                onChange={HandleSchoolChange}
              />
            </Grid>
            {school ? <Grid item xs={12}>
              <Field
                as={TextField}
                name="SchoolNameOthers"
                label="Name of school studied"
                type="text"
                fullWidth
                error={errors.SchoolNameOthers && touched.SchoolNameOthers}
                helperText={errors.SchoolNameOthers && touched.SchoolNameOthers && errors.SchoolNameOthers}
              />
            </Grid> : ''}
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
                onChange={HandlePanchayathChange}
                options={panchayatOptions}
                error={errors.Panchayath && touched.Panchayath}
              />
            </Grid>
            {kward ?
              <Grid item xs={6}>
                <SelectInput
                  name="Ward"
                  label="Ward"
                  options={kondottyWardOptions}
                  error={errors.Ward && touched.Ward}
                />
              </Grid> : pward ? <Grid item xs={6}>
                <SelectInput
                  name="Ward"
                  label="Ward"
                  options={pullikkalWardOptions}
                  error={errors.Ward && touched.Ward}
                />
              </Grid> :
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
            }
          </Grid>
          <Typography variant="subtitle1" className="pt-4" gutterBottom>
            Marksheet
          </Typography>
          <Divider />
          <SubjectsGradeInput
            subjects={subjects}
            label="Grades"
            name="subjectsMarks"
            syllabus={syllabus}
          />
          <Typography variant="subtitle1" className="pt-4" gutterBottom>
            Course Preferences
          </Typography>
          <CourseInput />
          <SubmitButton fullWidth variant="contained" type="submit">
            Submit
          </SubmitButton>
          <SuccessDialog open={open} onClose={handleClose} message={dialogMessage} link='/management-application' />
          <ErrorDialog open={openErrorDialog} onClose={handleClose} message={dialogMessage} />
        </FormContainer>
      )}
    </Formik>
  );
}

export default ManagementForm;
