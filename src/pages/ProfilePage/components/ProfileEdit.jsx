import { useEffect } from 'react';
import InputField from '../../../components/InputField.jsx';
import useRegexValidation from '../../../hooks/useRegexValidation.js';
import { nameRegex, phoneNumberRegex, telegramRegex, viberRegex } from '../../../utils/regexPatterns.js';
import EditProfileButton from './EditProfileButton.jsx';
import MyComponent from './MyComponents.jsx';
import useEditProfile from '../../../hooks/useEditProfile.js';
import useEditContactsProfile from '../../../hooks/useEditContactsProfile';
import useUserData from '../../../hooks/useUserData.js';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = ({user, contacts}) => {

  const [name, isValidName, setName] = useRegexValidation(user.name, nameRegex);
  const [surname, isValidSurname, setSurname] = useRegexValidation(user.surname, nameRegex);
  const [additional, isValidAdditional, setAdditional] = useRegexValidation(user.additional, nameRegex);
  const [sex, isValidSex, setSex] = useRegexValidation(user.sex, nameRegex);
  const [date_birth, isValidBirthDate, setDate_birth] = useRegexValidation(user.date_birth, nameRegex);

  const [phone, isValidPhone, setPhone] = useRegexValidation(contacts.phone, phoneNumberRegex);
  const [telegram, isValidTelegram, setTelegram] = useRegexValidation(contacts.telegram, telegramRegex);
  const [viber, isValidViber, setViber] = useRegexValidation(contacts.viber, viberRegex);

  const handleInputChange = (newValue, setter) => {
    setter(newValue);
  };

  const username = user.username;

  const handleInfoSubmit = () => {

    const data = {
      name,
      surname,
      sex,
      username,
      additional,
      date_birth,
    };

    useEditProfile(data);
    window.location.reload() 
  };

  const handleContactsSubmit = () => {

    const data = {
      phone,
      telegram,
      viber,
    };

    useEditContactsProfile(data);
    window.location.reload();
  };

  return(
    <>
      <h1 className=' flex  flex-col absolute left-[25%]'>Personal Data</h1>
      <div className="flex absolute flex-wrap text-2xl left-[25%] bottom-[70%]" >
        <InputField onChange={(e) => handleInputChange(e.target.value, setName)} className = 'absoulute  w-1/2 'label="Name" placeholder={user.name}/>
        
        <InputField onChange={(e) => handleInputChange(e.target.value, setSurname)} className='absolute left-[100%] w-1/2'  label="Surname" placeholder={user.surname}/>
        <InputField onChange={(e) => handleInputChange(e.target.value, setAdditional)} className= 'absolute w-1/2 left-[200%]' label="Patronymic" placeholder={user.additional}/>
        <InputField onChange={(e) => handleInputChange(e.target.value, setSex)} className='absolute left-[300%] flex-nowrap w-1/2 whitespace-nowrap' label="Sex" placeholder={user.sex}/>
        <InputField onChange={(e) => handleInputChange(e.target.value, setDate_birth)} className='absolute left-[400%] flex-nowrap w-1/2 whitespace-nowrap' label="Birth date" placeholder={user.date_birth}/>
        <button onClick={handleInfoSubmit}>submit</button>
            </div>

      <h1 className=' flex  flex-col absolute left-[25%] bottom-[50%]'>Contacts</h1>
      <form className="flex absolute flex-wrap text-2xl left-[25%] bottom-[40%]" onSubmit={handleSubmit}>
        <InputField onChange={(e) => handleInputChange(e, setEmail)} className = 'absoulute   'label="Email"/>
        <InputField onChange={(e) => handleInputChange(e, setPhoneNumber)} className='absolute top-[100%] flex-nowrap  whitespace-nowrap' label="Phone number"/>
      </form> 
      <div className='absolute bottom-[26%] left-[24%] w-full justify-between items-center px-4 py-2 '>
        <h3>Do you have telegram by this number?</h3>
        <MyComponent />
      </div>
      <div className='absolute bottom-[16%] left-[24%] w-full justify-between items-center px-4 py-2 '>
        <h3>Do you have Viber by this number?</h3>
        <MyComponent />
      </div>
    </>
  )
};

export default ProfileEdit;
