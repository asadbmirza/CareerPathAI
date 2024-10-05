import { InfoBox, ErrorText } from "../styles/formstyles";
import { Field } from "formik";

const FormField = ({ label, type, name }) => {
  return (
    <InfoBox>
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        name={name}
      />
      <ErrorText name={name} component="div"/>
    </InfoBox>
  )
}

export default FormField