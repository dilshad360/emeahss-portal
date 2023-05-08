import { Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText  } from "@mui/material";
import { Field, useFormikContext } from "formik";


export function SelectYear(props) {
    const { label, name, options, ...rest } = props;
    const { errors, touched } = useFormikContext();
  
    return (
      <Grid item xs={12}>
        <FormControl fullWidth error={ Boolean(errors[name]&& touched[name])} >
          <InputLabel>{label}</InputLabel>
          <Field label={label} as={Select} name={name} {...rest} >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Field>
          {errors[name] && touched[name] && (
    <FormHelperText>{errors[name]}</FormHelperText>
  )}
        </FormControl>
      </Grid>
    );
  }