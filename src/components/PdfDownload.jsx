import React from "react";
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

import { markToGrade, cbseMarkToGrade } from "../Const";

const PdfDownload = (props) => {
  const formValues = props.formValues;
  const syllabus = formValues.Board;
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      backgroundColor: "#e4e4e4",

      alignItems: "center",
      justifyContent: "center",
    },
    section: {
      paddingBottom: "5px",
      padding: "10px",
      flexGrow: 1,
      backgroundColor: "#ffffff",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      width: "100%",
    },

    header: {
      fontSize: "15px",
      marginBottom: "5px",
      color: "#000000",
      textAlign: "center",
      fontWeight: "bold",

      height: "64px",
      padding: "5px",
    },

    field: {
      display: "flex",
      flexDirection: "row",
      marginBottom: "10px",
      fontSize: "11px",
      textAlign: "left",
      marginLeft: "20px",
      borderBottom: "0.5px solid #d4d6d5 ",
    },

    fieldg: {
      display: "flex",
      flexDirection: "row",
      marginBottom: "10px",
      fontSize: "11px",
      textAlign: "left",
      marginLeft: "20px",
      borderBottom: "0.5px solid #d4d6d5 ",
      width: "50%",
    },

    values: {
      width: "26%",
    },

    valuer: {
      display: "flex",
      flexDirection: "row",
    },

    tableContainer: {
      marginBottom: "10px",
      marginTop: "15px",
      marginLeft: "20px",
      marginRight: "20px",
      display: "flex",
      flexDirection: "row",
    },

    tableHeader: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#EEEEEE",
      padding: "5px 0",
      borderBottom: "1px solid #CCCCCC",
      borderLeft: "1px solid #CCCCCC",
      width: "85px",
      height: "90px",
    },

    tableColumn: {
      display: "flex",
      flexDirection: "column",
      padding: "5px 0",

      borderRight: "1px solid #CCCCCC",
      width: "90px",
      height: "90px",
    },

    tableCell: {
      flex: 2,
      fontSize: "11px",
      textAlign: "left",
      paddingLeft: "5px",
      borderBottom: "1px solid #CCCCCC",
    },

    tableContainerCourse: {
      marginTop: "5px",
      marginBottom: "15px",
      marginLeft: "20px",
      marginRight: "20px",
    },

    tableHeaderCourse: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#EEEEEE",
      padding: "5px 0",
      borderBottom: "1px solid #CCCCCC",
    },

    tableRow: {
      display: "flex",
      flexDirection: "row",
      padding: "5px 0",
      borderBottom: "1px solid #CCCCCC",
    },
    tableCellCourse1: {
      width: "15%",
      fontSize: "11px",
      textAlign: "left",
      paddingLeft: "5px",
    },

    tableCellCourse: {
      fontSize: "11px",
      textAlign: "left",
      paddingLeft: "5px",
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>
            EMEA HSS KONDOTTY THURAKKAL PO {"\n"}APPLICATION FOR PLUS ONE
            ADMISSION 2023-24 {"\n"}(Management Quota)
          </Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginBottom: "10px",
            }}
          />
          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Application Number</Text>
            </View>
            <View>
              <Text>: {formValues.AppNo}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Name</Text>
            </View>
            <View>
              <Text>: {formValues.Name}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Mobile Number</Text>
            </View>
            <View>
              <Text>: {formValues.MobileNumber}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Whatsapp No</Text>
            </View>
            <View>
              <Text>: {formValues.WhatsappNumber}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Single Window Appln No</Text>
            </View>
            <View>
              <Text>: {formValues.SingleWindowNo}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Date of Birth</Text>
            </View>
            <View>
              <Text>: {formValues.DateOfBirth}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Gender</Text>
            </View>
            <View>
              <Text>: {formValues.Gender}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Religion</Text>
            </View>
            <View>
              <Text>: {formValues.Religion}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Board of Examination</Text>
            </View>
            <View>
              <Text>: {formValues.Board}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Register Number</Text>
            </View>
            <View>
              <Text>: {formValues.RegNumber}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Year</Text>
            </View>
            <View>
              <Text>: {formValues.Year}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>School Name</Text>
            </View>
            <View>
              <Text>: {formValues.SchoolName}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Father Name</Text>
            </View>
            <View>
              <Text>: {formValues.FatherName}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.values}>
              <Text>Mother Name</Text>
            </View>
            <View>
              <Text>: {formValues.MotherName}</Text>
            </View>
          </View>

          <View style={styles.valuer}>
            <View style={styles.fieldg}>
              <View style={{ width: "54%" }}>
                <Text>House Name</Text>
              </View>
              <View>
                <Text>: {formValues.HouseName}</Text>
              </View>
            </View>
            <View style={styles.fieldg}>
              <View style={{ width: "54%" }}>
                <Text>Post Office</Text>
              </View>
              <View>
                <Text>: {formValues.PostOffice}</Text>
              </View>
            </View>
          </View>

          <View style={styles.valuer}>
            <View style={styles.fieldg}>
              <View style={{ width: "54%" }}>
                <Text>Panchayath</Text>
              </View>
              <View>
                <Text>: {formValues.Panchayath}</Text>
              </View>
            </View>
            <View style={styles.fieldg}>
              <View style={{ width: "54%" }}>
                <Text>Ward</Text>
              </View>
              <View>
                <Text>: {formValues.Ward}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginTop: "5px",
            }}
          />

          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableCell}>Subject</Text>
              <Text style={styles.tableCell}>Grade</Text>
            </View>

            {syllabus === "CBSE" ? (
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>Language</Text>
                  <Text style={styles.tableCell}>
                    {cbseMarkToGrade[formValues.Language2]}
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>English</Text>
                  <Text style={styles.tableCell}>
                    {cbseMarkToGrade[formValues.English]}
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>Maths</Text>
                  <Text style={styles.tableCell}>
                    {cbseMarkToGrade[formValues.Maths]}
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>SS</Text>
                  <Text style={styles.tableCell}>
                    {cbseMarkToGrade[formValues.SocialScience]}
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>Science</Text>
                  <Text style={styles.tableCell}>
                    {cbseMarkToGrade[formValues.Science]}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>Lang1</Text>
                  <Text style={styles.tableCell}>
                    {markToGrade[formValues.Language1]}{" "}
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>Lang2</Text>
                  <Text style={styles.tableCell}>
                    {markToGrade[formValues.Language2]}
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>English</Text>
                  <Text style={styles.tableCell}>
                    {markToGrade[formValues.English]}
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>Hindi</Text>
                  <Text style={styles.tableCell}>
                    {markToGrade[formValues.Hindi]}
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>SS</Text>
                  <Text style={styles.tableCell}>
                    {markToGrade[formValues.SocialScience]}
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>Physics</Text>
                  <Text style={styles.tableCell}>
                    {markToGrade[formValues.Physics]}
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>Biology</Text>
                  <Text style={styles.tableCell}>
                    {markToGrade[formValues.Biology]}
                  </Text>
                </View>

                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>Chemistry</Text>
                  <Text style={styles.tableCell}>
                    {markToGrade[formValues.Chemistry]}
                  </Text>
                </View>

                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>Maths</Text>
                  <Text style={styles.tableCell}>
                    {markToGrade[formValues.Maths]}
                  </Text>
                </View>

                <View style={styles.tableColumn}>
                  <Text style={styles.tableCell}>IT</Text>
                  <Text style={styles.tableCell}>
                    {markToGrade[formValues.IT]}
                  </Text>
                </View>
              </View>
            )}
          </View>
          <View style={styles.tableContainerCourse}>
            <View style={styles.tableHeaderCourse}>
              <Text style={styles.tableCellCourse1}>Preference</Text>
              <Text style={styles.tableCellCourse}>Course</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellCourse1}>1</Text>
              <Text style={styles.tableCellCourse}>
                {formValues.coursePreference1}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellCourse1}>2</Text>
              <Text style={styles.tableCellCourse}>
                {formValues.coursePreference2}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellCourse1}>3</Text>
              <Text style={styles.tableCellCourse}>
                {formValues.coursePreference3}
              </Text>
            </View>
          </View>
          <View style={styles.valuer}>
            <Text style={{ width: "50%", fontSize: "11px", marginTop: "10px" }}>
              Signature of the Parent :
            </Text>
            <Text style={{ fontSize: "11px", marginTop: "10px" }}>
              Signature of the Applicant :
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginBottom: "10px",
              marginTop: "10px",
            }}
          />
          <View>
            <Text style={{ fontSize: "11px", marginBottom: "10px" }}>
              Name and Signature of the Management Committe Member
            </Text>
            <View style={styles.valuer}>
              <Text style={{ width: "50%", fontSize: "11px" }}>Name :</Text>
              <Text style={{ fontSize: "11px" }}>Signature :</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDownload;
