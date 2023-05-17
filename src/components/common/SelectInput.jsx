import { Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { Field, useFormikContext } from "formik";

export function SelectInput(props) {
  const { label, name, options, onChange, ...rest } = props;
  const { errors, touched, values, setFieldValue } = useFormikContext();

  const handleChange = (event) => {
    const value = event.target.value;
    setFieldValue(name, value); // Update Formik's value
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Grid item xs={12}>
      <FormControl fullWidth error={Boolean(errors[name] && touched[name])}>
        <InputLabel>{label}</InputLabel>
        <Field
          label={label}
          as={Select}
          name={name}
          value={values[name]} // Use Formik's value
          onChange={handleChange}
          defaultValue="" 
          {...rest}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        {errors[name] && touched[name] && <FormHelperText>{errors[name]}</FormHelperText>}
      </FormControl>
    </Grid>
  );
}

