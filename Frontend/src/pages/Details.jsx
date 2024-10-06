import React, { useState } from 'react';
import CustomForm from '../components/CustomForm';
import FormField from '../components/FormField';
import ListField from '../components/ListField';
import SelectField from '../components/SelectField';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const schema = Yup.object().shape({
  skills: Yup.array()
    .of(
      Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Skills must contain only letters and spaces")
        .required('Skill is required')
    )
    .min(1, "At least one skill is required")
    .required("Skills field is required"),
  location: Yup.string()
    .matches(/^[A-Za-z\s,]+$/, "Location must contain only letters, commas, and spaces")
    .required("Required"),
  education: Yup.string()
    .required("Required"),
});


const Details = () => {
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:3000/skills', {
          withCredentials: true,
        });

        console.log(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log(`You are not authenticated`);
          navigate('/login'); // Redirect to login page
        } else {
          console.error("Error fetching skills:", error);
        }
      }
    };

    fetchSkills();
  }, [navigate]);

  const addSkill = (value, setFieldValue) => {
    if (value && !skills.includes(value)) {
      const updatedSkills = [...skills, value];
      setSkills(updatedSkills);
      setFieldValue("skills", updatedSkills);
    }
  };

  const removeSkill = (index, setFieldValue) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    setFieldValue("skills", updatedSkills);
  };

  const initialValues = { skills: [], location: '', education: '' };



  return (
    <div>
      <CustomForm
        initialValues={initialValues}
        submitText="Get Curated Advice"
        schema={schema}
        linkTo="/dashboard"
        source="details"
      >
        <ListField 
          label="Skills and Interests" 
          type="text" 
          name="skills" 
          list={skills} 
          onAddItem={addSkill} 
          removeItem={removeSkill}
        />
        <FormField label="Location" type="text" name="location"></FormField>
        <SelectField label="Highest Completed Educatation" name="education"></SelectField>
      </CustomForm>
    </div>
  );
};

export default Details;
