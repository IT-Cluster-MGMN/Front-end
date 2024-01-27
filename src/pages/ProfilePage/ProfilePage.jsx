import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar/Navbar"; // Ensure this is imported correctly
import Footer from '../../components/Footer';
import axios from 'axios';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    patronymic: '',
    gender: '',
    birthDate: '',
    phone: '',
    email: '',
  });

  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/api/data/username", {withCredentials:true})
    .then((res)=>{
      setUsername(res.data);
      console.log(res.data)
    })
    .catch((error) => {console.log(error)});
  },[])

  useEffect(() => {
    axios.post("http://localhost:8000/api/account/personal", username, {withCredentials:true})
      .then((res) => {
        setUser(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
  }, [user])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    // <div className="absolute top-0 left-0 flex flex-col w-full h-full">
    //   <Navbar />
    //   <div className="sticky top-0 z-50 flex flex-row items-center self-stretch justify-between px-4 bg-custom-black h-11">
    //   </div>
    //   <div className="flex-grow p-4">
    //     <div className="flex flex-col max-w-4xl mx-auto">
    //       <div className="flex items-center justify-between mb-6">
    //         {/* ... your other elements ... */}
    //         <button
    //           className={`px-4 py-2 rounded text-white ${isEditing ? 'bg-blue-600' : 'bg-green-500'}`}
    //           onClick={handleEditClick}
    //         >
    //           {isEditing ? 'Save' : 'Edit'}
    //         </button>
    //       </div>
          
    //       {/* Assuming you are mapping through formData to create form fields */}
    //       {Object.entries(formData).map(([key, value]) => (
    //         <div key={key} className="mb-4">
    //           <label className="block text-gray-700">{key}</label>
    //           <input
    //             type="text"
    //             name={key}
    //             value={value}
    //             onChange={handleInputChange}
    //             readOnly={!isEditing}
    //             className="w-full px-3 py-2 border rounded shadow"
    //             placeholder={`Enter your ${key}`}
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <Footer/>
    // </div>
    <div className='absolute top-0 left-0 flex flex-col w-full min-h-screen bg-zinc-200'>
      <Navbar/>
      {user ? (
        <>
          <div className='flex flex-col'>
            <label>Username</label>
            <span>{user.username}</span>
            <label>Name</label>
            <span>{user.name}</span>
            <label>Surname</label>
            <span>{user.surname}</span>
            <label>Additional</label>
            <span>{user.additional}</span>
          </div>
        </>
      ):(
        <>
          <p>Loading...</p>
        </>
      )}
      <Footer/>
    </div>
  );
};

export default ProfilePage;
