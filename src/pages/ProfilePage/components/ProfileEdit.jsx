// const ProfileEdit = ({user}) => {
//   return(
//     <>
//       <h1 className=' flex  flex-col absolute left-[25%]'>Personal Data</h1>
//       <form className="flex absolute flex-wrap text-2xl left-[25%] bottom-[70%]" onSubmit={handleSubmit}>
//         <InputField onChange={(e) => handleInputChange(e, setName)} className = 'absoulute  w-1/2 'label="Name"/>
//         <InputField onChange={(e) => handleInputChange(e, setSurname)} className='absolute left-[100%] w-1/2'  label="Surname"/>
//         <InputField onChange={(e) => handleInputChange(e, setPatronymic)} className= 'absolute w-1/2 left-[200%]' label="Patronymic"/>
//         <InputField onChange={(e) => handleInputChange(e, setSex)} className='absolute left-[300%] flex-nowrap w-1/2 whitespace-nowrap' label="Sex"/>
//         <InputField onChange={(e) => handleInputChange(e, setBirthDate)} className='absolute left-[400%] flex-nowrap w-1/2 whitespace-nowrap' label="Birth date"/>
//       {/*TODO: create generic button component*/}
//       </form>

//       <h1 className=' flex  flex-col absolute left-[25%] bottom-[50%]'>Contacts</h1>
//       <form className="flex absolute flex-wrap text-2xl left-[25%] bottom-[40%]" onSubmit={handleSubmit}>
//         <InputField onChange={(e) => handleInputChange(e, setEmail)} className = 'absoulute   'label="Email"/>
//         <InputField onChange={(e) => handleInputChange(e, setPhoneNumber)} className='absolute top-[100%] flex-nowrap  whitespace-nowrap' label="Phone number"/>
//       </form> 
//       <div className='absolute bottom-[26%] left-[24%] w-full justify-between items-center px-4 py-2 '>
//         <h3>Do you have telegram by this number?</h3>
//         {/* <MyComponent /> */}
//       </div>
//       <div className='absolute bottom-[16%] left-[24%] w-full justify-between items-center px-4 py-2 '>
//         <h3>Do you have Viber by this number?</h3>
//         {/* <MyComponent /> */}
//       </div>
//     </>
//   )
// };

