import React from "react";
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
  codeToCourse,
  subjects,
  markToGrade,
  handleSubmit,
  examOptions,
} from "../Const";
import { SelectInput } from "../components/common/SelectInput";
import SubjectsGradeInput from "../components/SubjectsGradeInput";
import CourseInput from "../components/CourseInput";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useState } from "react";

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
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      backgroundColor: "#E4E4E4",
      alignItems: "center",
      justifyContent: "center",
    },
    section: {
      padding: "10px",
      flexGrow: 1,
      backgroundColor: "#FFFFFF",
      borderRadius: "10px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },

    header: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333333",
      textAlign: "center",
      fontWeight: "bold",
    },

    field: {
      marginBottom: "10px",
      fontSize: "14px",
      textAlign: "left",
      marginLeft: "20px",
    },

    tableContainer: {
      marginTop: "10px",
      marginBottom: "20px",
      marginLeft: "20px",
    },
    tableHeader: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#EEEEEE",
      padding: "5px 0",
      borderBottom: "1px solid #CCCCCC",
    },
    span: {
      marginRight: "10px",
    },
    tableRow: {
      display: "flex",
      flexDirection: "row",
      padding: "5px 0",
      borderBottom: "1px solid #CCCCCC",
    },
    tableCell: {
      flex: 1,
      fontSize: "12px",
      textAlign: "left",
      paddingLeft: "5px",
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>
            EMEA HSS Application for PlusOne Admission 2023-24 (Management
            Quota)
          </Text>
          <View style={styles.field}>
            <Text>
              <Text style={styles.span}>Name:</Text> {formValues.Name}
            </Text>
          </View>
          <View style={styles.field}>
            <Text>
              <Text style={styles.span}>Mobile Number: </Text>
              {formValues.MobileNumber}
            </Text>
          </View>
          <View style={styles.field}>
            <Text>
              <Text style={styles.span}>WhatsappNo: </Text>
              {formValues.WhatsappNumber}
            </Text>
          </View>
          <View style={styles.field}>
            <Text>DateofBirth: {formValues.DateOfBirth}</Text>
          </View>
          <View style={styles.field}>
            <Text>
              <Text>Exam Name: </Text>
              {formValues.ExamName}
            </Text>
          </View>
          <View style={styles.field}>
            <Text>Register Number: {formValues.RegNumber}</Text>
          </View>
          <View style={styles.field}>
            <Text>Year: {formValues.Year}</Text>
          </View>
          <View style={styles.field}>
            <Text>School Name: {formValues.SchoolName}</Text>
          </View>
          <View style={styles.field}>
            <Text>Father Name: {formValues.FatherName}</Text>
          </View>
          <View style={styles.field}>
            <Text>Mother Name: {formValues.MotherName}</Text>
          </View>
          <View style={styles.field}>
            <Text>House Name: {formValues.HouseName}</Text>
          </View>
          <View style={styles.field}>
            <Text>Post Office: {formValues.PostOffice}</Text>
          </View>
          <View style={styles.field}>
            <Text>Panchayath: {formValues.Panchayath}</Text>
          </View>
          <View style={styles.field}>
            <Text>Ward: {formValues.Ward}</Text>
          </View>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableCell}>Subject</Text>
              <Text style={styles.tableCell}>Grade</Text>
            </View>
            {formValues.subjectsMarks.map((subject, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{subject.subject}</Text>
                <Text style={styles.tableCell}>
                  {markToGrade[subject.grade]}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.tableContainer}>
            <View>Course Preference</View>
          </View>
          <View style={styles.field}>
            <Text>
              Course Preference 1: {codeToCourse[formValues.coursePreference1]}
            </Text>
          </View>
          <View style={styles.field}>
            <Text>
              Course Preference 2: {codeToCourse[formValues.coursePreference2]}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      //on submit section
      onSubmit={(values) => {
        handleSubmit(values);
        setFormValues(values);
        console.log(values);
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
                label="Ward"
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
          />
          <CourseInput />
          <SubmitButton variant="contained" type="submit">
            Submit
          </SubmitButton>
          <PDFDownloadLink
            document={<MyDocument formValues={formValues} />}
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
