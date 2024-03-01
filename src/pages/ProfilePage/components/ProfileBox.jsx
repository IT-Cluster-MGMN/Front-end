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

  return (
    <>
      <div className="flex items-center flex-col h-full justify-center p-2 px-[15rem] gap-y-2">
        <div className="flex items-center justify-around flex-row w-full p-2">
          <button>Dashboard</button>
          <button>Chats</button>
          <button>Cart</button>
        </div>
        <div className="bg-zinc-400 w-full h-full flex flex-row rounded-[3rem] p-[2rem] gap-[1rem]">
          {isEditting ? (
            <ProfileEdit
              user={user}
              contacts={contacts}
              editClick={handleEditButtonClick}
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
