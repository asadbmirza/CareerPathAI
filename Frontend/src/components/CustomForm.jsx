import { RegisterButton, RegisterForm } from "../styles/formstyles.js"
import { Formik } from "formik";
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from 'react';
import { HeaderText } from "../styles/mainpage.js";


const CustomForm = ({ initialValues, submitText, schema, children, linkTo, source }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/login');
  }
  const onSubmit = async (values, { setSubmitting }, submitText) => {
    try {
      if (submitText === 'Login') {
        const response = await axios.post('http://localhost:3000/api/login', values, {withCredentials: true});
      
        localStorage.setItem('token', response.data.token);
        console.log(`Registration successful: ${JSON.stringify(response.data)}`);
        localStorage.setItem('username', JSON.stringify(response.data.user.username));
        localStorage.setItem('email', JSON.stringify(response.data.user.email));

        navigate("/details");
      } 
      else if (submitText === 'Continue') {
        const response = await axios.post('http://localhost:3000/api/register', values, {withCredentials: true});
        console.log(`Registration successful: ${JSON.stringify(response.data)}`);

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', JSON.stringify(response.data.user.username));
        localStorage.setItem('email', JSON.stringify(response.data.user.email));

        navigate(linkTo);
      }
      else if (submitText === "Get Curated Advice") {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:3000/api/skills', values, {headers: { Authorization: `Bearer ${token}` }, withCredentials: true});
        console.log(`Skills added successfully: ${JSON.stringify(response.data)}`);
        navigate(linkTo)
      }
      
    } 
    catch (error) {
      console.error('There was an error!', error)
      return null;
    } 
    finally {
      setSubmitting(false); 
    }
  }

  


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      validateOnChange={false}
      validateOnBlur={true}
      onSubmit={(values, actions) => onSubmit(values, actions, submitText)}
    >
      
      {({ values, setFieldValue, isSubmitting }) => (
        <>
          <RegisterForm>
            {children}
            <RegisterButton type="submit" disabled={isSubmitting}>
              {submitText}
            </RegisterButton>
            {localStorage.getItem("token") && <RegisterButton type="button" onClick={handleSignOut}>
            Sign Out
          </RegisterButton>}
          </RegisterForm>
          
        </>
      )}
      
    </Formik>
  );
};

export default CustomForm
