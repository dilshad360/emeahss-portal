import * as yup from "yup";
/*
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
};*/



/*
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
  Language1:"",
  Language2:"",
  Hindi:"",
  English:"",
  SocialScience:"",
  Science:"",
  Maths:"",
  Physics:"",
  Chemistry:"",
  Biology:"",
  IT:"",
  coursePreference1: "",
  coursePreference2: "",
};*/


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
  statesubjectsMarks: [
    { subject: 'Language1', grade: '' },
    { subject: 'Language2', grade: '' },
    { subject: 'English', grade: '' },
    { subject: 'Hindi', grade: '' },
    { subject: 'SocialScience', grade: '' },
    { subject: 'Physics', grade: '' },
    { subject: 'Chemistry', grade: '' },
    { subject: 'Biology', grade: '' },
    { subject: 'Maths', grade: '' },
    { subject: 'IT', grade: '' },
  ],
  cbseMarks: [
    { subject: 'Language2', grade: '' },
    { subject: 'English', grade: '' },
    { subject: 'Science', grade: '' },
    { subject: 'SocialScience', grade: '' },
    { subject: 'Maths', grade: '' },
  ],
  coursePreference1: "",
  coursePreference2: "",
};

//Validation
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
/*
  Language1:yup.string().required("this is required"),
  Language2:yup.string().required("this is required"),
  English:yup.string().required("this is required"),
  Hindi:yup.string().required("this is required"),
  SocialScience:yup.string().required("this is required"),
  Physics:yup.string().required("this is required"),
  Chemistry:yup.string().required("this is required"),
  Biology:yup.string().required("this is required"),
  Maths:yup.string().required("this is required"),
  IT:yup.string().required("this is required"),
  Science:yup.string().required("this is required"),
*/
  /*
  subjectsMarks: yup.array().of(
    yup.object().shape({
      subject: yup.string().required('Required'),
      grade: yup.string().required('Required'),
    })
  )*/
  coursePreference1: yup.string().required('Course preference 1 is required'),
});

//date
export const years = [];
for (let i = new Date().getFullYear(); i > 1900; i--) {
  years.push({ value: i, label: i });
}

//gender
export const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

//religion
export const religionOptions = [
  { value: 'islam', label: 'Islam' },
  { value: 'hinduism', label: 'Hinduism' },
  { value: 'christianity ', label: 'Christianity' },
  { value: 'sikhism', label: 'Sikhism' },
  { value: 'buddhism', label: 'Buddhism' },
  { value: 'other', label: 'Other' },
];

//panchayat
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

export const cbseSubjects = [
  'Language2','English','SocialScience','Maths','Science'
]


export const subjects = [
  'Language1', 'Language2', 'English', 'Hindi', 'SocialScience', 'Physics', 'Chemistry', 'Biology', 'Maths', 'IT'
]

//grade
export const gradesOptions = [
  { value: '9', label: 'A+' },
  { value: '8', label: 'A' },
  { value: '7', label: 'B+' },
  { value: '6', label: 'B' },
  { value: '5', label: 'C+' },
  { value: '4', label: 'C' },
  { value: '3', label: 'D+' },
];


export const courseOptions = [
  { value: '01', label: '01 - Physics, Chemistry, Biology,Mathematics' },
  { value: '11', label: '11 - History, Economics, Political Science, Sociology' },
  { value: '35', label: '35 - Journalism, English Literature, Communicative English, Psychology' },
  { value: '37', label: '37 - Business Studies, Accountancy, Economics,Statistics' }
]


export const examOptions = [
  {value: 'SSLC', label: 'SSLC'},
  {value: 'CBSE', label: 'CBSE'}
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


