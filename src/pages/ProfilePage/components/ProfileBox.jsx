import { useState } from "react"
import ProfileInfo from "./ProfileInfo"
import EditProfileButton from "./EditProfileButton";
import ProfileEdit from "./ProfileEdit";
import ProfilePicture from "./ProfilePicture";
import useUserData from '../../../hooks/useUserData';

const ProfileBox = () => {

  const [isEditting, setIsEditting] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditting(!isEditting);
  };
  
  const user = useUserData();

  return(
    <>
      <div className=" my-[2rem] w-[90%] h-full flex flex-row rounded-[1.5rem] p-[2rem] gap-[1rem]">
        <ProfilePicture className="w-[10%]"/>
        <div className="w-full">
          {isEditting ? (<ProfileEdit user={user}/>) : (<ProfileInfo user={user}/>)}
        </div>
        <EditProfileButton className="  relative w-[1rem]" onClick={()=>handleEditButtonClick()}/>
      </div>
    </>
  )
};

export default ProfileBox;
