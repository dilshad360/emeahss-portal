import React from 'react'
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    Paper,
    TableCell,
    TableBody,
    Grid,
    TextField
} from "@mui/material";
import { Field } from 'formik';
import { subjects, gradesOptions, cbseSubjects, cbseGradesOptions, coCurriculars } from "../Const";
import { SelectInput } from "./common/SelectInput";
import { useFormikContext } from "formik";
const Cocurricular = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label='table variants'>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: '25%', fontWeight: 'bold', textAlign: 'center' }}>

                        </TableCell>
                        <TableCell style={{ width: '15%', fontWeight: 'bold', textAlign: 'center' }}>
                            A Grade
                        </TableCell>
                        <TableCell style={{ width: '15%', fontWeight: 'bold', textAlign: 'center' }}>
                            B Grade
                        </TableCell>
                        <TableCell style={{ width: '15%', fontWeight: 'bold', textAlign: 'center' }}>
                            C Grade
                        </TableCell>
                        <TableCell style={{ width: '15%', fontWeight: 'bold', textAlign: 'center' }}>
                            D Grade
                        </TableCell>
                        <TableCell style={{ width: '15%', fontWeight: 'bold', textAlign: 'center' }}>
                            E Grade
                        </TableCell>
                    </TableRow>
                </TableHead>
                {coCurriculars.map((coCurricular, index)=>(
                <TableRow key={index}>
                    <TableCell style={{ width: '25%', fontWeight: 'bold', textAlign: 'start' }}>
                        {coCurricular}
                    </TableCell>
                    <TableCell>
                        <Grid item width={'100%'}>
                            <Field
                                as={TextField}
                                name="AgradeCocurricular"
                                label="Number of participation"
                                type="number"
                                fullWidth
                            />
                        </Grid>
                    </TableCell>
                    <TableCell>
                        <Grid item width={'100%'}>
                            <Field
                                as={TextField}
                                name="BgradeCocurricular"
                                label="Number of participation"
                                type="number"
                                fullWidth
                            />
                        </Grid>
                    </TableCell>
                    <TableCell>
                        <Grid item width={'100%'}>
                            <Field
                                as={TextField}
                                name="CgradeCocurricular"
                                label="Number of participation"
                                type="number"
                                fullWidth
                            />
                        </Grid>
                    </TableCell>
                    <TableCell>
                        <Grid item width={'100%'}>
                            <Field
                                as={TextField}
                                name="DgradeCocurricular"
                                label="Number of participation"
                                type="number"
                                fullWidth
                            />
                        </Grid>
                    </TableCell>
                    <TableCell>
                        <Grid item width={'100%'}>
                            <Field
                                as={TextField}
                                name="EgradeCocurricular"
                                label="Number of participation"
                                type="number"
                                fullWidth
                            />
                        </Grid>
                    </TableCell>
                </TableRow>
                ))}

            </Table>
        </TableContainer >
    )
}

export default Cocurricular
