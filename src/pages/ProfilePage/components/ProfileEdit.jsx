import { useEffect } from 'react';
import InputField from '../../../components/InputField.jsx';
import useRegexValidation from '../../../hooks/useRegexValidation.js';
import { nameRegex, phoneNumberRegex } from '../../../utils/regexPatterns.js';

const ProfileEdit = () => {

  const [name, isValidName, setName] = useRegexValidation(null, nameRegex);
  const [surname, isValidSurname, setSurname] = useRegexValidation(null, nameRegex);
  const [patronymic, isValidPatronymic, setPatronymic] = useRegexValidation(null, nameRegex);
  const [phoneNumber, isValidPhoneNumber, setPhoneNumber] = useRegexValidation(null, phoneNumberRegex);

  const handleInputChange = (newValue, setter) => {
    setter(newValue);
  };

  const handleSubmit = () => {
    //TODO: API logic
  };

  return(
    <>
      <h1>Profile editing</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <InputField onChange={(e) => handleInputChange(e, setName)}  label="Name"/>
        <InputField onChange={(e) => handleInputChange(e, setSurname)}  label="Surname"/>
        <InputField onChange={(e) => handleInputChange(e, setPatronymic)}  label="Patronymic"/>
        <InputField onChange={(e) => handleInputChange(e, setPhoneNumber)}  label="Phone number"/>
      {/*TODO: create generic button component*/}
      </form>
    </>
  )
};

export default ProfileEdit;
