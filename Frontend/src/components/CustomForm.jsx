import { RegisterButton, RegisterForm } from "../styles/formstyles.js"
import { Formik } from "formik";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const CustomForm = ({ initialValues, submitText, schema, children, linkTo, source }) => {
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', values)
      console.log(`Registration successful: ${JSON.stringify(response.data)}`);
      if(source === "details"){
        fetchData(response.data);
      }
      navigate(linkTo)
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
      const response = await axios.get('https://api.example.com/data', {
        params: {
          skills,
          location,
          education
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
