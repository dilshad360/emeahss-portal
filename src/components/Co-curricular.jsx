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
    TextField,
    Typography
} from "@mui/material";
import { Field } from 'formik';
import { coCurriculars } from "../Const";
const Cocurricular = () => {
    return (
        <TableContainer component={Paper} className='my-4'>
            <Typography variant="subtitle2" className="px-2 pt-3" textAlign={'start'} gutterBottom>
                        Participation in Co-curricular activities. Write the number of grades won in the relevant boxes.
            </Typography>
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
                <TableBody>
                {coCurriculars.map((coCurricular, index)=>(
                <TableRow key={index}>
                    <TableCell style={{ width: '25%', fontWeight: 'bold', textAlign: 'start' }}>
                        {coCurricular}
                    </TableCell>
                    <TableCell>
                        <Grid item width={'100%'}>
                            <Field
                                as={TextField}
                                name={`${coCurricular}[0].count`}
                                type="number"
                                fullWidth
                            />
                        </Grid>
                    </TableCell>
                    <TableCell>
                        <Grid item width={'100%'}>
                            <Field
                                as={TextField}
                                name={`${coCurricular}[1].count`}
                                type="number"
                                fullWidth
                            />
                        </Grid>
                    </TableCell>
                    <TableCell>
                        <Grid item width={'100%'}>
                            <Field
                                as={TextField}
                                name={`${coCurricular}[2].count`}
                                type="number"
                                fullWidth
                            />
                        </Grid>
                    </TableCell>
                    <TableCell>
                        <Grid item width={'100%'}>
                            <Field
                                as={TextField}
                                name={`${coCurricular}[3].count`}
                                type="number"
                                fullWidth
                            />
                        </Grid>
                    </TableCell>
                    <TableCell>
                        <Grid item width={'100%'}>
                            <Field
                                as={TextField}
                                name={`${coCurricular}[4].count`}
                                type="number"
                                fullWidth
                            />
                        </Grid>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer >
    )
}

export default Cocurricular
