import Navbar from "../../components/Navbar/Navbar"; // Ensure this is imported correctl
import Footer from '../../components/Footer';
import ProfileBox from './components/ProfileBox';

const ProfilePage = () => {

  return(
    <>
      <div className='h-screen w-screen max-w-screen flex flex-col absolute top-0 left-0'>
        <Navbar/>
        <ProfileBox/>
      </div>
    </>
  )
};

export default ProfilePage;
