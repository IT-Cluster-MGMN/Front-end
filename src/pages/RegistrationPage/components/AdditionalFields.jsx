import { useEffect, useState } from "react";
import {
  nameRegex,
  phoneNumberRegex,
  telegramRegex,
  viberRegex,
} from "../../../utils/regexPatterns";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import { FaCircleInfo } from "react-icons/fa6";
import Hint from "./Hint";
import GenderSelector from "../../../components/GenderSelector";
import DateOfBirthSelector from "../../../components/DateOfBirthSelector";

const AdditionalFields = ({ onPersonalSubmit, onContactsSubmit }) => {
  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [mouseOverName, setMouseOverName] = useState(false);

  const [surname, setSurname] = useState("");
  const [isValidSurname, setIsValidSurname] = useState(false);
  const [mouseOverSurname, setMouseOverSurname] = useState(false);

  const [additional, setAdditional] = useState("");
  const [isValidAdditional, setIsValidAdditional] = useState(false);
  const [mouseOverAdditional, setMouseOverAdditional] = useState(false);

  const [sex, setSex] = useState("");
  const [date_birth, setDateBirth] = useState("");

  //TODO: find better phone number input library
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(true);

  const [viber, setViber] = useState("");
  const [isValidViber, setIsValidViber] = useState(false);
  const [mouseOverViber, setMouseOverViber] = useState(false);

  const [telegram, setTelegram] = useState("");
  const [isValidTelegram, setIsValidTelegram] = useState(false);
  const [mouseOverTelegram, setMouseOverTelegram] = useState(false);

  const [nameFocus, setNameFocus] = useState(false);
  const [surnameFocus, setSurnameFocus] = useState(false);
  const [additionalFocus, setAdditionalFocus] = useState(false);
  const [viberFocus, setViberFocus] = useState(false);
  const [telegramFocus, setTelegramFocus] = useState(false);

  const [isPersonalSaved, setIsPersonalSaved] = useState(false);
  const [isContactsSaved, setIsContactsSaved] = useState(false);

  const handleInput = (value, setter, validSetter, regex) => {
    setter(value);
    validSetter(regex.test(value));
    setIsPersonalSaved(false);
    setIsContactsSaved(false);
  };

  const handleSavePersonal = () => {
    onPersonalSubmit({ name, surname, additional, sex, date_birth });
    setIsPersonalSaved(true);
  };

  const handleSaveContacts = () => {
    onContactsSubmit({ phone, viber, telegram });
    setIsContactsSaved(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 h-full gap-4 text-white font-sans">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <label>Ім'я</label>
              {name && !isValidName ? (
                <FaCircleInfo
                  onMouseOver={() => setMouseOverName(true)}
                  onMouseOut={() => setMouseOverName(false)}
                />
              ) : null}
            </div>
            <input
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
              onChange={(e) =>
                handleInput(e.target.value, setName, setIsValidName, nameRegex)
              }
              className={`bg-inherit border-x-transparent border-t-transparent  border-[2px] ${isValidName && name ? "border-b-green-500" : ""} ${!isValidName && name ? "border-b-red-500" : ""} focus:outline-none text-white`}
            />
            {(nameFocus && name && !isValidName) || mouseOverName ? (
              <Hint type={"name"} />
            ) : null}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <label>Прізвище</label>
              {surname && !isValidSurname ? (
                <FaCircleInfo
                  onMouseOver={() => setMouseOverSurname(true)}
                  onMouseOut={() => setMouseOverSurname(false)}
                />
              ) : null}
            </div>
            <input
              onFocus={() => setSurnameFocus(true)}
              onBlur={() => setSurnameFocus(false)}
              onChange={(e) =>
                handleInput(
                  e.target.value,
                  setSurname,
                  setIsValidSurname,
                  nameRegex,
                )
              }
              className={`bg-inherit border-x-transparent border-t-transparent  border-[2px] ${isValidSurname && surname ? "border-b-green-500" : ""} ${!isValidSurname && surname ? "border-b-red-500" : ""} focus:outline-none text-white`}
            />
            {(surnameFocus && surname && !isValidSurname) ||
              mouseOverSurname ? (
              <Hint type={"name"} />
            ) : null}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <label>По-батькові</label>
              {additional && !isValidAdditional ? (
                <FaCircleInfo
                  onMouseOver={() => setMouseOverAdditional(true)}
                  onMouseOut={() => setMouseOverAdditional(false)}
                />
              ) : null}
            </div>
            <input
              onFocus={() => setAdditionalFocus(true)}
              onBlur={() => setAdditionalFocus(false)}
              onChange={(e) =>
                handleInput(
                  e.target.value,
                  setAdditional,
                  setIsValidAdditional,
                  nameRegex,
                )
              }
              className={`bg-inherit border-x-transparent border-t-transparent  border-[2px] ${isValidAdditional && additional ? "border-b-green-500" : ""} ${!isValidAdditional && additional ? "border-b-red-500" : ""} focus:outline-none text-white`}
            />
            {(additionalFocus && additional && !isValidAdditional) ||
              mouseOverAdditional ? (
              <Hint type={"name"} />
            ) : null}
          </div>
          <GenderSelector onChange={(e) => setSex(e)} sex={sex} />
          <DateOfBirthSelector
            onChange={(e) => setDateBirth(e)}
            date_birth={date_birth}
          />
          <button
            onClick={handleSavePersonal}
            disabled={
              !isValidName ||
              !isValidSurname ||
              !isValidAdditional ||
              !sex ||
              !date_birth
            }
            className={`p-2 ${isPersonalSaved ? "bg-green-500" : "bg-white"}`}
          >
            Зберегти особисту інформацію
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label>Номер телефону</label>
            <PhoneInput
              flags={flags}
              value={phone}
              defaultCountry="UA"
              onChange={setPhone}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <label>Viber</label>
              {viber && !isValidViber ? (
                <FaCircleInfo
                  onMouseOver={() => setMouseOverViber(true)}
                  onMouseOut={() => setMouseOverViber(false)}
                />
              ) : null}
            </div>
            <input
              onFocus={() => setViberFocus(true)}
              onBlur={() => setViberFocus(false)}
              onChange={(e) =>
                handleInput(
                  e.target.value,
                  setViber,
                  setIsValidViber,
                  viberRegex,
                )
              }
              className={`bg-inherit border-x-transparent border-t-transparent  border-[2px] ${isValidViber && viber ? "border-b-green-500" : ""} ${!isValidViber && viber ? "border-b-red-500" : ""} focus:outline-none text-white`}
            />
            {(viberFocus && viber && !isValidViber) || mouseOverViber ? (
              <Hint type={"viber"} />
            ) : null}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <label>Telegram</label>
              {telegram && !isValidTelegram ? (
                <FaCircleInfo
                  onMouseOver={() => setMouseOverTelegram(true)}
                  onMouseOut={() => setMouseOverTelegram(false)}
                />
              ) : null}
            </div>
            <input
              onFocus={() => setTelegramFocus(true)}
              onBlur={() => setTelegramFocus(false)}
              onChange={(e) =>
                handleInput(
                  e.target.value,
                  setTelegram,
                  setIsValidTelegram,
                  telegramRegex,
                )
              }
              className={`bg-inherit border-x-transparent border-t-transparent  border-[2px] ${isValidTelegram && telegram ? "border-b-green-500" : ""} ${!isValidTelegram && telegram ? "border-b-red-500" : ""} focus:outline-none text-white`}
            />
            {(telegramFocus && telegram && !isValidTelegram) ||
              mouseOverTelegram ? (
              <Hint type={"telegram"} />
            ) : null}
          </div>
          <button
            disabled={!isValidViber || !isValidTelegram || !isValidPhone}
            onClick={handleSaveContacts}
            className={`p-2 ${isContactsSaved ? "bg-green-500" : "bg-white"}`}
          >
            Зберегти контакти
          </button>
        </div>
      </div>
    </>
  );
};

export default AdditionalFields;
