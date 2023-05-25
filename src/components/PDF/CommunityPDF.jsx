import React from 'react'
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

import { markToGrade, cbseMarkToGrade } from "../../Const";

const CommunityPDF = (props) => {
    console.log("From community PDF.");
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
                    {/***********************        Next Page        **************************/}
                    <View>
                        <Text style={{ fontSize: "11px", marginTop: '50px', marginBottom: "10px" }}>19. Whether the applicant is eligible for bonus points under the following category:</Text>
                        <View>{formValues.ExtraCurricular}</View>
                    </View>
                    <View>
                        <Text style={{ fontSize: "11px", marginBottom: "10px" }}>20. Participation in Sports</Text>
                        <View>State Level Participation(Write the number of items participated):{formValues.StateLevelParticipation}</View>
                    </View>
                    <View>District Level(Write the number of grades won in the relevant boxes)</View>


                    {/***************   District Level Sports              ********************/}
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>A Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.SportsDistrictA}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>B Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.SportsDistrictB}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>C Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.SportsDistrictC}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>Participation</Text>
                            <Text style={styles.tableCell}>
                                {formValues.SportsDistrictParticipation}
                            </Text>
                        </View>
                    </View>


                    {/**********************************     Arts section           *****************************/}
                    <View>
                        <Text style={{ fontSize: "11px", marginBottom: "10px" }}>21. Participation in Kerala School Kalotsavam</Text>
                        <View>State Level Participation(Write the number of items participated):{formValues.KalotsavamStateLevel}</View>
                    </View>
                    <View>District Level(Write the number of grades won in the relevant boxes)</View>
                    {/***************   District Level Sports              ********************/}
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>A Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.ArtsDistrictA}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>B Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.ArtsDistrictB}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>C Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.ArtsDistrictC}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>Participation</Text>
                            <Text style={styles.tableCell}>
                                {formValues.ArtsDistrictParticipation}
                            </Text>
                        </View>
                    </View>


                    {/***************************   NationalOrStateLevelExamination   ***************************/}
                    <Text style={{ fontSize: "11px", marginBottom: "10px" }}>22. Whether qualified in the National/State Level Test for the National Talent Search Examination:{formValues.NationalOrStateLevelExamination}</Text>


                    {/*************************    Co-curricular activities          ******************** */}
                    <Text style={{ fontSize: "11px", marginBottom: "10px" }}>(a) Details of participation in co-curricular activites. Write the number of grades won in the relevant boxes.</Text>
                    <View style={styles.tableContainer}>
                        {/* Table header */}
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableCell}></Text>
                            <Text style={styles.tableCell}>State Science Fair</Text>
                            <Text style={styles.tableCell}>State Social Science Fair</Text>
                            <Text style={styles.tableCell}>State Maths Fair</Text>
                            <Text style={styles.tableCell}>State IT Fest</Text>
                            <Text style={styles.tableCell}>State Work Experience Fair</Text>
                        </View>
                        {/* Column 1 */}
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>A Grade</Text>
                            <Text style={styles.tableCell}>{formValues.StateScienceFairA}</Text>
                            <Text style={styles.tableCell}>{formValues.StateSocialFairA}</Text>
                            <Text style={styles.tableCell}>{formValues.StateMathsFairA}</Text>
                            <Text style={styles.tableCell}>{formValues.StateITFestA}</Text>
                            <Text style={styles.tableCell}>{formValues.StateWorkExperienceFairA}</Text>
                        </View>
                        {/* Column 2 */}
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>B Grade</Text>
                            <Text style={styles.tableCell}>{formValues.StateScienceFairB}</Text>
                            <Text style={styles.tableCell}>{formValues.StateSocialFairB}</Text>
                            <Text style={styles.tableCell}>{formValues.StateMathsFairB}</Text>
                            <Text style={styles.tableCell}>{formValues.StateITFestB}</Text>
                            <Text style={styles.tableCell}>{formValues.StateWorkExperienceFairB}</Text>
                        </View>
                        {/* Column 3 */}
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>C Grade</Text>
                            <Text style={styles.tableCell}>{formValues.StateScienceFairC}</Text>
                            <Text style={styles.tableCell}>{formValues.StateSocialFairC}</Text>
                            <Text style={styles.tableCell}>{formValues.StateMathsFairC}</Text>
                            <Text style={styles.tableCell}>{formValues.StateITFestC}</Text>
                            <Text style={styles.tableCell}>{formValues.StateWorkExperienceFairC}</Text>

                        </View>
                        {/* Column 4 */}
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>D Grade</Text>
                            <Text style={styles.tableCell}>{formValues.StateScienceFairD}</Text>
                            <Text style={styles.tableCell}>{formValues.StateSocialFairD}</Text>
                            <Text style={styles.tableCell}>{formValues.StateMathsFairD}</Text>
                            <Text style={styles.tableCell}>{formValues.StateITFestD}</Text>
                            <Text style={styles.tableCell}>{formValues.StateWorkExperienceFairD}</Text>

                        </View>
                        {/* Column 5 */}
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCell}>E Grade</Text>
                            <Text style={styles.tableCell}>{formValues.StateScienceFairE}</Text>
                            <Text style={styles.tableCell}>{formValues.StateSocialFairE}</Text>
                            <Text style={styles.tableCell}>{formValues.StateMathsFairE}</Text>
                            <Text style={styles.tableCell}>{formValues.StateITFestE}</Text>
                            <Text style={styles.tableCell}>{formValues.StateWorkExperienceFairE}</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: "11px", marginBottom: "10px" }}>(b) Relevant</Text>
                    <Text style={{ fontSize: "11px", marginBottom: "10px" }}>{formValues.Club}</Text>
                    <Text style={{ fontSize: '15px', marginBottom: '10px' }}>Declaration</Text>
                    <Text style={{ fontSize: '11px' }}>We do hereby declare that the information furnished above is true and correct to the best of my knowledge
                        and belief. We know that faulty information may lead to the cancellation of the canidate.</Text>

                </View>
            </Page>
        </Document>
    );
}

export default CommunityPDF
