import React, { useState } from 'react';

const RadioOption = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input type="radio" className="form-radio" name={name} value={value} checked={checked === value} onChange={onChange} />
      <span className="ml-2">{label}</span>
    </label>
  );
};

const MyComponent = () => {
  const [choice, setChoice] = useState('no');

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  return (
    <div className="absolute  space-x-4 items-center">
      <RadioOption label="yes" name="phone_choice" value="yes" checked={choice} onChange={handleChange} />
      <RadioOption label="no" name="phone_choice" value="no" checked={choice} onChange={handleChange} />
    </div>
  );
};

export default MyComponent;