// export default ProfileEdit;
// import React, { useState } from 'react';
// import photo from './1.jpg';
// import { FaTelegram, FaGithub, FaDiscord } from "react-icons/fa6";
//
// const renderLine = () => (
//   <div className="w-full h-0.5 bg-[#0C0C0D] opacity-90"></div>
// );
//
// const renderLine2 = () => (
//   <div className="w-[125px] h-0.5 bg-[#0C0C0D] opacity-90"></div>
// );
//
// const UserProfile = () => {
//   const [user, setUser] = useState({
//     photo: photo, // Replace with actual image path
//     name: 'Maxym',
//     surname: 'Makaryk',
//     patronymic: 'Ivanovych',
//     phone: '380937881503',
//     email: 'makсim.makaryk@gmail.com',
//     gender: 'Man',
//     city: 'Turka',
//     birthday: '02/08/2005',
//     github: 'github-link', 
//     telegram: '@Apolloshka',
//     discord: 'Apollones'
//   });
//
//   
//   return (
//     <div className="flex justify-end items-start h-screen stroke-[#000000] bg-gray-400 border-black shadow-inner rounded-lg p-8 " 
//     style={{
//       width: '950px',
//       height: '680px',
//       borderRadius: '120px',
//       marginRight: '160px', 
//       marginLeft: '20px', 
//       marginTop: '20px',
//       border: '2px solid gray'
//     }}>
//          <button className="absolute left-[32%] text-[32px] top-[8%] w-auto text-[20px] px-4 py-2 text-black  border-none">
//           My DashBoard
//         </button>
//         <button className="absolute left-[50%] text-[32px] top-[8%] w-auto text-[20px] px-4 py-2 text-black  rounded-md border-none">
//           Chats
//         </button>
//         <button className="absolute left-[65%] text-[32px] top-[8%] w-auto text-[20px] px-4 py-2  text-black  rounded-md border-none">
//           Cart
//         </button>
//        <div className="flex flex-col font-sans items-center stroke-[#000000] w-[360px] h-[520px] bg-white border border-black rounded-[32px] shadow-inner"
//        style={{ position: 'absolute', border: '2px solid gray', bottom: '25%', left: '30%' }}>
//         <img className="rounded-full opacity-90% w-45 h-40 mx-auto" src={user.photo} alt="User" />
//         <h2 className='absolute bottom-[50%]'>My Profile</h2>
//         <div className="mt-4 ">
//           {/* Name field */}
//           <div className="mb-4 absolute left-[10px] bottom-[38.3%]">
//             <label className=" text-[22px]">Name:</label>
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                 <span className="inline text-[22px]">{user.name}</span>
//               </div>
//               {renderLine()}
//             </div>
//           </div>
//
//           {/* Surname field */}
//           <div className="mb-2 absolute left-[35%] bottom-[40%]">
//             <label className=" text-[22px]">Surname:</label>
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                 <span className="inline text-[22px]">{user.surname}</span>
//               </div>
//               {renderLine()}
//             </div>
//           </div>
//
//           {/* Patronymic field */}
//           <div className="mb-2 absolute left-[68%] bottom-[40%]">
//             <label className=" text-[22px]">Patronymic:</label>
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                 <span className="inline text-[22px]">{user.patronymic}</span>
//               </div>
//               {renderLine()}
//             </div>
//           </div>
//
//           {/* Phone number field */}
//           <div className="mb-2 absolute left-[60%] bottom-[26%] ">
//           <label className="text-[20px] whitespace-nowrap">Phone number:</label>
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                 <span className="inline text-[20px]">{user.phone}</span>
//               </div>
//               {renderLine()}
//             </div>
//           </div>
//
//
//           {/* Email field */}
//           <div className="mb-2 absolute left-[1%] bottom-[15%]">
//             <label className=" text-[20px]">Email:</label>
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                 <span className="inline text-[20px]">{user.email}</span>
//               </div>
//               {renderLine()}
//             </div>
//           </div>
//         </div>
//         <button className='add-to-cart absolute bottom-[3%]'>Save</button>
//       </div>
//       <div className="flex flex-col w-[350px] h-[220px] items-center w-1/4 bg-white border border-black rounded-[32px]  shadow" style={{ position: 'absolute', border: '2px solid gray', bottom: '56%', left: '55%' }}>
//         <div className="mt-2 absolute left-[1%] bottom-[70%]">
//             <label className=" font-sans text-[20px]">Sex:</label>
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                 <span className="inline text-[20px]">{user.gender}</span>
//               </div>
//               {renderLine()}
//             </div>
//           </div>
//           <div className="mb-2 absolute left-[65%] bottom-[50%]">
//             <label className=" text-[20px]">City:</label>
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                 <span className="inline text-[20px]">{user.city}</span>
//               </div>
//               {renderLine2()}
//             </div>
//           </div>
//           <div className="mb-2 absolute left-[1%] bottom-[25%]">
//             <label className=" text-[20px]">Date of Birthday:</label>
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                 <span className="inline text-[20px]">{user.birthday}</span>
//               </div>
//               {renderLine()}
//             </div>
//           </div>
//           <button className='add-to-cart absolute bottom-[3%] w-[100px] h-[35px] text-center'>Save</button>
//   // const handleSubmit = () => {
//   //   useEditProfile({
//   //     'name':{name},
//   //     'surname':{surname},
//   //     'additional':{patronymic},
//   //     'sex':{sex},
//   //     'date_birth':{date_birth}
//   //   })
//   // };
//
//   return(
//     <>
//       <h1 className=' flex  flex-col absolute left-[25%]'>Personal Data</h1>
//       <form className="flex absolute flex-wrap text-2xl left-[25%] bottom-[70%]" onSubmit={handleSubmit}>
//         <InputField placeholder={name} onChange={(e) => handleInputChange(e, setName)} className = 'absoulute  w-1/2 'label="Name"/>
//         <InputField placeholder={surname} onChange={(e) => handleInputChange(e, setSurname)} className='absolute left-[100%] w-1/2'  label="Surname"/>
//         <InputField placeholder={patronymic} onChange={(e) => handleInputChange(e, setPatronymic)} className= 'absolute w-1/2 left-[200%]' label="Patronymic"/>
//         <InputField placeholder={sex} onChange={(e) => handleInputChange(e, setSex)} className='absolute left-[300%] flex-nowrap w-1/2 whitespace-nowrap' label="Sex"/>
//         <InputField placeholder={date_birth} onChange={(e) => handleInputChange(e, setBirthDate)} className='absolute left-[400%] flex-nowrap w-1/2 whitespace-nowrap' label="Birth date"/>
//       {/*TODO: create generic button component*/}
//       </form>
//
//       <h1 className=' flex  flex-col absolute left-[25%] bottom-[50%]'>Contacts</h1>
//       <form className="flex absolute flex-wrap text-2xl left-[25%] bottom-[40%]" onSubmit={handleSubmit}>
//         <InputField onChange={(e) => handleInputChange(e, setEmail)} className = 'absoulute   'label="Email"/>
//         <InputField onChange={(e) => handleInputChange(e, setPhoneNumber)} className='absolute top-[100%] flex-nowrap  whitespace-nowrap' label="Phone number"/>
//       </form> 
//       <div className='absolute bottom-[26%] left-[24%] w-full justify-between items-center px-4 py-2 '>
//         <h3>Do you have telegram by this number?</h3>
//         {/* <MyComponent /> */}
//       </div>
//       <div className="self-end w-[280px] h-[320px] bg-white  border-black rounded-[32px] p-4 shadow"  style={{ position: 'absolute',  border: '2px solid gray', bottom: '15%', left: '55%' }}>
//         <div className=" font-sans no-underline text-[24px]">
//         <div className="mb-4">
//           <div className="flex flex-col">
//             <div className="flex  gap-2">
//               <FaGithub size={40} />
//               <div className="flex flex-col flex-grow">
//                 <a className='no-underline text-black' href={user.github}>GitHub</a>
//                 {renderLine2()}
//               </div>
//             </div>
//           </div>
//           </div>
//           <div className="mb-4 absolute bottom-[60%]">
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                 <FaTelegram className='text-blue-500' size={40} />
//               <div className='flex flex-col flex-grow'>
//                 <span className="inline">{user.telegram}</span>
//                 {renderLine()}
//               </div>
//             </div>
//           </div>
//           </div>
//           <div className="mb-4 absolute bottom-[40%]">
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                <FaDiscord className='text-blue-900' size={40} />
//               <div className='flex flex-col flex-grow'>
//                 <span className="inline">{user.discord}</span>
//                 {renderLine()}
//               </div>
//             </div>
//           </div>
//           </div>
//           <button className='add-to-cart absolute left-[15%] bottom-[20%]'>Save</button>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default UserProfile;
import { useEffect } from 'react';
import InputField from '../../../components/InputField.jsx';
import useRegexValidation from '../../../hooks/useRegexValidation.js';
import { nameRegex, phoneNumberRegex } from '../../../utils/regexPatterns.js';
import EditProfileButton from './EditProfileButton.jsx';
import MyComponent from './MyComponents.jsx';
import useEditProfile from '../../../hooks/useEditProfile.js';
import useUserData from '../../../hooks/useUserData.js';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = ({user}) => {

  const [name, isValidName, setName] = useRegexValidation(user.name, nameRegex);
  const [surname, isValidSurname, setSurname] = useRegexValidation(user.surname, nameRegex);
  const [additional, isValidAdditional, setAdditional] = useRegexValidation(user.additional, nameRegex);
  const [phoneNumber, isValidPhoneNumber, setPhoneNumber] = useRegexValidation(null, phoneNumberRegex);
  const [sex, isValidSex, setSex] = useRegexValidation(user.sex, nameRegex);
  const [date_birth, isValidBirthDate, setDate_birth] = useRegexValidation(user.date_birth, nameRegex);

  const handleInputChange = (newValue, setter) => {
    setter(newValue);
  };

  const username = user.username;

  const handleSubmit = () => {

    const data = {
      name,
      surname,
      sex,
      username,
      additional,
      date_birth,
    };

    console.log(data);

    useEditProfile(data);
    window.location.reload(false) 
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
        <button onClick={handleSubmit}>submit</button>
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
