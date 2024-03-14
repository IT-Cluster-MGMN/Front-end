import React, { useState } from "react";
import { FaTelegram, FaGithub, FaDiscord } from "react-icons/fa6";
import InputField from "../../../components/InputField.jsx";
import useRegexValidation from "../../../hooks/useRegexValidation.js";
import { nameRegex, phoneNumberRegex } from "../../../utils/regexPatterns.js";
import useEditProfile from "../../../hooks/useEditProfile.js";
import EditProfileButton from "./EditProfileButton.jsx";
import useEditContactsProfile from "../../../hooks/useEditContactsProfile.js";
import { BsTelegram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";

const renderLine = () => (
  <div className="w-full h-[2px] bg-[#0C0C0D] opacity-90"></div>
);

const renderLine2 = () => (
  <div className="w-[125px] h-0.5 bg-[#0C0C0D] opacity-90"></div>
);

const ProfileEdit = ({ user, contacts, editClick, onSubmit }) => {
  const username = user.username;

  const [name, isValidName, setName] = useRegexValidation(user.name, nameRegex);
  const [surname, isValidSurname, setSurname] = useRegexValidation(
    user.surname,
    nameRegex,
  );
  const [additional, isValidAdditional, setAdditional] = useRegexValidation(
    user.additional,
    nameRegex,
  );
  const [sex, isValidSex, setSex] = useRegexValidation(user.sex, nameRegex);
  const [date_birth, isValidBirthDate, setDate_birth] = useRegexValidation(
    user.date_birth,
    nameRegex,
  );

  const [phone, isValidPhone, setPhone] = useRegexValidation(
    contacts.phone,
    phoneNumberRegex,
  );
  const [viber, isValidViber, setViber] = useRegexValidation(
    contacts.viber,
    nameRegex,
  );
  const [telegram, isValidTelegram, setTelegram] = useRegexValidation(
    contacts.telegram,
    nameRegex,
  );

  const handleInputChange = (newValue, setter) => {
    setter(newValue.target.value);
  };

  const handleSubmit = () => {
    const data = {
      name,
      surname,
      sex,
      username,
      additional,
      date_birth,
    };

    const contactsData = {
      username,
      phone,
      viber,
      telegram,
    };

    useEditProfile(data);
    useEditContactsProfile(contactsData);
    onSubmit();
  };

  return (
    <>
      {user ? (
        <>
          <div className="flex flex-col h-full w-full">
            <div className="flex flex-row justify-between w-full items-center">
              <h2>Profile Edit</h2>
              <div className="flex flex-row gap-x-2">
                <button
                  onClick={handleSubmit}
                  className="rounded-[1rem] border-none hover:bg-zinc-200"
                >
                  Save
                </button>
                <EditProfileButton onClick={editClick} />
              </div>
            </div>
            <div className="grid-cols-2 grid-rows-2 w-full h-full gap-2 grid">
              <div className="  col-start-1 row-start-1 row-span-2 bg-white p-2 rounded-[1.5rem]">
                <div className="flex flex-col">
                  <div className="flex gap-y-2 mb-2 h-[30%] flex-col w-full items-center justify-center">
                    <img
                      src="../../../../public/profile.png"
                      className="w-[30%] aspect-square bg-red-50 rounded-full"
                    />
                    <button>Edit Profile Picture</button>
                  </div>
                  <div>
                    <label>Name:</label>
                    <br />
                    <input
                      placeholder={user.name}
                      onChange={(e) => handleInputChange(e, setName)}
                    />
                  </div>
                  <div>
                    <label>Surname:</label>
                    <br />
                    <input
                      placeholder={user.surname}
                      onChange={(e) => handleInputChange(e, setSurname)}
                    />
                  </div>
                  <div>
                    <label>Additional:</label>
                    <br />
                    <input
                      onChange={(e) => handleInputChange(e, setAdditional)}
                      placeholder={user.additional}
                    />
                  </div>
                </div>
              </div>
              <div className="col-start-2 p-2 row-start-1 bg-white rounded-[1.5rem]">
                <div className="flex flex-col h-full ">
                  <div>
                    <label>Sex:</label>
                    <br />
                    <input
                      onChange={(e) => handleInputChange(e, setSex)}
                      placeholder={user.sex}
                    />
                  </div>
                  <div>
                    <label>Birth Date:</label>
                    <br />
                    <input
                      onChange={(e) => handleInputChange(e, setDate_birth)}
                      placeholder={user.date_birth}
                    />
                  </div>
                </div>
              </div>
              <div className="p-2 col-start-2 row-start-2 bg-white rounded-[1.5rem]">
                <div className="flex flex-col">
                  <div>
                    <label>Phone number:</label>
                    <br />
                    <input onChange={(e) => handleInputChange(e, setPhone)} />
                  </div>
                  <div>
                    <FaViber />
                    <br />
                    <input onChange={(e) => handleInputChange(e, setViber)} />
                  </div>
                  <div>
                    <BsTelegram />
                    <br />
                    <input
                      onChange={(e) => handleInputChange(e, setTelegram)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProfileEdit;
