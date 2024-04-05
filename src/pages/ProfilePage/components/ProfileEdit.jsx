import React, { useEffect, useState } from "react";
import InputField from "../../../components/InputField.jsx";
import {
  nameRegex,
  phoneNumberRegex,
  telegramRegex,
  viberRegex,
} from "../../../utils/regexPatterns.js";
import useEditProfile from "../../../hooks/useEditProfile.js";
import EditProfileButton from "./EditProfileButton.jsx";
import GreenButton from "../../../components/GreenButton.jsx";
import SaveButton from "./SaveButton.jsx";
import SexSelector from "../../../components/SexSelector.jsx";
import DateOfBirthSelector from "../../../components/DateOfBirthSelector.jsx";
import Loading from "../../../components/Loading.jsx";
import EmailLabel from "./EmailLabel.jsx";

const ProfileEdit = ({ user, contacts, editClick, onSubmit }) => {
  const username = user.username;

  const [hiddenPersonal, setHiddenPersonal] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [hiddenContacts, setHiddenContacts] = useState([
    false,
    false,
    false,
    false,
  ]);

  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [submitName, setSubmitName] = useState(user.name);
  const [nameFocus, setNameFocus] = useState(false);
  const [mouseOverName, setMouseOverName] = useState(false);
  useEffect(() => {
    if (nameRegex.test(name)) {
      setIsValidName(true);
      setSubmitName(name);
    } else {
      setSubmitName(user.name);
      setIsValidName(false);
    }
  }, [name]);

  const [surname, setSurname] = useState("");
  const [isValidSurname, setIsValidSurname] = useState(false);
  const [submitSurname, setSubmitSurname] = useState(user.surname);
  const [surnameFocus, setSurnameFocus] = useState(false);
  const [mouseOverSurname, setMouseOverSurname] = useState(false);
  useEffect(() => {
    if (nameRegex.test(surname)) {
      setIsValidSurname(true);
      setSubmitSurname(surname);
    } else {
      setSubmitSurname(user.surname);
      setIsValidSurname(false);
    }
  }, [surname]);

  const [additional, setAdditional] = useState("");
  const [isValidAdditional, setIsValidAdditional] = useState(false);
  const [submitAdditional, setSubmitAdditional] = useState(user.additional);
  const [additionalFocus, setAdditionalFocus] = useState(false);
  const [mouseOverAdditional, setMouseOverAdditional] = useState(false);
  useEffect(() => {
    if (nameRegex.test(additional)) {
      setIsValidAdditional(true);
      setSubmitAdditional(additional);
    } else {
      setSubmitAdditional(user.additional);
      setIsValidAdditional(false);
    }
  }, [additional]);

  const [sex, setSex] = useState("");
  const [submitSex, setSubmitSex] = useState(user.sex);
  const handleSexChange = (e) => {
    setSex(e);
    setSubmitSex(e);
  };

  const [date_birth, setDate_birth] = useState("");
  const [submitDate, setSubmitDate] = useState(user.date_birth);
  const handleDateChange = (e) => {
    setDate_birth(e);
    setSubmitDate(e);
  };

  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [submitPhone, setSubmitPhone] = useState(contacts.phone);
  useEffect(() => {
    if (phoneNumberRegex.test(phone)) {
      setIsValidPhone(true);
      setSubmitPhone(phone);
    } else {
      setSubmitPhone(contacts.phone);
      setIsValidPhone(false);
    }
  }, [phone]);

  const [viber, setViber] = useState("");
  const [isValidViber, setIsValidViber] = useState(false);
  const [submitViber, setSubmitViber] = useState(contacts.viber);
  const [viberFocus, setViberFocus] = useState(false);
  const [mouseOverViber, setMouseOverViber] = useState(false);
  useEffect(() => {
    if (viberRegex.test(viber)) {
      setIsValidViber(true);
      setSubmitViber(viber);
    } else {
      setSubmitViber(contacts.viber);
      setIsValidViber(false);
    }
  }, [viber]);

  const [telegram, setTelegram] = useState("");
  const [isValidTelegram, setIsValidTelegram] = useState(false);
  const [submitTelegram, setSubmitTelegram] = useState(contacts.telegram);
  const [telegramFocus, setTelegramFocus] = useState(false);
  const [mouseOverTelegram, setMouseOverTelegram] = useState(false);
  useEffect(() => {
    if (telegramRegex.test(telegram)) {
      setIsValidTelegram(true);
      setSubmitTelegram(telegram);
    } else {
      setSubmitTelegram(contacts.telegram);
      setIsValidTelegram(false);
    }
  }, [telegram]);

  const handleSubmit = () => {
    const data = {
      name: submitName,
      surname: submitSurname,
      sex: submitSex,
      username,
      additional: submitAdditional,
      date_birth: submitDate,
    };

    const contactsData = {
      username,
      phone: submitPhone,
      viber: submitViber,
      telegram: submitTelegram,
    };

    const hiddenPersonalData = {
      username,
      hiddenFields: hiddenPersonal,
    };

    const hiddenContactsData = {
      username,
      hiddenFields: hiddenContacts,
    };

    useEditProfile(data, contactsData, hiddenPersonalData, hiddenContactsData);
    onSubmit();
  };

  const handleHidePersonal = (pos) => {
    const newArray = [...hiddenPersonal];
    newArray[pos] = !hiddenPersonal[pos];
    setHiddenPersonal(newArray);
  };

  const handleHideContacts = (pos) => {
    const newArray = [...hiddenContacts];
    newArray[pos] = !hiddenContacts[pos];
    setHiddenContacts(newArray);
  };

  const handleHideUsername = () => {
    const newPersonal = [...hiddenPersonal];
    const newContacts = [...hiddenContacts];
    newPersonal[0] = !hiddenPersonal[0];
    newContacts[0] = !hiddenContacts[0];
    setHiddenPersonal(newPersonal);
    setHiddenContacts(newContacts);
  };

  return (
    <>
      {user ? (
        <>
          <div className="flex flex-col h-full w-full">
            <div className="flex flex-row justify-between w-full items-center">
              <h2 className="font-sans text-white">Profile Edit</h2>
              <div className="flex flex-row gap-x-2">
                <SaveButton onClick={handleSubmit} />
                <EditProfileButton onClick={editClick} isEdditing={true} />
              </div>
            </div>
            <div className="grid-cols-2 grid-rows-2 w-full h-full gap-2 grid">
              <div className="  col-start-1 row-start-1 row-span-2 bg-white p-2 rounded-[1.5rem]">
                <div className="flex flex-col">
                  <div className="flex gap-y-2 h-[30%] flex-col w-full items-center justify-center">
                    <img
                      src="../../../../public/profile-svgrepo-com.svg"
                      className="w-[30%] aspect-square shadow rounded-full p-2"
                    />
                    <EmailLabel
                      onChange={handleHideUsername}
                      currentState={!hiddenPersonal[0]}
                    >
                      {username}
                    </EmailLabel>
                  </div>
                  <InputField
                    label={"Name"}
                    onMouseOutInfo={() => setMouseOverName(false)}
                    onMouseOverInfo={() => setMouseOverName(true)}
                    field={name}
                    isValidField={isValidName}
                    setField={setName}
                    hintTag={"name"}
                    inputType={"text"}
                    onFocus={() => setNameFocus(true)}
                    onBlur={() => setNameFocus(false)}
                    isFocus={nameFocus}
                    isMouseOver={mouseOverName}
                    lightTheme={true}
                    hide={true}
                    onHide={() => handleHidePersonal(1)}
                    hidden={hiddenPersonal[1]}
                  />
                  <InputField
                    label={"Surname"}
                    onMouseOverInfo={() => setMouseOverSurname(true)}
                    onMouseOutInfo={() => setMouseOverSurname(false)}
                    field={surname}
                    isValidField={isValidSurname}
                    setField={setSurname}
                    hintTag={"name"}
                    inputType={"text"}
                    onFocus={() => setSurnameFocus(true)}
                    onBlur={() => setSurnameFocus(false)}
                    isFocus={surnameFocus}
                    isMouseOver={mouseOverSurname}
                    lightTheme={true}
                    hide={true}
                    onHide={() => handleHidePersonal(2)}
                    hidden={hiddenPersonal[2]}
                  />
                  <InputField
                    label={"Patronymic"}
                    onMouseOverInfo={() => setMouseOverAdditional(true)}
                    onMouseOutInfo={() => setMouseOverAdditional(false)}
                    field={additional}
                    isValidField={isValidAdditional}
                    setField={setAdditional}
                    hintTag={"name"}
                    inputType={"text"}
                    onFocus={() => setAdditionalFocus(true)}
                    onBlur={() => setAdditionalFocus(false)}
                    isFocus={additionalFocus}
                    isMouseOver={mouseOverAdditional}
                    lightTheme={true}
                    hide={true}
                    onHide={() => handleHidePersonal(3)}
                    hidden={hiddenPersonal[3]}
                  />
                </div>
              </div>
              <div className="col-start-2 p-2 row-start-1 bg-white rounded-[1.5rem]">
                <div className="flex flex-col h-full ">
                  <SexSelector
                    onChange={(e) => handleSexChange(e)}
                    sex={sex}
                    lightTheme={true}
                    hide={true}
                    onHide={() => handleHidePersonal(4)}
                    hidden={hiddenPersonal[4]}
                  />
                  <DateOfBirthSelector
                    onChange={(e) => handleDateChange(e)}
                    date_birth={date_birth}
                    lightTheme={true}
                    hide={true}
                    onHide={() => handleHidePersonal(5)}
                    hidden={hiddenPersonal[5]}
                  />
                </div>
              </div>
              <div className="p-2 col-start-2 row-start-2 bg-white rounded-[1.5rem]">
                <div className="flex flex-col">
                  <InputField
                    label={"Phone number"}
                    field={phone}
                    isValidField={isValidPhone}
                    setField={setPhone}
                    inputType={"text"}
                    lightTheme={true}
                    hide={true}
                    hidden={hiddenContacts[1]}
                    onHide={() => handleHideContacts(1)}
                  />
                  <InputField
                    label={"Viber"}
                    field={viber}
                    isValidField={isValidViber}
                    setField={setViber}
                    inputType={"text"}
                    hintTag={"viber"}
                    onFocus={() => setViberFocus(true)}
                    onBlur={() => setViberFocus(false)}
                    isFocus={viberFocus}
                    isMouseOver={mouseOverViber}
                    lightTheme={true}
                    hide={true}
                    hidden={hiddenContacts[2]}
                    onHide={() => handleHideContacts(2)}
                  />
                  <InputField
                    label={"Telegram"}
                    field={telegram}
                    isValidField={isValidTelegram}
                    setField={setTelegram}
                    inputType={"text"}
                    hintTag={"telegram"}
                    onFocus={() => setTelegramFocus(true)}
                    onBlur={() => setTelegramFocus(false)}
                    isFocus={telegramFocus}
                    isMouseOver={mouseOverTelegram}
                    lightTheme={true}
                    hide={true}
                    hidden={hiddenContacts[3]}
                    onHide={() => handleHideContacts(3)}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProfileEdit;
