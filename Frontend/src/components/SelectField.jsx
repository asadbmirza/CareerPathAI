import { InfoBox, ErrorText } from "../styles/formstyles";
import { Field } from "formik";

const SelectField = ({ label, name }) => {
  return (
    <InfoBox>
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name}>
        <option value="" label="Select an option" />
        <option value="highSchool" label="High School" />
        <option value="associate" label="Associate Degree" />
        <option value="bachelor" label="Bachelor's Degree" />
        <option value="masters" label="Master's Degree" />
        <option value="doctoral" label="Doctoral Degree" />
        <option value="trades" label="Trade School/Technical Certificates" />
        <option value="none" label="No formal education" />
      </Field>
      <ErrorText name={name} component="div"/>
    </InfoBox>
  )
}

export default SelectField