import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  FaCheck,
  FaTimes,
  FaInfoCircle,
  FaBorderStyle,
  FaPlus,
} from "react-icons/fa";
import useRegexValidation from "../../hooks/useRegexValidation.js";
import {
  emailRegex,
  nameRegex,
  passwordRegex,
  phoneNumberRegex,
  telegramRegex,
  viberRegex,
} from "../../utils/regexPatterns.js";
import useRegisterUser from "../../hooks/useRegisterUser.js";
import PlusButton from "./components/PlusButton.jsx";
import MandatoryFields from "./components/MandatoryFields.jsx";
import AdditionalFields from "./components/AdditionalFields.jsx";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [mandatory, setMandotory] = useState({
    username: "",
    password: "",
    match: "",
  });

  const [personal, setPersonal] = useState({
    name: null,
    surname: null,
    additional: null,
    sex: null,
    date_birth: null,
  });

  const [contacts, setContacts] = useState({
    phone: null,
    viber: null,
    telegram: null,
  });

  // Functional fields
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const handleInput = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = () => {
    if (
      emailRegex.test(mandatory.username) &&
      passwordRegex.test(mandatory.password) &&
      mandatory.password === mandatory.match
    ) {
      useRegisterUser(
        { username: mandatory.username, password: mandatory.password },
        personal,
        contacts,
      );
    } else {
      alert("Wrong mandatory information");
    }
  };

  const handleAdditional = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };

  return (
    <>
      <div className="absolute left-0 top-0  w-screen h-screen flex items-center justify-center overflow-hidden">
        <div className="bg-darkgrey w-[50%] p-8 h-[70%] rounded flex flex-col">
          <PlusButton onClick={handleAdditional} />
          {showAdditionalFields ? (
            <AdditionalFields
              onContactsSubmit={(e) => setContacts(e)}
              onPersonalSubmit={(e) => setPersonal(e)}
            />
          ) : (
            <MandatoryFields
              onValid={(e) => setMandotory(e)}
              currentData={mandatory}
            />
          )}
          <div className="grid grid-cols-2 w-full justify-around">
            <div>
              <span className="text-white font-sans">
                Already have an account?{" "}
              </span>
              <Link
                to="../login"
                className="text-green-500 font-sans no-underline hover:"
              >
                Sign in
              </Link>
            </div>
            <button
              onClick={handleSubmit}
              className="rounded border-none bg-white text-green-600 hover:bg-green-700 text-[1rem] transition duration-200 font-sans font-bold hover:text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
