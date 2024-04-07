import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { emailRegex, passwordRegex } from "../../utils/regexPatterns.js";
import useRegisterUser from "../../hooks/useRegisterUser.js";
import PlusButton from "./components/PlusButton.jsx";
import MandatoryFields from "./components/MandatoryFields.jsx";
import AdditionalFields from "./components/AdditionalFields.jsx";
import Loading from "../../components/Loading.jsx";
import ErrorMessage from "../../components/ErrorMessage.jsx";

const RegistrationPage = () => {
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

  const [errorMsg, setErrorMsg] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    setIsComplete(false);
  }, [errorMsg]);

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
        setErrorMsg,
      );
      setIsComplete(true);
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
      {isComplete ? <Loading darkTheme={true} /> : null}
      <ErrorMessage errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
    </>
  );
};

export default RegistrationPage;
