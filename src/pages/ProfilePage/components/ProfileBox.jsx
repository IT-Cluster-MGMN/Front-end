import { useState } from "react"
import ProfileInfo from "./ProfileInfo"
import EditProfileButton from "./EditProfileButton";
import ProfileEdit from "./ProfileEdit";
import ProfilePicture from "./ProfilePicture";

const ProfileBox = () => {

  const [isEditting, setIsEditting] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditting(!isEditting);
  };
  
  return(
    <>
      <div className=" my-[2rem] w-[90%] h-full flex flex-row rounded-[1.5rem] p-[2rem] gap-[1rem]">
        <ProfilePicture className="w-[10%]"/>
        <div className="w-full">
          {isEditting ? (<ProfileEdit/>) : (<ProfileInfo/>)}
        </div>
        <EditProfileButton className="  relative w-[1rem]" onClick={()=>handleEditButtonClick()}/>
      </div>
    </>
  )
};

export default ProfileBox;
