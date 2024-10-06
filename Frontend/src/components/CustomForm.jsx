import { RegisterButton, RegisterForm } from "../styles/formstyles.js"
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"
import axios from "axios";



const CustomForm = ({ initialValues, submitText, schema, children, linkTo }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await axios.post('http://localhost:3000/logout', {withCredentials: true});
      console.log(`Logout successful: ${JSON.stringify(response.data)}`);
      localStorage.removeItem("user");
      navigate('/login');
    } catch (error) {
      console.error('There was an error!', error);
    }
    
  }

  const onSubmit = async (values, { setSubmitting }, submitText) => {
    try {
      if (submitText === 'Login') {
        const response = await axios.post('http://localhost:3000/login', values, {withCredentials: true});
        console.log(`Login successful: ${JSON.stringify(response.data)}`);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate("/details");
      } 
      else if (submitText === 'Continue') {
        const response = await axios.post('http://localhost:3000/register', values, {withCredentials: true});
        console.log(`Registration successful: ${JSON.stringify(response.data)}`);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate(linkTo);
      }
      else if (submitText === "Get Curated Advice") {
        const response = await axios.post('http://localhost:3000/skills', values, {withCredentials: true});
        console.log(`Skills added successfully: ${JSON.stringify(response.data)}`);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
    } 
    catch (error) {
      console.error('There was an error!', error);
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
          </RegisterForm>
          <RegisterButton onClick={handleSignOut}>
            Sign Out
          </RegisterButton>
        </>
      )}
    </Formik>
  );
};

export default CustomForm
