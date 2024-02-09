import { useEffect } from 'react';
import InputField from '../../../components/InputField.jsx';
import useRegexValidation from '../../../hooks/useRegexValidation.js';
import { nameRegex, phoneNumberRegex } from '../../../utils/regexPatterns.js';
import EditProfileButton from './EditProfileButton.jsx';
import MyComponent from './MyComponents.jsx';

const ProfileEdit = () => {

  const [name, isValidName, setName] = useRegexValidation(null, nameRegex);
  const [surname, isValidSurname, setSurname] = useRegexValidation(null, nameRegex);
  const [patronymic, isValidPatronymic, setPatronymic] = useRegexValidation(null, nameRegex);
  const [phoneNumber, isValidPhoneNumber, setPhoneNumber] = useRegexValidation(null, phoneNumberRegex);
  const [sex, isValidSex, setSex] = useRegexValidation(null, nameRegex);
  const [BirthDate, isValidBirthDate, setBirthDate] = useRegexValidation(null, nameRegex);
  const [Email, isValidEmail, setEmail] = useRegexValidation(null, nameRegex);

  const handleInputChange = (newValue, setter) => {
    setter(newValue);
  };

  const handleSubmit = () => {
    //TODO: API logic
  };


  const InputField = ({ label, onChange, className }) => {
    return (
      <div className={`mb-4 ${className}`}>
        <label className="block text-gray-700 text-sm font-bold mb-2 w-1/2">
          {label}
        </label>
        <input
          type="text"
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    );
  };


  return(
    <>
      <h1 className=' flex  flex-col absolute left-[25%]'>Personal Data</h1>
      <form className="flex absolute flex-wrap text-2xl left-[25%] bottom-[70%]" onSubmit={handleSubmit}>
        <InputField onChange={(e) => handleInputChange(e, setName)} className = 'absoulute  w-1/2 'label="Name"/>
        <InputField onChange={(e) => handleInputChange(e, setSurname)} className='absolute left-[100%] w-1/2'  label="Surname"/>
        <InputField onChange={(e) => handleInputChange(e, setPatronymic)} className= 'absolute w-1/2 left-[200%]' label="Patronymic"/>
        <InputField onChange={(e) => handleInputChange(e, setSex)} className='absolute left-[300%] flex-nowrap w-1/2 whitespace-nowrap' label="Sex"/>
        <InputField onChange={(e) => handleInputChange(e, setBirthDate)} className='absolute left-[400%] flex-nowrap w-1/2 whitespace-nowrap' label="Birth date"/>
      {/*TODO: create generic button component*/}
      </form>

      <h1 className=' flex  flex-col absolute left-[25%] bottom-[50%]'>Contacts</h1>
      <form className="flex absolute flex-wrap text-2xl left-[25%] bottom-[40%]" onSubmit={handleSubmit}>
        <InputField onChange={(e) => handleInputChange(e, setEmail)} className = 'absoulute   'label="Email"/>
        <InputField onChange={(e) => handleInputChange(e, setPhoneNumber)} className='absolute top-[100%] flex-nowrap  whitespace-nowrap' label="Phone number"/>
      </form> 
      <div className='absolute bottom-[26%] left-[24%] w-full justify-between items-center px-4 py-2 '>
        <h3>Do you have telegram by this number?</h3>
        {/* <MyComponent /> */}
      </div>
      <div className='absolute bottom-[16%] left-[24%] w-full justify-between items-center px-4 py-2 '>
        <h3>Do you have Viber by this number?</h3>
        {/* <MyComponent /> */}
      </div>
    </>
  )
};

export default ProfileEdit;
