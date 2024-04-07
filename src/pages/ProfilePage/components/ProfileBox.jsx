import { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import EditProfileButton from "./EditProfileButton";
import ProfileEdit from "./ProfileEdit";
import ProfilePicture from "./ProfilePicture";
import useUserData from "../../../hooks/useUserData";
import useUserContacts from "../../../hooks/useUserContacts";
import ErrorMessage from "../../../components/ErrorMessage";

const ProfileBox = () => {
  const [isEditting, setIsEditting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const user = useUserData(setErrorMsg);
  const contacts = useUserContacts(setErrorMsg);

  const handleEditButtonClick = () => {
    setIsEditting(!isEditting);
  };

  const handleSubmit = () => {
    setIsEditting(false);
  };

  return (
    <>
      <div className="flex items-center flex-col h-full justify-center p-8 px-[15rem] gap-y-2">
        <div className="bg-darkgrey w-full h-full flex flex-row rounded-[1rem] p-[2rem] gap-[1rem]">
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
      <ErrorMessage errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
    </>
  );
};

export default ProfileBox;
