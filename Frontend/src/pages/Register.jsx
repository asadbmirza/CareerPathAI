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

const Register = () => {
  return (
    <div>
      <h1></h1>
      <CustomForm
        initialValues={initialValues}
        submitText="Continue"
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
