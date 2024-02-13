import Navbar from "../../components/Navbar/Navbar"; // Ensure this is imported correctl
import Footer from '../../components/Footer';
import ProfileBox from './components/ProfileBox';

const ProfilePage = () => {

  return(
    <>
      <div className='h-screen w-screen max-w-screen flex flex-col absolute top-0 left-0 overflow-hidden'>
        <Navbar className='z-10 relative'/>
        {/* <button className="absolute left-0 top-[10%] w-auto text-[20px] px-4 py-2 bg-white text-black  rounded-md">
          My data
        </button>
        <button className="absolute left-0 top-[15%] w-auto text-[20px] px-4 py-2 bg-white text-black  rounded-md">
          Other Links
        </button> */}

      {/* <div className="lines">
        <div className="absolute left-[10%] top-[40%] left-0 w-full h-0.5 bg-[#0C0C0D] opacity-[90%]"></div>
        <div className="absolute left-[10%] top-[6%] w-0.5 h-[100%] bg-[#0C0C0D] opacity-[90%] z-0"></div>
      </div>   */}
        <ProfileBox/>
      </div>
    </>
  )
};

export default ProfilePage;
