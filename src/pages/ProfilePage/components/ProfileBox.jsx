import { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import EditProfileButton from "./EditProfileButton";
import ProfileEdit from "./ProfileEdit";
import ProfilePicture from "./ProfilePicture";
import useUserData from "../../../hooks/useUserData";
import useUserContacts from "../../../hooks/useUserContacts";

const ProfileBox = () => {
  const [isEditting, setIsEditting] = useState(false);

  const user = useUserData();
  const contacts = useUserContacts();

  const handleEditButtonClick = () => {
    setIsEditting(!isEditting);
  };

  const handleSubmit = () => {
    window.location.reload(false);
  };

  return (
    <>
      <div className="flex items-center flex-col h-full justify-center p-2 px-[15rem] gap-y-2">
        <div className="bg-zinc-400 w-full h-full flex flex-row rounded-[3rem] p-[2rem] gap-[1rem]">
          {isEditting ? (
            <ProfileEdit
              user={user}
              contacts={contacts}
              editClick={handleEditButtonClick}
              onSubmit={handleSubmit}
            />
          ) : (
            <ProfileInfo
              user={user}
              contacts={contacts}
              editClick={handleEditButtonClick}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
