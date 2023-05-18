import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Form } from "formik";


const SubmitButton = styled(Button)`
margin-top: 2rem;
`;

const FormContainer = styled(Form)`
max-width: 600px;
margin: 0 auto;
padding: 2rem 1rem 2rem 1rem;
`;

export { SubmitButton, FormContainer };