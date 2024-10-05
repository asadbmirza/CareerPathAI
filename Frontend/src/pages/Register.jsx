import React from "react"
import { Link } from "react-router-dom"
import { ReturningUser } from "../styles/formstyles.js"
import CustomForm from '../components/CustomForm'
import FormField from "../components/FormField.jsx"
import * as Yup from "yup";

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

const initialValues = {
        username: "",
        email: "",
        password: "",
      }

const Register = () => {
  return (
    <div>
      <h1></h1>
      <CustomForm
        initialValues={initialValues}
        submitText="Continue"
        schema={schema}
        linkTo="/details"
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
