import Loader from "../components/Loader";
import SuccessDialog from "../components/Dialogs/SuccessDialog";
import {
  schoolOptions,
  kondottyWardOptions,
  pullikkalWardOptions,
  YesNo,
} from "../Const";
import ErrorDialog from "../components/Dialogs/ErrorDialog";
import React, { useEffect } from "react";
import { Grid, TextField, Typography, Divider } from "@mui/material";
import { Formik, Field, isEmptyArray } from "formik";
import {
  communityInitialValues,
  communityValidationSchema,
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
import Cocurricular from "../components/Co-curricular";


const CommunityForm = () => {
  const [, setSubmit] = useState(false);
  const [syllabus, setSyllabus] = useState("");
  const [dialogMessage, setDialogMesssage] = useState("");
  const [school, setSchool] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [kward, setKward] = useState(false);
  const [pward, setPward] = useState(false);
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
    setDialogMesssage(message);
  };

  //To show error dialog with custom message
  const showErrorDialog = (message) => {
    setOpenErrorDialog(true);
    setDialogMesssage(message);
  };

  const HandleExamChange = (value) => {
    setSyllabus(value);
  };

  const HandleSchoolChange = (value) => {
    if (value === "Others") {
      setSchool(true);
    }
  };

  const HandlePanchayathChange = (value) => {
    if (value === "Kondotty") {
      setKward(true);
    } else if (value === "Pulikkal") {
      setPward(true);
    } else {
      setKward(false);
      setPward(false);
    }
  };

  useEffect(()=>{
    console.log(process.env.REACT_APP_COMMUNITY_LINK);
  })

  //handling submit
  const handleSubmit = async (values) => {
    setLoading(true);
    console.log("Sports State Level:",values.SportsStateLevel);
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
      ExtraCurricular: values.ExtraCurricular,
      SportsStateLevel: values.SportsStateLevel,
      SportsDistrictA: values.SportDistrict[0].count,
      SportsDistrictB:values.SportDistrict[1].count,
      SportsDistrictC:values.SportDistrict[2].count,
      SportsDistrictParticipation:values.SportDistrict[3].count,
      KalotsavamStateLevel: values.KalotsavamStateLevel,
      ArtsDistrictA:values.ArtsDistrict[0].count,
      ArtsDistrictB:values.ArtsDistrict[1].count,
      ArtsDistrictC:values.ArtsDistrict[2].count,
      ArtsDistrictParticipation:values.ArtsDistrict[3].count,
      NationalOrStateLevelExamination:values.NationalStateLevelExamination,
      StateScienceFairA:values.StateScienceFair[0].count,
      StateScienceFairB:values.StateScienceFair[1].count,
      StateScienceFairC:values.StateScienceFair[2].count,
      StateScienceFairD:values.StateScienceFair[3].count,
      StateScienceFairE:values.StateScienceFair[4].count,
      StateSocialFairA:values.StateSocialFair[0].count,
      StateSocialFairB:values.StateSocialFair[1].count,
      StateSocialFairC:values.StateSocialFair[2].count,
      StateSocialFairD:values.StateSocialFair[3].count,
      StateSocialFairE:values.StateSocialFair[4].count,
      StateMathsFairA:values.StateMathsFair[0].count,
      StateMathsFairB:values.StateMathsFair[1].count,
      StateMathsFairC:values.StateMathsFair[2].count,
      StateMathsFairD:values.StateMathsFair[3].count,
      StateMathsFairE:values.StateMathsFair[4].count,
      StateITFestA:values.StateITFest[0].count,
      StateITFestB:values.StateITFest[1].count,
      StateITFestC:values.StateITFest[2].count,
      StateITFestD:values.StateITFest[3].count,
      StateITFestE:values.StateITFest[4].count,
      StateWorkExperienceFairA:values.StateWorkExperienceFair[0].count,
      StateWorkExperienceFairB:values.StateWorkExperienceFair[1].count,
      StateWorkExperienceFairC:values.StateWorkExperienceFair[2].count,
      StateWorkExperienceFairD:values.StateWorkExperienceFair[3].count,
      StateWorkExperienceFairE:values.StateWorkExperienceFair[4].count,
      Club:values.Club

    };
    let singleWindowNo = values.SingleWindowNo;
    try {
      const response = await axios
        .get
        ( `${process.env.REACT_APP_COMMUNITY_LINK}/search?SingleWindowNo=${singleWindowNo}`
        );
      if (isEmptyArray(response.data)) {
        await axios
          .post(`${process.env.REACT_APP_COMMUNITY_LINK}`, formattedValues)
          .then((response) => {
            showSuccessDialog("Application Form filled Successfully.");
          });
        setSubmit(true);
        setLoading(false);
      } else {
        showSuccessDialog("You are already registered");
        setLoading(false);
      }
    } catch (error) {
      // console.log(error);
      showErrorDialog(error.message);
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={communityInitialValues}
      communityValidationSchema={communityValidationSchema}
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
            EMEA HSS Application for PlusOne Admission 2023-24 (Community Quota)
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
            {school ? (
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="SchoolNameOthers"
                  label="Name of school studied"
                  type="text"
                  fullWidth
                  error={errors.SchoolNameOthers && touched.SchoolNameOthers}
                  helperText={
                    errors.SchoolNameOthers &&
                    touched.SchoolNameOthers &&
                    errors.SchoolNameOthers
                  }
                />
              </Grid>
            ) : (
              ""
            )}
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
            {kward ? (
              <Grid item xs={6}>
                <SelectInput
                  name="Ward"
                  label="Ward"
                  options={kondottyWardOptions}
                  error={errors.Ward && touched.Ward}
                />
              </Grid>
            ) : pward ? (
              <Grid item xs={6}>
                <SelectInput
                  name="Ward"
                  label="Ward"
                  options={pullikkalWardOptions}
                  error={errors.Ward && touched.Ward}
                />
              </Grid>
            ) : (
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
            )}
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
          {/*********** Course Preference *************/}
          <Typography variant="subtitle1" className="pt-4" gutterBottom>
            Course Preferences
          </Typography>
          <CourseInput />
          {/*********** Extra Activities *************/}
          <Typography
            variant="subtitle2"
            className="pt-10"
            textAlign={"start"}
            gutterBottom
          >
            Whether the applicant is eligible for bonus points under the
            following category?
          </Typography>
          <Grid item xs={12} sm={6}>
            <Field
              as={TextField}
              name="ExtraCurricular"
              label="Extra-Curricular activity"
              type="text"
              fullWidth
            />
          </Grid>
          {/*********** Sports Section *************/}
          <Divider textAlign="left" className="pt-4 ">
            <Typography variant="" className="font-semibold" gutterBottom>
              Participation in Sports
            </Typography>
          </Divider>
          <Grid container>
            <Grid item xs={12} sm={6} className="flex items-center py-1">
              <Typography gutterBottom>State Level Participation:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name="SportsStateLevel"
                label="No. of items participated"
                type="number"
                fullWidth
              />
            </Grid>
          </Grid>
          <Typography
            variant="subtitle2"
            className="pt-4"
            textAlign={"start"}
            gutterBottom
          >
            District Level (Write the number of grades won in the relevant
            boxes):
          </Typography>
          <Grid container alignItems="center" className="pt-2" spacing={2}>
            <Grid item width={"50%"}>
              <Field
                as={TextField}
                name="SportDistrict[0].count"
                label="No. of A grade"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item width={"50%"}>
              <Field
                as={TextField}
                name="SportDistrict[1].count"
                label="No. of B grade"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item width={"50%"}>
              <Field
                as={TextField}
                name="SportDistrict[2].count"
                label="No. of C grade"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item width={"50%"}>
              <Field
                as={TextField}
                name="SportDistrict[3].count"
                label="No. of participation"
                type="number"
                fullWidth
              />
            </Grid>
          </Grid>
          <Divider textAlign="left" className="pt-4 ">
            <Typography variant="" className="font-semibold" gutterBottom>
              Participation in Kerala School Kalotsavam
            </Typography>
          </Divider>
          <Grid container className="pt-2">
            <Grid item xs={12} sm={6} className="flex items-center py-1">
              <Typography gutterBottom>State Level Participation:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name="KalotsavamStateLevel"
                label="No. of items participated"
                type="number"
                fullWidth
              />
            </Grid>
          </Grid>
          <Typography
            variant="subtitle2"
            className="pt-4"
            textAlign={"start"}
            gutterBottom
          >
            District Level (Write the number of grades won in the relevant
            boxes):
          </Typography>
          <Grid container alignItems="center" className="pt-2" spacing={2}>
            <Grid item width={"50%"}>
              <Field
                as={TextField}
                name="ArtsDistrict[0].count"
                label="No. of A grade"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item width={"50%"}>
              <Field
                as={TextField}
                name="ArtsDistrict[1].count"
                label="No. of B grade"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item width={"50%"}>
              <Field
                as={TextField}
                name="ArtsDistrict[2].count"
                label="No. of C grade"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item width={"50%"}>
              <Field
                as={TextField}
                name="ArtsDistrict[3].count"
                label="No. of participation"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <SelectInput
                name="NationalStateLevelExamination"
                label="Qualified in National/State Level Examination"
                options={YesNo}
              />
            </Grid>
          </Grid>
          <Cocurricular />
          <Grid item xs={6}>
            <Field
              as={TextField}
              name="Club"
              label="Name of any relevant Club you were member"
              type="text"
              fullWidth
            />
          </Grid>
          <SubmitButton fullWidth variant="contained" type="submit">
            Submit
          </SubmitButton>
          <SuccessDialog
            open={open}
            onClose={handleClose}
            message={dialogMessage}
            link='/community-application'
          />
          <ErrorDialog
            open={openErrorDialog}
            onClose={handleClose}
            message={dialogMessage}
          />
        </FormContainer>
      )}
    </Formik>
  );
};

export default CommunityForm;
