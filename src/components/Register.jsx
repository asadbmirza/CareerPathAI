import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterButton = styled.button`
  background-color: #2c2c2c;
  padding: 15px 0;
  width: 100%;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  
  &:hover {
    scale: unset;
    background-color: #64558f;
    color: white;
  }
`
const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  font-size: 1.2rem;
  background-color: white;
  border-radius: 5px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;
`

const ReturningUser = styled.a`
  margin: 15px 0px 0px 10px;
  align-self: start;
  color: gray;
  font-size: 1rem;

  &: hover {
    text-decoration: underline;
  }
`

const ErrorText = styled(ErrorMessage)`
  font-size: 0.8rem;
  margin: 5px;
  color: red;
`

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



const Register = () => {

  return (
    <div>
      <h1>form</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={schema}
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <RegisterForm>
            <InfoBox>
              <label htmlFor="">Username</label>
              <Field
                type="text"
                name="username"
              />
              <ErrorText name="username" component="div"/>
            </InfoBox>
            <InfoBox>
              <label htmlFor="">Email</label>
              <Field
                type="text"
                name="email"
              />
              <ErrorText name="email" component="div"/>
            </InfoBox>
            <InfoBox>
              <label htmlFor="">Password</label>
              <Field
                type="password"
                name="password"
              />
              <ErrorText name="password" component="div"/>
            </InfoBox>
            <ReturningUser><Link>Returning User?</Link></ReturningUser>
            <RegisterButton type="submit">Register</RegisterButton>
          </RegisterForm>
        )}
      </Formik>
    </div>
  );
};

export default Register;
