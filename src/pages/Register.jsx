import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import styled from "@emotion/styled";
import {
  initialValues,
  validationSchema,
  years,
  genderOptions,
  religionOptions,
  panchayatOptions,
} from "../Const";
import { SelectInput } from "../components/common/SelectInput";
import SubjectsGradeInput from "../components/SubjectsGradeInput";
import CourseInput from "../components/CourseInput";
import { handleSubmit, subjects } from '../Const'
import { Page, Text, Document, StyleSheet, View, PDFDownloadLink } from "@react-pdf/renderer";
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

  const [formValues, setFormValues] = useState(initialValues)
  const styles = StyleSheet.create({
    page: {
      display: 'flex',
      backgroundColor: '#E4E4E4',
      padding: '20px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    section: {
      margin: '10px',
      padding: '10px',
      flexGrow: 1,
      backgroundColor: '#FFFFFF',
      borderRadius: '10px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },

    header: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333333',
      textAlign: 'center',
      fontWeight: 'bold',
    },

    field: {
      marginBottom: '10px',
      fontSize: '14px',
      textAlign: 'left',
      marginLeft: '20px',
    },

    tableContainer: {
      marginTop: '10px',
      marginBottom: '20px',
      marginLeft: '20px',
    },
    tableHeader: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#EEEEEE',
      padding: '5px 0',
      borderBottom: '1px solid #CCCCCC',
    },
    tableRow: {
      display: 'flex',
      flexDirection: 'row',
      padding: '5px 0',
      borderBottom: '1px solid #CCCCCC',
    },
    tableCell: {
      flex: 1,
      fontSize: '12px',
      textAlign: 'left',
      paddingLeft: '5px',
    },

  })

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Application for PlusOne Admission 2023-24 (Management Quota)</Text>
          <View style={styles.field}>
            <Text>Name: {formValues.Name}</Text>
          </View>
          <View style={styles.field}>
            <Text>Mobile Number: {formValues.MobileNumber}</Text>
          </View>
          <View style={styles.field}>
            <Text>WhatsappNo: {formValues.WhatsappNumber}</Text>
          </View>
          <View style={styles.field}>
            <Text>DateofBirth: {formValues.DateOfBirth}</Text>
          </View>
          <View style={styles.field}>
            <Text>Exam Name: {formValues.ExamName}</Text>
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
            <Text>School Name: {formValues.PostOffice}</Text>
          </View>
          <View style={styles.field}>
            <Text>School Name: {formValues.Panchayath}</Text>
          </View>
          <View style={styles.field}>
            <Text>School Name: {formValues.Ward}</Text>
          </View>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableCell}>Subject</Text>
              <Text style={styles.tableCell}>Grade</Text>
            </View>
            {formValues.subjectsMarks.map((subject, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{subject.subject}</Text>
                <Text style={styles.tableCell}>{subject.grade}</Text>
              </View>
            ))}
          </View>
          <View style={styles.field}>
            <Text>Course Preference 1: {formValues.coursePreference1}</Text>
          </View>
          <View style={styles.field}>
            <Text>Course Preference 2: {formValues.coursePreference2}</Text>
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
        handleSubmit(values)
        setFormValues(values)
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
            Application for PlusOne Admission 2023-24 (Management Quota)
          </Typography>
          <Grid container spacing={1.5}>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="Name"
                label="Name of Applicant"
                type="text"
                fullWidth
                error={errors.name && touched.name}
                helperText={errors.name && touched.name && errors.name}
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="MobileNumber"
                label="Mobile Number"
                type="number"
                fullWidth
                error={errors.mobileNumber && touched.mobileNumber}
                helperText={
                  errors.mobileNumber &&
                  touched.mobileNumber &&
                  errors.mobileNumber
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="WhatsappNumber"
                label="Whatsapp Number"
                type="number"
                fullWidth
                error={errors.whatsappNumber && touched.whatsappNumber}
                helperText={
                  errors.whatsappNumber &&
                  touched.whatsappNumber &&
                  errors.whatsappNumber
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="SingleWindowNo"
                label="Single Window Appln. No."
                type="number"
                fullWidth
                error={errors.singleWindowNo && touched.singleWindowNo}
                helperText={
                  errors.singleWindowNo &&
                  touched.singleWindowNo &&
                  errors.singleWindowNo
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="ExamName"
                label="Name of qualifying examination"
                type="text"
                fullWidth
                error={errors.examName && touched.examName}
                helperText={
                  errors.examName && touched.examName && errors.examName
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="RegNumber"
                label="Register Number"
                type="number"
                fullWidth
                error={errors.regNumber && touched.regNumber}
                helperText={
                  errors.regNumber && touched.regNumber && errors.regNumber
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={3}>
              <SelectInput
                name="Year"
                label="Year"
                options={years}
                error={errors.year && touched.year}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="SchoolName"
                label="Name of school in which studied"
                type="text"
                fullWidth
                error={errors.schoolName && touched.schoolName}
                helperText={
                  errors.schoolName && touched.schoolName && errors.schoolName
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <SelectInput
                name="Gender"
                label="Gender"
                options={genderOptions}
                error={errors.gender && touched.gender}
              />
            </Grid>
            <Grid item xs={6}>
              <SelectInput
                name="Religion"
                label="Religion"
                options={religionOptions}
                error={errors.religion && touched.religion}
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
                error={errors.dateOfBirth && touched.dateOfBirth}
                helperText={
                  errors.dateOfBirth && touched.dateOfBirth && errors.dateOfBirth
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="FatherName"
                label="Name of Father"
                type="text"
                fullWidth
                error={errors.fatherName && touched.fatherName}
                helperText={
                  errors.fatherName && touched.fatherName && errors.fatherName
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                as={TextField}
                name="MotherName"
                label="Name of Mother"
                type="text"
                fullWidth
                error={errors.motherName && touched.motherName}
                helperText={
                  errors.motherName && touched.motherName && errors.motherName
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                as={TextField}
                name="HouseName"
                label="House Name"
                type="text"
                fullWidth
                error={errors.houseName && touched.houseName}
                helperText={
                  errors.houseName && touched.houseName && errors.houseName
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                as={TextField}
                name="PostOffice"
                label="Post Office"
                type="text"
                fullWidth
                error={errors.postOffice && touched.postOffice}
                helperText={
                  errors.postOffice && touched.postOffice && errors.postOffice
                }
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <SelectInput
                name="Panchayath"
                label="Panchayath"
                options={panchayatOptions}
                error={errors.panchayath && touched.panchayath}

              />
            </Grid>
            <Grid item xs={6}>
              <FormField
                as={TextField}
                name="Ward"
                label="Ward"
                type="number"
                fullWidth
                error={errors.ward && touched.ward}
                helperText={errors.ward && touched.ward && errors.ward}

              />
            </Grid>
          </Grid>
          <Divider className="py-4" />
          <SubjectsGradeInput subjects={subjects} label="Grades" name="subjectsMarks" />
          <CourseInput />
          <SubmitButton variant="contained" type="submit">
            Submit
          </SubmitButton>
          <PDFDownloadLink document={<MyDocument formValues={formValues} />} fileName='form_data.pdf'>
            {({ blob, url, loading, error }) => {
              if (loading) {
                return 'Loading document...';
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
