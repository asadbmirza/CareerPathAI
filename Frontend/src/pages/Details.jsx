import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import CustomForm from '../components/CustomForm';
import FormField from '../components/FormField';

const Details = () => {
  const [items, setItems] = useState([]);
  const initialValues = { item: '' }

  const onAddItem = (values) => {
    console.log(values);
    if (values.item) {
      setItems([...items, values.item]);
    }
  };

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false);
  };

  return (
    <div>
      <CustomForm
        initialValues={initialValues}
        submitText="Get Curated Advice"
        onSubmit={onSubmit}
      >
        <FormField label="Skills" type="text" name="item" onAddItem={onAddItem} items={items} />
      </CustomForm>
    </div>
  );
};

export default Details;
