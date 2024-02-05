import { useEffect, useState } from "react"
import useRegexValidation from '../../../hooks/useRegexValidation.js';
import { nameRegex, phoneNumberRegex } from '../../../utils/regexPatterns.js';

const ProfileEdit = () => {

  const [name, isValidName, setName] = useRegexValidation(null, nameRegex);
  const [surname, isValidSurname, setSurname] = useRegexValidation(null, nameRegex);
  const [patronymic, isValidPatronymic, setPatronymic] = useRegexValidation(null, nameRegex);
  const [phoneNumber, isValidPhoneNumber, setPhoneNumber] = useRegexValidation(null, phoneNumberRegex);

  return(
    <>
    
    </>
  )
};

export default ProfileEdit;
