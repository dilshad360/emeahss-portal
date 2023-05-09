import { TableContainer, Table, TableHead, TableRow, Paper, TableCell, TableBody } from "@mui/material"
import { subjects ,gradesOptions } from "../Const"
import { SelectInput } from "./common/SelectInput";
import { useFormikContext } from "formik";


export default function SubjectsGradeInput(props) {
    const { label, name, ...rest } = props;
    const { errors, touched } = useFormikContext();
    return(
        <TableContainer component={Paper}>
            <Table aria-label="table variants">
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: '60%', fontWeight: 'bold' }}>Subjects</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }} >Grades</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subjects.map((subject ,index)=>(
                  <TableRow key={index} >
                  <TableCell style={{ width: '60%' }}>{subject}</TableCell>
                  <TableCell><SelectInput
                name={`subjectsMarks[${index}].grade`}
                label="Grade"
                {...rest}
                options={gradesOptions}
                error={
                    touched.subjectsMarks &&
                    touched.subjectsMarks[index] &&
                    Boolean(errors.subjectsMarks?.[index]?.grade)
                  }
              /></TableCell>
                </TableRow>
                ))} 
              </TableBody>
            </Table>
          </TableContainer>
    )
};
