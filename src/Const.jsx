import * as yup from "yup";

export const initialValues  = {
  name: "",
  mobileNumber: "",
  whatsappNumber: "",
  singleWindowNo: "",
  examName: "",
  regNumber: "",
  year: "",
  schoolName: "",
  gender: "",
  religion: "",
  dateOfBirth: "",
  motherName: "",
  fatherName: "",
  houseName: "",
  postOffice: "",
  panchayath: "",
  ward: "",
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
  name: yup.string().required("Name of Applicant is required"),
  mobileNumber: yup
    .string()
    .matches(/^\d+$/, "Mobile number must be a valid number")
    .min(10, "Mobile number must be at least 10 digits")
    .required("Mobile number is required"),
  whatsappNumber: yup
    .string()
    .matches(/^\d+$/, "Whatsapp number must be a valid number")
    .min(10, "Whatsapp number must be at least 10 digits")
    .required("Whatsapp number is required"),
  singleWindowNo: yup
    .string()
    .matches(/^\d+$/, "Single Window number must be a valid number")
    .required("Single Window number is required"),
  examName: yup.string().required("Name of qualifying examination is required"),
  regNumber: yup
    .string()
    .matches(/^\d+$/, "Single Window number must be a valid number")
    .required("Single Window number is required"),
  year: yup.string().required("Year is required"),
  schoolName: yup.string().required("Name of school is required"),
  gender: yup.string().required("Gender is required"),
  religion: yup.string().required("Religion is required"),
  dateOfBirth: yup.string().required("Date of Birth is required"),
  motherName: yup.string().required("Name of Mother is required"),
  fatherName: yup.string().required("Name of Father is required"),
  houseName: yup.string().required("House Name is required"),
  postOffice: yup.string().required("Post Office is required"),
  panchayath: yup.string().required("Panchayath is required"),
  ward: yup.string().required("Ward is required"),
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
   years.push({value:i, label:i});
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
  'Lang1','Lang2','Eng','Hindi','SS','Phy','Chem','Bio','Maths','IT'
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


