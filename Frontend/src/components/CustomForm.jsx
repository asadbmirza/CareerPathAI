import { RegisterButton, RegisterForm, InfoBox, ReturningUser, ErrorText } from "../styles/formstyles.js"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"
import axios from "axios";

const schema = Yup.object().shape({
  username: Yup.string()
      .min(6, "Username must be between 6-18 characters")
      .max(18, "Username must be between 6-18 characters")
      .required("Required"),
  email: Yup.string()
      .email("Invalid email")
      .required("Required"),
  password: Yup.string()
      .min(8, "Password must be greater than 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .required("Required")
});

const onSubmit = async (values, { setSubmitting }) => {
  try {
    const response = await axios.post('placeholder', values);
    console.log(`Registration successful: ${JSON.stringify(response.data)}`);
  } catch (error) {
    console.error('There was an error!', error);
  } 
  finally {
    setSubmitting(false); 
  }
}

const CustomForm = ({ initialValues, submitText,children }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      validateOnChange={false}
      validateOnBlur={true}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <RegisterForm>
          {children}

          <RegisterButton type="submit" disabled={isSubmitting}><Link>{submitText}</Link></RegisterButton>
        </RegisterForm>
      )}
    </Formik>
  );
};

export default CustomForm
