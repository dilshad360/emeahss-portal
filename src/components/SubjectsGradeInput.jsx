import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
} from "@mui/material";
import { subjects, gradesOptions, cbseSubjects, initialValues } from "../Const";
import { SelectInput } from "./common/SelectInput";
import { useFormikContext } from "formik";

export default function SubjectsGradeInput(props) {
  const { label, name,syllabus,...rest } = props;
  const { errors, touched } = useFormikContext();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="table variants">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "60%", fontWeight: "bold" }}>
              Subjects
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Grades</TableCell>
          </TableRow>
        </TableHead>
        {syllabus === 'CBSE'?<TableBody>
          {cbseSubjects.map((subject, index) => (
            <TableRow key={index}>
              <TableCell style={{ width: "60%" }}>{subject}</TableCell>
              <TableCell>
                <SelectInput
                  name={`cbseMarks[${index}].grade`}
                  label="Grade"
                  {...rest}
                  options={gradesOptions}
                  error={
                    touched.subjectsMarks &&
                    touched.subjectsMarks[index] &&
                    Boolean(errors.subjectsMarks?.[index]?.grade)
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>:<TableBody>
          {subjects.map((subject, index) => (
            <TableRow key={index}>
              <TableCell style={{ width: "60%" }}>{subject}</TableCell>
              <TableCell>
                <SelectInput
                  name={`statesubjectsMarks[${index}].grade`}
                  label="Grade"
                  {...rest}
                  options={gradesOptions}
                  error={
                    touched.subjectsMarks &&
                    touched.subjectsMarks[index] &&
                    Boolean(errors.subjectsMarks?.[index]?.grade)
                  }
                  onChange={(value)=>{console.log('subjects',value);}}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>}
        
      </Table>
    </TableContainer>
  );
}
