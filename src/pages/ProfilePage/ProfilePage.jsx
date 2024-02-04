import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar/Navbar"; // Ensure this is imported correctly
import Footer from '../../components/Footer';
import axios from 'axios';

const ProfilePage = () => {
  const USERNAME_API = '';
  const USERDATA_API = '';

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);

  const [errMsg, setErrMsg] = useState('Error');

  useEffect(()=>{
    axios.get(USERNAME_API, {'withCredentials':true})   
    .then((res) => {
        setUsername(res.data.username);
      })
    .catch((err) => {
        console.log(err);
        setErrMsg(err.code);
      });
    axios.post(USERDATA_API, username, {'withCredentials':true})
    .then((res) => {
        setUser(res.data);
      })
    .catch((err) => {
        setErrMsg(err.code); })
  })

  return(
    <>
      {user ? (
        <div>
        </div>
      ) : (
        <div>
          <span>{errMsg}</span>
        </div>
      )}
    </>
  )
};
export default ProfilePage;
