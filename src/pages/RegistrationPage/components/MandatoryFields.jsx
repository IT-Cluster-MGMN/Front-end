import { useEffect, useState } from "react";
import useRegexValidation from "../../../hooks/useRegexValidation";
import {
  emailRegex,
  nameRegex,
  passwordRegex,
} from "../../../utils/regexPatterns";
import {
  FaCircleInfo,
  FaEye,
  FaEyeSlash,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa6";
import ProfilePicture from "./ProfilePicture";
import Hint from "./Hint";

const MandatoryFields = ({ onValid, currentData }) => {
  const [username, setUsername] = useState(currentData.username);
  const [isValidUsername, setIsValidUsername] = useState(false);
  useEffect(() => {
    setIsValidUsername(emailRegex.test(username));
  }, [username]);

  const [password, setPassword] = useState(currentData.password);
  const [isValidPassword, setIsValidPassword] = useState(false);
  useEffect(() => {
    setIsValidPassword(passwordRegex.test(password));
  }, [password]);

  const [match, setMatch] = useState(currentData.match);
  const [isValidMatch, setIsValidMatch] = useState(false);
  useEffect(() => {
    setIsValidMatch(match === password);
  }, [password, match]);

  const [showPassword, setShowPassword] = useState(false);
  const [showMatch, setShowMatch] = useState(false);

  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [mouseOverUsername, setMouseOverUsername] = useState(false);
  const [mouseOverPassword, setMouseOverPassword] = useState(false);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowMatch = () => {
    setShowMatch(!showMatch);
  };

  useEffect(() => {
    onValid({ username, password, match });
  }, [username, password, match]);

  return (
    <>
      <div className="grid grid-cols-2 w-full h-full">
        <ProfilePicture />
        <div className="flex flex-col text-white font-sans gap-4  w-full justify-center h-full">
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center gap-2">
              <label>Email</label>
              {username && !isValidUsername ? (
                <FaCircleInfo
                  onMouseOver={() => setMouseOverUsername(true)}
                  onMouseOut={() => setMouseOverUsername(false)}
                />
              ) : null}
            </div>
            <div className="w-full">
              <div className="flex flex-row">
                <input
                  className={`w-full text-white bg-inherit shadow-none border-t-transparent  ${username && !isValidUsername ? "border-b-red-500" : ""} ${username && isValidUsername ? "border-b-green-500" : ""} border-x-transparent border-[2px] focus:outline-none`}
                  type="email"
                  onFocus={() => setUsernameFocus(true)}
                  onBlur={() => setUsernameFocus(false)}
                  onChange={(e) => {
                    handleInputChange(e, setUsername);
                  }}
                  value={username}
                />
              </div>
            </div>
            {(usernameFocus && !isValidUsername && username) ||
              mouseOverUsername ? (
              <Hint type={"email"} />
            ) : null}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <label>Password</label>
              {password && !isValidPassword ? (
                <FaCircleInfo
                  onMouseOver={() => setMouseOverPassword(true)}
                  onMouseOut={() => setMouseOverPassword(false)}
                />
              ) : null}
            </div>
            <div className="relative w-full flex flex-row items-center">
              <input
                className={`w-full text-white bg-inherit shadow-none border-t-transparent  ${password && !isValidPassword ? "border-b-red-500" : ""} ${password && isValidPassword ? "border-b-green-500" : ""} border-x-transparent border-[2px] focus:outline-none`}
                type={showPassword ? "text" : "password"}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                onChange={(e) => {
                  handleInputChange(e, setPassword);
                }}
                value={password}
              />
              <button
                onClick={handleShowPassword}
                className="bg-inherit right-1 absolute text-white border-none hover:scale-125 transition duration-100"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {(passwordFocus && password && !isValidPassword) ||
              mouseOverPassword ? (
              <Hint type={"password"} />
            ) : null}
          </div>
          <div className="flex flex-col">
            <label>Confirm Password</label>
            <div className="relative w-full flex flex-row items-center">
              <input
                onChange={(e) => handleInputChange(e, setMatch)}
                type={showMatch ? "text" : "password"}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                className={`text-white w-full bg-inherit shadow-none border-t-transparent  ${match && !isValidMatch ? "border-b-red-500" : ""} ${match && isValidMatch ? "border-b-green-500" : ""} border-x-transparent border-[2px] focus:outline-none`}
                value={match}
              />
              <button
                onClick={handleShowMatch}
                className="right-1 bg-inherit  text-white border-none hover:scale-125 transition duration-100 absolute"
              >
                {showMatch ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MandatoryFields;
