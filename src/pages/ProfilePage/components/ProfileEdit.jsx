
import React, { useState } from 'react';
import photo from './1.jpg';
import { FaTelegram, FaGithub, FaDiscord } from "react-icons/fa6";
import { Input } from 'postcss';
import InputField from '../../../components/InputField.jsx';
import { useEffect } from 'react';
import useRegexValidation from '../../../hooks/useRegexValidation.js';
import { nameRegex, phoneNumberRegex } from '../../../utils/regexPatterns.js';
import useEditProfile from '../../../hooks/useEditProfile.js';
import useUserData from '../../../hooks/useUserData.js';
import { useNavigate } from 'react-router-dom';
 

const renderLine = () => (
  <div className="w-full h-[2px] bg-[#0C0C0D] opacity-90"></div>
);

const renderLine2 = () => (
  <div className="w-[125px] h-0.5 bg-[#0C0C0D] opacity-90"></div>
);

const ProfileEdit = ({user}) => {

  const username = user.username;

  const [name, isValidName, setName] = useRegexValidation(user.name, nameRegex);
  const [surname, isValidSurname, setSurname] = useRegexValidation(user.surname, nameRegex);
  const [additional, isValidAdditional, setAdditional] = useRegexValidation(user.additional, nameRegex);
  const [sex, isValidSex, setSex] = useRegexValidation(user.sex, nameRegex);
  const [date_birth, isValidBirthDate, setDate_birth] = useRegexValidation(user.date_birth, nameRegex);
  
  const handleInputChange = (newValue, setter) => {
    setter(newValue);
  };

  const handleSubmit = () => {


    const data = {
      name,
      surname,
      sex,
      username,
      additional,
      date_birth,
    };


    useEditProfile(data);
    window.location.reload(false) 
  };

  return (
    <div className="flex justify-end items-start h-screen stroke-[#000000] bg-gray-400 border-black shadow-inner rounded-lg p-8 " 
    style={{
      width: '950px',
      height: '680px',
      borderRadius: '120px',
      marginRight: '160px', 
      marginLeft: '20px', 
      marginTop: '20px',
      border: '2px solid gray'
    }}>
         <button className="absolute left-[32%] text-[32px] top-[8%] w-auto text-[20px] px-4 py-2 text-black  border-none">
          My DashBoard
        </button>
        <button className="absolute left-[50%] text-[32px] top-[8%] w-auto text-[20px] px-4 py-2 text-black  rounded-md border-none">
          Chats
        </button>
        <button className="absolute left-[65%] text-[32px] top-[8%] w-auto text-[20px] px-4 py-2  text-black  rounded-md border-none">
          Cart
        </button>
       <div className="flex flex-col font-sans items-center stroke-[#000000] w-[400px] h-[535px] bg-white border border-black rounded-[32px] shadow-inner rgba(0, 0, 0, 0.5)"
       style={{ position: 'absolute', border: '2px solid gray', bottom: '25%', left: '30%' }}>
        <img className="rounded-full opacity-90% w-45 h-40 mx-auto" src={user.photo} alt="User" />
        <h2 className='absolute bottom-[50%]'>My Profile</h2>
        <div className="mt-4 ">
          {/* Name field */}
          <div className="mb-4 absolute left-[10px] bottom-[38.3%]">
            <label className=" text-[22px]">Name:</label>
            <div className="flex flex-col">
              <div className="flex  items-center gap-5">
                <InputField onChange={(e) => handleInputChange(e, setName)} label="" placeholder={user.name}/>
              </div>
              {renderLine()}
            </div>
          </div>

          {/* Surname field */}
          <div className="mb-2 absolute left-[35%] bottom-[40%]">
            <label className=" text-[22px]">Surname:</label>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
              <InputField onChange={(e) => handleInputChange(e, setSurname)} label="" placeholder={user.username}/>
              </div>
              {renderLine()}
            </div>
          </div>

          {/* Patronymic field */}
          <div className="mb-2 absolute left-[68%] bottom-[40%]">
            <label className=" text-[22px]">Patronymic:</label>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
              <InputField onChange={(e) => handleInputChange(e, setAdditional)} label="" placeholder={user.patronymic}/>
              </div>
              {renderLine()}
            </div>
          </div>
        <div className="mb-2 absolute left-[20%] bottom-[20%]">  
          <label className=" font-sans text-[20px]">Sex:</label>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
              <InputField onChange={(e) => handleInputChange(e, setSex)} label="" placeholder={user.gender}/>
              </div>
              {renderLine()}
            </div>
          </div>
          <div className="mb-2 absolute left-[60%] bottom-[20%]">
            <label className=" text-[20px]">City:</label>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
              <InputField onChange={(e) => handleInputChange(e, setName)} label="" placeholder={user.city}/>
              </div>
              {renderLine2()}
            </div>
          </div>  
        </div>
        <button onClick={handleSubmit} className='add-to-cart absolute bottom-[3%]'>Save</button>
      </div>
      <div className="flex flex-col w-[320px] h-[300px] items-center w-1/4 bg-white border border-black rounded-[32px]  p-2 shadow" style={{ position: 'absolute', border: '2px solid gray', bottom: '50%', left: '55%' }}>
        <div className="mt-2 absolute left-[1%] bottom-[70%]">
        {/* Phone number field */}
        <div className="mb-2 absolute left-[0%] bottom-[2%] ">
          <label className="text-[20px] whitespace-nowrap">Phone number:</label>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
              <InputField onChange={(e) => handleInputChange(e, setName)} label="" placeholder={user.phone}/>
              </div>
              {renderLine()}
            </div>
          </div>
        </div>
          {/* Email field */}
          <div className="mb-2 absolute left-[1%] bottom-[25%]">
            <label className=" text-[20px]">Email:</label>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
              <InputField onChange={(e) => handleInputChange(e, setName)} label="" placeholder={user.email}/>
              </div>
              {renderLine()}
            </div>
          </div>
          <div className="mb-2 absolute left-[50%] bottom-[50%]">
            <label className=" text-[20px]">Date of Birthday:</label>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
              <InputField onChange={(e) => handleInputChange(e, setDate_birth)} label="" placeholder={user.birthday}/>
              </div>
              {renderLine()}
            </div>
          </div>
          <button className='add-to-cart absolute bottom-[3%] w-[100px] h-[35px] text-center'>Save</button>
      </div>
      <div className="self-end w-[300px] h-[280px] bg-white  border-black rounded-[32px] p-4 shadow"  style={{ position: 'absolute',  border: '2px solid gray', bottom: '15%', left: '55%' }}>
        <div className=" font-sans no-underline text-[24px]">
        {/* <div className="mb-4 absolute bottom-[80%]">
          <div className="flex flex-col">
            <div className="flex items-center  gap-2">
              <FaGithub size={40} />
              <div className="flex flex-col flex-grow">
                  <InputField onChange={(e) => handleInputChange(e, setName)} label="" placeholder={user.github}/>
                {renderLine()}
              </div>
            </div>
          </div>
          </div> */}
          <div className="mb-4 absolute bottom-[70%]">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <FaTelegram className='text-blue-500' size={40} />
              <div className='flex flex-col flex-grow'>
                  <InputField onChange={(e) => handleInputChange(e, setName)} label="" placeholder={user.telegram}/>
                {renderLine()}
              </div>
            </div>
          </div>
          </div>
          <div className="mb-4 absolute bottom-[50%]">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
               <FaDiscord className='text-blue-900' size={40} />
              <div className='flex flex-col flex-grow'>
                 <InputField onChange={(e) => handleInputChange(e, setName)} label="" placeholder={user.discord}/>
                {renderLine()}
              </div>
            </div>
          </div>
          </div>
          <button className='add-to-cart absolute left-[15%] bottom-[25%]'>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
