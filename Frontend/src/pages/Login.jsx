import React from "react"
import CustomForm from '../components/CustomForm';
import FormField from "../components/FormField.jsx";

const initialValues = {
  username: "",
  password: "",
}

const onSubmit = (values, { setSubmitting }) => {
  alert(JSON.stringify(values, null, 2));
  setSubmitting(false);
};

const Login = () => {
  return (
    <div>
      <h1></h1>
      <CustomForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        submitText="Login"
      >
        <FormField label="Username" type="text" name="username"></FormField>
        <FormField label="Password" type="password" name="password"></FormField>
      </CustomForm>
    </div>
  )
}

export default Login