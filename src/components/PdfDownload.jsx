import React from 'react'
import {
    Page,
    Text,
    Document,
    StyleSheet,
    View,
} from "@react-pdf/renderer";

import { markToGrade, codeToCourse, cbseMarkToGrade } from '../Const';

const PdfDownload = (props) => {
    console.log("Download PDF");
    const formValues = props.formValues
    const syllabus = formValues.Board
    console.log("Syllabus",syllabus);
    console.log(formValues.coursePreference1);
    console.log(codeToCourse[formValues.coursePreference1]);
    console.log("formValues",cbseMarkToGrade[formValues.Science]);
    const styles = StyleSheet.create({
        page: {
            display: 'flex',
            backgroundColor: '#e4e4e4',
            padding: '20px',
            alignItems: 'center',
            justifyContent: 'center',
        },
        section: {
            margin: '10px',
            padding: '10px',
            flexGrow: 1,
            backgroundColor: '#ffffff',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            width: '100%',
        },

        header: {
            fontSize: '15px',
            marginBottom: '25px',
            color: '#000000',
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: '#d4d6d5',
            height: '64px',
            padding: '5px',
        },


        field: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '10px',
            fontSize: '12px',
            textAlign: 'left',
            marginLeft: '20px',
            borderBottom: '0.5px solid #d4d6d5 '
        },

        values: {
            width: '26%',
        },

        tableContainer: {
            marginBottom: '30px',
            marginLeft: '20px',
            marginRight: '20px',
        },


        tableHeader: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#EEEEEE',
            padding: '5px 0',
            borderBottom: '1px solid #CCCCCC',
        },

        tableRow: {
            display: "flex",
            flexDirection: "row",
            padding: "5px 0",
            borderBottom: "1px solid #CCCCCC",
        },


        tableCell: {
            flex: 2,
            fontSize: '12px',
            textAlign: 'left',
            paddingLeft: '5px',
        },
    });
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>EMEA HSS KONDOTTY THURAKKAL PO {'\n'}APPLICATION FOR PLUS ONE ADMISSION 2023-24 {'\n'}(Management Quota)</Text>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Application Number</Text></View>
                        <View><Text>:{formValues.AppNo}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Name</Text></View>
                        <View><Text>:{formValues.Name}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Mobile Number</Text></View>
                        <View><Text>: {formValues.MobileNumber}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Whatsapp No</Text></View>
                        <View><Text>:{formValues.WhatsappNumber}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Single Window Appln No</Text></View>
                        <View><Text>:{formValues.SingleWindowNo}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Date of Birth</Text></View>
                        <View><Text>: {formValues.DateOfBirth}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Gender</Text></View>
                        <View><Text>:{formValues.Gender}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Religion</Text></View>
                        <View><Text>:{formValues.Religion}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Board of Examination</Text></View>
                        <View><Text>: {formValues.Board}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Register Number</Text></View>
                        <View><Text>: {formValues.RegNumber}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Year</Text></View>
                        <View><Text>: {formValues.Year}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>School Name</Text></View>
                        <View><Text>: {formValues.SchoolName}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Father Name</Text></View>
                        <View><Text>: {formValues.FatherName}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Mother Name</Text></View>
                        <View><Text>: {formValues.MotherName}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>House Name</Text></View>
                        <View><Text>: {formValues.HouseName}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Post Office</Text></View>
                        <View><Text>: {formValues.PostOffice}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Panchayath</Text></View>
                        <View><Text>: {formValues.Panchayath}</Text></View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.values}><Text>Ward</Text></View>
                        <View><Text>: {formValues.Ward}</Text></View>
                    </View>
                    <View style={styles.tableContainer}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableCell}>Subject</Text>
                            <Text style={styles.tableCell}>Grade</Text>
                        </View>

                        {syllabus === 'CBSE' ?
                            (<View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Language</Text>
                                    <Text style={styles.tableCell}>{cbseMarkToGrade[formValues.Language2]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>English</Text>
                                    <Text style={styles.tableCell}>{cbseMarkToGrade[formValues.English]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Maths</Text>
                                    <Text style={styles.tableCell}>{cbseMarkToGrade[formValues.Maths]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Social Science</Text>
                                    <Text style={styles.tableCell}>{cbseMarkToGrade[formValues.SocialScience]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Science</Text>
                                    <Text style={styles.tableCell}>{cbseMarkToGrade[formValues.Science]}</Text>
                                </View>
                            </View>) 
                            : 
                            (<View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Language1</Text>
                                    <Text style={styles.tableCell}>{markToGrade[formValues.Language1]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Language2</Text>
                                    <Text style={styles.tableCell}>{markToGrade[formValues.Language2]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>English</Text>
                                    <Text style={styles.tableCell}>{markToGrade[formValues.English]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Hindi</Text>
                                    <Text style={styles.tableCell}>{markToGrade[formValues.Hindi]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Social Science</Text>
                                    <Text style={styles.tableCell}>{markToGrade[formValues.SocialScience]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Physics</Text>
                                    <Text style={styles.tableCell}>{markToGrade[formValues.Physics]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Biology</Text>
                                    <Text style={styles.tableCell}>{markToGrade[formValues.Biology]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Chemistry</Text>
                                    <Text style={styles.tableCell}>{markToGrade[formValues.Chemistry]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Maths</Text>
                                    <Text style={styles.tableCell}>{markToGrade[formValues.Maths]}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Infromation Technology</Text>
                                    <Text style={styles.tableCell}>{markToGrade[formValues.IT]}</Text>
                                </View>
                            </View>)
                        }
                    </View>
                    <View style={styles.tableContainer}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableCell}>Preference</Text>
                            <Text style={styles.tableCell}>Course</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>1</Text>
                            <Text style={styles.tableCell}>{formValues.coursePreference1}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>2</Text>
                            <Text style={styles.tableCell}>{formValues.coursePreference2}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>3</Text>
                            <Text style={styles.tableCell}>{formValues.coursePreference3}</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
}

export default PdfDownload
