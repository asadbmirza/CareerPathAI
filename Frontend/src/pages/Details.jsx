import React, { useState } from 'react';
import CustomForm from '../components/CustomForm';
import FormField from '../components/FormField';
import ListField from '../components/ListField';
import * as Yup from "yup";

const schema = Yup.object().shape({
  skills: Yup.array()
    .of(Yup.string().required("Skill cannot be empty"))
    .min(1, "At least one skill is required"),
  location: Yup.string()
    .required("Required"),
  education: Yup.string()
    .required("Required"),
});


const Details = () => {
  const [skills, setSkills] = useState([]);

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
        <FormField label="Education" type="text" name="education"></FormField>
      </CustomForm>
    </div>
  );
};

export default Details;
