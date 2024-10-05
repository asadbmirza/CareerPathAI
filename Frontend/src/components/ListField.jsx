import { InfoBox, ErrorText } from "../styles/formstyles";
import { Field, useFormikContext } from "formik";
import { useState } from "react";

const ListField = ({ label, type, name, list, onAddItem, removeItem }) => {
  const [inputValue, setInputValue] = useState("");
  const { setFieldValue } = useFormikContext();
  
  const handleAddSkill = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        onAddItem(inputValue, setFieldValue);
        setInputValue("");
      }
    }
  };

  return (
    <InfoBox>
      <label htmlFor={name}>{label}</label>
      {list && (
        <div className="all-skills">
          {list.map((item, index) => (
            <div className="skill" key={index}>
              {item}
              <button type="button" onClick={() => removeItem(index, setFieldValue)}>
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      <input
        type={type}
        name={name}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddSkill}
        placeholder="Start entering skills and interests..."
      />
      
      {/* Field level error handling */}
      <ErrorText name={name} component="div" />
    </InfoBox>
  );
};

export default ListField;
