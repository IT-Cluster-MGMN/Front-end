import { useState } from "react";

const useRegexValidation = (initialValue, regex) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
    setIsValid(regex.test(value));
  };

  return [value, isValid, handleChange];
};

export default useRegexValidation;
