import { InputLabel, FormControl, Select, MenuItem, FormHelperText } from "@mui/material"
import { courseOptions } from "../Const"
import { Field, useFormikContext } from "formik"

export default function CourseInput(params) {
  const { errors, touched, values } = useFormikContext();
  const filteredOptions = courseOptions.filter(
    (option) =>
      option.value !== values.coursePreference1 &&
      option.value !== values.coursePreference2
  );
  return (
    <div className="flex flex-col gap-3">
      <FormControl fullWidth error={Boolean(errors.coursePreference1 && touched.coursePreference1)}>
        <InputLabel>Course Preference 1</InputLabel>
        <Field
          name="coursePreference1"
          as={Select}
          label="Course Preference 1"
          variant="outlined"
        >
          {courseOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        {errors.coursePreference1 && touched.coursePreference1 && (
          <FormHelperText>{errors.coursePreference1}</FormHelperText>
        )}
      </FormControl>
        <FormControl fullWidth error={Boolean(errors.coursePreference2 && touched.coursePreference2)}>
          <InputLabel>Course Preference 2</InputLabel>
          <Field
            name="coursePreference2"
            label="Course Preference 2"
            as={Select}
            variant="outlined"
          >
            <MenuItem value="">None</MenuItem>
            {courseOptions
              .filter((option) => option.value !== values.coursePreference1)
              .map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </Field>
          {errors.coursePreference2 && touched.coursePreference2 && (
          <FormHelperText>{errors.coursePreference2}</FormHelperText>
        )}
        </FormControl>
        <FormControl fullWidth error={Boolean(errors.coursePreference3 && touched.coursePreference3)}>
          <InputLabel>Course Preference 3</InputLabel>
          <Field
            name="coursePreference3"
            label="Course Preference 3"
            as={Select}
            variant="outlined"
          >
            <MenuItem value="">None</MenuItem>
            {filteredOptions
              .filter(
                (option) =>
                  option.value !== values.coursePreference1 &&
                  option.value !== values.coursePreference2
              )
              .map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </Field>
          {errors.coursePreference3 && touched.coursePreference3 && (
          <FormHelperText>{errors.coursePreference3}</FormHelperText>
        )}
        </FormControl>
    </div>
  )
};
