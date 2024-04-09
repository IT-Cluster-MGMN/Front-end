import { useEffect, useState } from "react";
import { emailRegex, passwordRegex } from "../../../utils/regexPatterns";
import ProfilePicture from "./ProfilePicture";
import InputField from "../../../components/InputField";

const MandatoryFields = ({
  onValid,
  currentData,
  onImageChange,
  currentImage,
}) => {
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

  const [mouseOverUsername, setMouseOverUsername] = useState(false);
  const [mouseOverPassword, setMouseOverPassword] = useState(false);

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
        <ProfilePicture
          currentImage={currentImage}
          onChange={(e) => onImageChange(e)}
        />
        <div className="flex flex-col text-white font-sans gap-4  w-full justify-center h-full">
          <InputField
            label="Email"
            onMouseOverInfo={() => setMouseOverUsername(true)}
            onMouseOutInfo={() => setMouseOverUsername(false)}
            field={username}
            isValidField={isValidUsername}
            setField={setUsername}
            hintTag={"email"}
            inputType={"email"}
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
            isFocus={usernameFocus}
            isMouseOver={mouseOverUsername}
          />
          <InputField
            label="Password"
            onMouseOverInfo={() => setMouseOverPassword(true)}
            onMouseOutInfo={() => setMouseOverPassword(false)}
            field={password}
            isValidField={isValidPassword}
            setField={setPassword}
            hintTag={"password"}
            inputType={"password"}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            isFocus={passwordFocus}
            isMouseOver={mouseOverPassword}
            isPwdShown={showPassword}
            onPwdShow={handleShowPassword}
          />
          <InputField
            label="Confirm password"
            field={match}
            isValidField={isValidMatch}
            setField={setMatch}
            inputType={"password"}
            isPwdShown={showMatch}
            onPwdShow={handleShowMatch}
          />
        </div>
      </div>
    </>
  );
};

export default MandatoryFields;
