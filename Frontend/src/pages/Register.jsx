import React from "react"
import { Link } from "react-router-dom"
import { ReturningUser } from "../styles/formstyles.js"
import CustomForm from '../components/CustomForm';
import FormField from "../components/FormField.jsx";

const initialValues = {
        username: "",
        email: "",
        password: "",
      }

const onSubmit = (values, { setSubmitting }) => {
  alert(JSON.stringify(values, null, 2));
  setSubmitting(false);
};

const Register = () => {
  return (
    <div>
      <h1></h1>
      <CustomForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        submitText="Continue"
      >
        <FormField label="Username" type="text" name="username"></FormField>
        <FormField label="Email" type="email" name="email"></FormField>
        <FormField label="Password" type="password" name="password"></FormField>
        <ReturningUser><Link to="/login">Returning User?</Link></ReturningUser>
      </CustomForm>
    </div>
  )
};

export default Register;
