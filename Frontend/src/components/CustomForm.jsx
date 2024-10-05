import { RegisterButton, RegisterForm } from "../styles/formstyles.js"
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"
import axios from "axios";



const CustomForm = ({ initialValues, submitText, schema, children, linkTo }) => {
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', values);
      console.log(`Registration successful: ${JSON.stringify(response.data)}`);
      navigate(linkTo)
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
