import * as yup from "yup";
import axios from "axios";


export const initialValues = {
  Name: "",
  MobileNumber: "",
  WhatsappNumber: "",
  SingleWindowNo: "",
  ExamName: "",
  RegNumber: "",
  Year: "",
  SchoolName: "",
  Gender: "",
  Religion: "",
  DateOfBirth: "",
  MotherName: "",
  FatherName: "",
  HouseName: "",
  PostOffice: "",
  Panchayath: "",
  Ward: "",
  subjectsMarks: [
    { subject: 'Lang1', grade: '' },
    { subject: 'Lang2', grade: '' },
    { subject: 'Eng', grade: '' },
    { subject: 'Hindi', grade: '' },
    { subject: 'SS', grade: '' },
    { subject: 'Phy', grade: '' },
    { subject: 'Chem', grade: '' },
    { subject: 'Bio', grade: '' },
    { subject: 'Maths', grade: '' },
    { subject: 'IT', grade: '' },
  ],
  coursePreference1: "",
  coursePreference2: "",
};

export const validationSchema = yup.object().shape({
  Name: yup.string().required("Name of Applicant is required"),
  MobileNumber: yup
    .string()
    .matches(/^\d+$/, "Mobile number must be a valid number")
    .min(10, "Mobile number must be at least 10 digits")
    .required("Mobile number is required"),
  WhatsappNumber: yup
    .string()
    .matches(/^\d+$/, "Whatsapp number must be a valid number")
    .min(10, "Whatsapp number must be at least 10 digits")
    .required("Whatsapp number is required"),
  SingleWindowNo: yup
    .string()
    .matches(/^\d+$/, "Single Window number must be a valid number")
    .required("Single Window number is required"),
  ExamName: yup.string().required("Name of qualifying examination is required"),
  RegNumber: yup
    .string()
    .matches(/^\d+$/, "Single Window number must be a valid number")
    .required("Register Number is required"),
  Year: yup.string().required("Year is required"),
  SchoolName: yup.string().required("Name of school is required"),
  Gender: yup.string().required("Gender is required"),
  Religion: yup.string().required("Religion is required"),
  DateOfBirth: yup.string().required("Date of Birth is required"),
  MotherName: yup.string().required("Name of Mother is required"),
  FatherName: yup.string().required("Name of Father is required"),
  HouseName: yup.string().required("House Name is required"),
  PostOffice: yup.string().required("Post Office is required"),
  Panchayath: yup.string().required("Panchayath is required"),
  Ward: yup.string().required("Ward is required"),
  subjectsMarks: yup.array().of(
    yup.object().shape({
      subject: yup.string().required('Required'),
      grade: yup.string().required('Required'),
    })
  ),
  coursePreference1: yup.string().required('Course preference 1 is required'),
});

export const years = [];
for (let i = new Date().getFullYear(); i > 1900; i--) {
  years.push({ value: i, label: i });
}

export const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

export const religionOptions = [
  { value: 'islam', label: 'Islam' },
  { value: 'hinduism', label: 'Hinduism' },
  { value: 'christianity ', label: 'Christianity' },
  { value: 'sikhism', label: 'Sikhism' },
  { value: 'buddhism', label: 'Buddhism' },
  { value: 'other', label: 'Other' },
];

export const panchayatOptions = [
  { value: 'nilambur', label: 'Nilambur' },
  { value: 'wandoor', label: 'Wandoor' },
  { value: 'kondotty', label: 'Kondotty' },
  { value: 'areekode', label: 'Areekode' },
  { value: 'malappuram', label: 'Malappuram' },
  { value: 'mankada', label: 'Mankada' },
  { value: 'kuttippuram', label: 'Kuttippuram' },
  { value: 'vengara', label: 'Vengara' },
  { value: 'tirurangadi', label: 'Tirurangadi' },
  { value: 'tanur', label: 'Tanur' },
  { value: 'tirur', label: 'Tirur' },
  { value: 'ponnani', label: 'Ponnani' },
  { value: 'permpadappa', label: 'Permpadappa' },
  { value: 'kalikavu', label: 'Kalikavu' },
]

export const subjects = [
  'Lang1', 'Lang2', 'Eng', 'Hindi', 'SS', 'Phy', 'Chem', 'Bio', 'Maths', 'IT'
]

export const gradesOptions = [
  { value: '9', label: 'A+' },
  { value: '8', label: 'A' },
  { value: '7', label: 'B+' },
  { value: '6', label: 'B' },
  { value: '5', label: 'C+' },
  { value: '4', label: 'C' },
  { value: '3', label: 'D+' },
  { value: '2', label: 'D' },
  { value: '1', label: 'E' },
];

export const courseOptions = [
  { value: '01', label: '01 - Physics, Chemistry, Biology,Mathematics' },
  { value: '11', label: '11 - History, Economics, Political Science, Sociology' },
  { value: '35', label: '35 - Journalism, English Literature, Communicative English, Psychology' },
  { value: '37', label: '37 - Business Studies, Accountancy, Economics,Statistics' }
]

export const codeToCourse = {
  '01': '01 - Physics, Chemistry, Biology,Mathematics',
  '11': '11 - History, Economics, Political Science, Sociology',
  '35': '35 - Journalism, English Literature, Communicative English, Psychology',
  '37': '37 - Business Studies, Accountancy, Economics,Statistics'
}

export const markToGrade = {
  '9':'A+',
  '8':'A',
  '7':'B+',
  '6':'B',
  '5':'C+',
  '4':'C',
  '3':'D+',
}



export const handleSubmit = async (values) => {
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
      Lang1: values.subjectsMarks[0].grade,
      Lang2: values.subjectsMarks[1].grade,
      Eng: values.subjectsMarks[2].grade,
      Hindi: values.subjectsMarks[3].grade,
      SS: values.subjectsMarks[4].grade,
      Phy: values.subjectsMarks[5].grade,
      Chem: values.subjectsMarks[6].grade,
      Bio: values.subjectsMarks[7].grade,
      Maths: values.subjectsMarks[8].grade,
      IT: values.subjectsMarks[9].grade,
      coursePreference1: values.coursePreference1,
      coursePreference2: values.coursePreference2,
    };
    //Google sheet heading format
    axios.post("https://sheet.best/api/sheets/2112eec1-f365-43b1-b918-287af866f358", formattedValues).then(response => {
      console.log("response", response);
    })
  } catch (error) {
    console.log(error);
  }
}