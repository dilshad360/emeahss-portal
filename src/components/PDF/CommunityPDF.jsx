import React from 'react'
import { Page, Text, Document, StyleSheet, View, Image } from "@react-pdf/renderer";
import logo from "../../assets/emea_logo.jpeg";

import { markToGrade, cbseMarkToGrade } from "../../Const";

const watermarkLogo = (
    <Image src={logo} style={{ width: '300px', height: '400px' }} />
  );

const CommunityPDF = (props) => {
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
            fontFamily: "Helvetica-Bold",
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
            fontFamily: "Helvetica-Bold"
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
            fontFamily: "Helvetica-Bold"
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

        tableCellh: {
            flex: 2,
            fontSize: "11px",
            textAlign: "left",
            paddingLeft: "5px",
            borderBottom: "1px solid #CCCCCC",
            backgroundColor:'#EEEEEE',
            fontFamily: "Helvetica-Bold"
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
            fontFamily: "Helvetica-Bold"
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
        watermark: {
            position: 'absolute',
            opacity: 0.1,
            width: '50%',
            height: '50%',
            top: '23%',
            left: '25%',
            },
    });
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                <View style={styles.watermark}>
        {watermarkLogo}
        </View>
                    <Text style={styles.header}>
                        EMEA HSS KONDOTTY THURAKKAL PO {"\n"}APPLICATION FOR PLUS ONE
                        ADMISSION 2023-24 {"\n"}(Community Quota)
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
                            <Text style={{marginBottom:'5px'}}>Application Number</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>:{' '}{' '}{' '}{' '} {formValues.AppNo}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Name</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>: {' '}{' '}{' '}{' '} {formValues.Name}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Mobile Number</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>:{' '}{' '}{' '}{' '}  {formValues.MobileNumber}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Whatsapp No</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>: {' '}{' '}{' '}{' '} {formValues.WhatsappNumber}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Single Window Appln No</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>:{' '}{' '}{' '}{' '}  {formValues.SingleWindowNo}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Date of Birth</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>:{' '}{' '}{' '}{' '}  {formValues.DateOfBirth}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Gender</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>: {' '}{' '}{' '}{' '} {formValues.Gender}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Religion</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>:{' '}{' '}{' '}{' '}  {formValues.Religion}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Board of Examination</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>:{' '}{' '}{' '}{' '}  {formValues.Board}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Register Number</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>: {' '}{' '}{' '}{' '} {formValues.RegNumber}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Year</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>:{' '}{' '}{' '}{' '}  {formValues.Year}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>School Name</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>:{' '}{' '}{' '}{' '}  {formValues.SchoolName}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Father Name</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>: {' '}{' '}{' '}{' '} {formValues.FatherName}</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.values}>
                            <Text style={{marginBottom:'5px'}}>Mother Name</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:'5px'}}>: {' '}{' '}{' '}{' '} {formValues.MotherName}</Text>
                        </View>
                    </View>

                    <View style={styles.valuer}>
                        <View style={styles.fieldg}>
                            <View style={{ width: "54%" , fontFamily: "Helvetica-Bold" }}>
                                <Text style={{marginBottom:'5px'}}>House Name</Text>
                            </View>
                            <View>
                                <Text style={{marginBottom:'5px'}}>: {' '}{' '}{' '}{' '} {formValues.HouseName}</Text>
                            </View>
                        </View>
                        <View style={styles.fieldg}>
                            <View style={{ width: "54%" , fontFamily: "Helvetica-Bold" }}>
                                <Text style={{marginBottom:'5px'}}>Post Office</Text>
                            </View>
                            <View>
                                <Text style={{marginBottom:'5px'}}>: {' '}{' '}{' '}{' '} {formValues.PostOffice}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.valuer}>
                        <View style={styles.fieldg}>
                            <View style={{ width: "54%" ,fontFamily: "Helvetica-Bold" }}>
                                <Text style={{marginBottom:'5px'}}>Panchayath</Text>
                            </View>
                            <View>
                                <Text style={{marginBottom:'5px'}}>: {' '}{' '}{' '}{' '} {formValues.Panchayath}</Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: "black",
                            borderBottomWidth: 1,
                            marginTop: "20px",
                        }}
                    />
                    <View style={{marginBottom:'20px'}} />
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
                    <View style={{marginTop:'20px',marginBottom:'50px'}}>
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
                    </View>
              
                    {/***********************        Next Page        **************************/}
                    <View style={{paddingLeft:'20px',marginTop:'30px'}}>
                        <Text style={{ fontSize: "11px", marginTop: '10px', marginBottom: "5px",fontFamily: "Helvetica-Bold" }}>19. Whether the applicant is eligible for bonus points under the following category :{' '}</Text>
                        <Text style={{fontSize:'11px',marginBottom:'10px'}}>{formValues.ExtraCurricular}</Text>
                    </View>
                    <View style={{paddingLeft:'20px'}}>
                        <Text style={{ fontSize: "11px", marginBottom: "5px",fontWeight:'900',fontFamily: "Helvetica-Bold" }}>20. Participation in Sports</Text>
                        <View><Text style={{fontSize:'10px',marginBottom:'5px',paddingLeft:'5px'}}>State Level Participation(Write the number of items participated) :{' '}{formValues.StateLevelParticipation}</Text></View>
                    </View>
                    <View><Text  style={{fontSize:'10px', paddingLeft:'25px',marginBottom:'10px'}}>District Level(Write the number of grades won in the relevant boxes)</Text></View>


                    {/***************   District Level Sports              ********************/}
                    <View style={{ display: "flex", flexDirection: "row" , paddingLeft:'20px' }}>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCellh}>A Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.SportsDistrictA}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCellh}>B Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.SportsDistrictB}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCellh}>C Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.SportsDistrictC}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCellh}>Participation</Text>
                            <Text style={styles.tableCell}>
                                {formValues.SportsDistrictParticipation}
                            </Text>
                        </View>
                    </View>


                    {/**********************************     Arts section           *****************************/}
                    <View style={{paddingLeft:'20px'}}>
                        <Text style={{ fontSize: "11px", marginBottom: "5px",marginTop:'20px',fontFamily: "Helvetica-Bold" }}>21. Participation in Kerala School Kalotsavam</Text>
                        <View><Text style={{fontSize:'10px',marginBottom:'5px',paddingLeft:'5px'}}>State Level Participation(Write the number of items participated) :{' '}{formValues.KalotsavamStateLevel}</Text></View>
                    </View>
                    <View><Text style={{fontSize:'10px', paddingLeft:'25px',marginBottom:'10px'}}>District Level(Write the number of grades won in the relevant boxes)</Text></View>
                    {/***************   District Level Sports              ********************/}
                    <View style={{ display: "flex", flexDirection: "row" , paddingLeft:'20px' }}>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCellh}>A Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.ArtsDistrictA}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCellh}>B Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.ArtsDistrictB}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCellh}>C Grade</Text>
                            <Text style={styles.tableCell}>
                                {formValues.ArtsDistrictC}
                            </Text>
                        </View>
                        <View style={styles.tableColumn}>
                            <Text style={styles.tableCellh}>Participation</Text>
                            <Text style={styles.tableCell}>
                                {formValues.ArtsDistrictParticipation}
                            </Text>
                        </View>
                    </View>


                    {/***************************   NationalOrStateLevelExamination   ***************************/}
                    <Text style={{ fontSize: "11px", marginBottom: "10px" , paddingLeft:'20px',marginTop:'20px' }}>22. Whether qualified in the National/State Level Test for the National Talent Search Examination :{' '}{formValues.NationalOrStateLevelExamination}</Text>


                    {/*************************    Co-curricular activities          ******************** */}
                    <Text style={{ fontSize: "11px", marginBottom: "10px" , paddingLeft:'20px' }}>(a) Details of participation in co-curricular activites. Write the number of grades won in the relevant boxes.</Text>
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
                    
            
                
                    <Text style={{ fontSize: "11px", marginBottom: "10px" ,marginTop:'10px', paddingLeft:'20px',width:'20%' }}>(b) Relevant</Text>
                    <Text style={{ fontSize: "11px", marginBottom: "10px", paddingLeft:'20px' }}>{formValues.Club}</Text>
                    
                
                    <Text style={{ fontSize: '15px', marginBottom: '10px', paddingLeft:'20px' }}>Declaration</Text>
                    <Text style={{ fontSize: '11px' , paddingLeft:'20px'}}>We do hereby declare that the information furnished above is true and correct to the best of my knowledge
                        and belief. We know that faulty information may lead to the cancellation of the canidate.</Text>

                          <View style={styles.valuer}>
                        <Text style={{ width: "50%", fontSize: "11px", marginTop: "30px" , paddingLeft:'20px' }}>
                            Signature of the Parent :
                        </Text>
                        <Text style={{ fontSize: "11px", marginTop: "30px" }}>
                            Signature of the Applicant :
                        </Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: "black",
                            borderBottomWidth: 1,
                            marginBottom: "20px",
                            marginTop: "20px",
                        }}
                    />
                    <View>
                        <Text style={{ fontSize: "11px", marginBottom: "20px" , paddingLeft:'20px'}}>
                            Name and Signature of the Management Committe Member
                        </Text>
                        <View style={styles.valuer}>
                            <Text style={{ width: "50%", fontSize: "11px" , paddingLeft:'20px' }}>Name :</Text>
                            <Text style={{ fontSize: "11px" }}>Signature :</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
}

export default CommunityPDF