import { InfoBox, ErrorText } from "../styles/formstyles";
import { Field } from "formik";

const FormField = ({ label, type, name, onAddItem, items }) => {
  return (
    <InfoBox>
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        name={name}
      />
      {items && (
        <div>
          <button type="button" onClick={onAddItem}>Add Item</button>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <ErrorText name={name} component="div"/>
    </InfoBox>
  )
}

export default FormField