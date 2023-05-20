import * as yup from "yup";

export const initialValues = {
  Name: "",
  MobileNumber: "",
  WhatsappNumber: "",
  SingleWindowNo: "",
  Board: "",
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
  coursePreference3: ""
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

  Board: yup.string().required("Name of qualifying examination is required"),
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
  coursePreference1: yup.string().required('Course preference 1 is required'),
  coursePreference2: yup.string().required('Course preference 2 is required'),
  coursePreference3: yup.string().required('Course preference 3 is required'),
});

//date
export const years = [];
for (let i = new Date().getFullYear(); i > 1900; i--) {
  years.push({ value: i, label: i });
}

//gender
export const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
];

//religion
export const religionOptions = [
  { value: 'Islam', label: 'Islam' },
  { value: 'Hinduism', label: 'Hinduism' },
  { value: 'Christianity ', label: 'Christianity' },
  { value: 'other', label: 'Other' },
];

//panchayat
export const panchayatOptions = [
  { value: 'kondotty', label: 'Kondotty' },
  { value: 'pulikkal', label: 'Pulikkal' },
  { value: 'cherukavu', label: 'Cherukavu' },
  { value: 'kuzhimanna', label: 'Kuzhimanna' },
  { value: 'muthuvallur', label: 'Muthuvallur' },
  { value: 'cheekode', label: 'Cheekode' },
  { value: 'pallikkal', label: 'Pallikkal' },
  { value: 'morayur', label: 'Morayur' },
  { value: 'vazhakad', label: 'Vazhakad' },
  { value: 'vazhayur', label: 'Vazhayur' },
  { value: 'thenhipalam', label: 'Thenhipalam' },
  { value: 'chelembra', label: 'Chelembra' },
  { value: 'peruvallur', label: 'Peruvallur' },
  { value: 'pookottur', label: 'Pookottur' },
  { value: 'other', label: 'Other' },
]

export const cbseSubjects = [
  'Language(Hindi,Malayalam)', 'English', 'SocialScience', 'Maths', 'Science'
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

// cbse grades
export const cbseGradesOptions = [
  { value: '10', label: 'A1' },
  { value: '9', label: 'A2' },
  { value: '8', label: 'B1' },
  { value: '7', label: 'B2' },
  { value: '6', label: 'C1' },
  { value: '5', label: 'C2' },
  { value: '4', label: 'D' },
];


export const courseOptions = [
  { value: '1 - Physics, Chemistry, Biology,Mathematics', label: '1 - Physics, Chemistry, Biology,Mathematics' },
  { value: '11 - History, Economics, Political Science, Sociology', label: '11 - History, Economics, Political Science, Sociology' },
  { value: '35 - Journalism, English Literature, Communicative English, Psychology', label: '35 - Journalism, English Literature, Communicative English, Psychology' },
  { value: '37 - Business Studies, Accountancy, Economics,Statistics', label: '37 - Business Studies, Accountancy, Economics,Statistics' }
]


export const examOptions = [
  { value: 'STATE', label: 'STATE' },
  { value: 'CBSE', label: 'CBSE' }
]


export const codeToCourse = {
  '1': '1 - Physics, Chemistry, Biology,Mathematics',
  '11': '11 - History, Economics, Political Science, Sociology',
  '35': '35 - Journalism, English Literature, Communicative English, Psychology',
  '37': '37 - Business Studies, Accountancy, Economics,Statistics'
}

//School options
export const schoolOptions = [
    { value:"GHSS Kottappuram", label:"GHSS Kottappuram" },
    { value:"GVHSS Melengadi,Kondotty", label:"GVHSS Melengadi,Kondotty" },
    { value:"PPMMHSS Kottukkara", label:"PPMMHSS Kottukkara" },
    { value:"GHSS Kuzhimanna", label:"GHSS Kuzhimanna" },
    { value:"GHSS Muthuvallur", label:"GHSS Muthuvallur" },
    { value:"VPKMMHSS,Puthoor Pallikkal", label:"VPKMMHSS,Puthoor Pallikkal" },
    { value:"Morayoor,VHMSS", label:"Morayoor,VHMSS" },
    { value:"Markaz School, Ekkaparamba", label:"Markaz School, Ekkaparamba" },
    { value:"Ozhukur Crescent HSS", label:"Ozhukur Crescent HSS" },
    { value:"GHSS Thadathilparamb", label:"GHSS Thadathilparamb" },
    { value:"HIOHS Olavattur", label:"HIOHS Olavattur" },
    { value:"GVHSS Arimbra", label:"GVHSS Arimbra" },
    { value:"AMMHS Pulikkal", label:"AMMHS Pulikkal" },
    { value:"Others", label:"Others" }
]



//CBSE Mark grade
export const cbseMarkToGrade = {
  '10': 'A1',
  '9': 'A2',
  '8': 'B1',
  '7': 'B2',
  '6': 'C1',
  '5': 'C2',
  '4': 'D1',
}


export const markToGrade = {
  '9': 'A+',
  '8': 'A',
  '7': 'B+',
  '6': 'B',
  '5': 'C+',
  '4': 'C',
  '3': 'D+',
}


