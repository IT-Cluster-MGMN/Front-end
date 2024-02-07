import { useState } from "react";
import Avatar from '../../../components/Avatar';
import EditProfileButton from './EditProfileButton';

const ProfilePicture = ({pfp}) => {

  const [pfpChange, setPfPChange] = useState(false);

  const handlePfPChangeButton = () => {
    setPfPChange(!pfpChange);
  };

  const handlePfPChange = (newPfP) => {
// req to api that changes pfp
  };

  return(
    <>
      <div className="w-[60%] flex flex-col h-full">
        <Avatar/>
        <div className="flex flex-row items-center">
          <EditProfileButton/>
          <span>Edit profile picture</span>
        </div>
        {pfpChange ? (
          <div>TODO</div>
        ) : (null)}
      </div>
    </>
  )
};

export default ProfilePicture;
