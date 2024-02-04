import { useState } from "react";

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
      {pfpChange ? (
        <div>
          <img/>
          <button>Change profile picture</button>
        </div>
      ) : (
        <>
            {/*TODO: make generic overlay cliclable component*/}
            <div>
              {/*photo croper component*/}
            </div>
        </>
      )}
    </>
  )
};

export default ProfilePicture;
