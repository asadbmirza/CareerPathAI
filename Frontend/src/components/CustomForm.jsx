import { RegisterButton, RegisterForm } from "../styles/formstyles.js"
import { Formik } from "formik";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from 'react';
import { HeaderText } from "../styles/mainpage.js";


const CustomForm = ({ initialValues, submitText, schema, children, linkTo, source }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', values)
      console.log(`Registration successful: ${JSON.stringify(response.data)}`);
      if(source === "details"){
        fetchData(response.data);
      }
      else {
        navigate(linkTo);
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

  const fetchData = async ({ skills, location, education }) => {
    try {
      setLoading(true)
      const response = await axios.get('https://api.example.com/data', {
        params: {
          skills,
          location,
          education
        }
      });
      setData(response.data)
      navigate(linkTo), {
        response: {
          data
        }
      };
    } 
    catch (error) {
      setError('An error occurred while fetching data'); // Handle error
      setLoading(false); // Stop loading on error
    }
  };

  if (loading) {
    return <HeaderText>Loading...</HeaderText>
  }

  if (error) {
    return  <HeaderText>{error}...</HeaderText>;
  }


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      validateOnChange={false}
      validateOnBlur={true}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <RegisterForm>
          {children}
          <RegisterButton type="submit" disabled={isSubmitting}>
            {submitText}
          </RegisterButton>
        </RegisterForm>
      )}
    </Formik>
  );
};

export default CustomForm
