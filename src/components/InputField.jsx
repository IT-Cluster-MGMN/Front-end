import Hint from "../pages/RegistrationPage/components/Hint";
import {
  FaCircleInfo,
  FaEye,
  FaEyeSlash,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa6";

const InputField = ({
  label,
  onMouseOverInfo,
  onMouseOutInfo,
  field,
  isValidField,
  setField,
  hintTag,
  inputType,
  onFocus,
  onBlur,
  isFocus,
  isMouseOver,
  isPwdShown,
  onPwdShow,
  lightTheme,
}) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center gap-2">
          {label ? (
            <label
              className={`${lightTheme ? "text-black" : "text-white"} font-sans`}
            >
              {label}
            </label>
          ) : null}
          {field && !isValidField && onMouseOutInfo && onMouseOverInfo ? (
            <FaCircleInfo
              onMouseOver={onMouseOverInfo}
              onMouseOut={onMouseOutInfo}
            />
          ) : null}
        </div>
        {inputType === "password" ? (
          <div className="relative w-full flex flex-row items-center">
            <input
              className={`w-full ${lightTheme ? "text-black" : "text-white"}  bg-inherit shadow-none border-t-transparent  ${field && !isValidField ? "border-b-red-500" : ""} ${field && isValidField ? "border-b-green-500" : ""} border-x-transparent border-[2px] focus:outline-none`}
              type={isPwdShown ? "text" : "password"}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => {
                setField(e.target.value);
              }}
              value={field}
            />
            <button
              onClick={onPwdShow}
              className="bg-inherit right-1 absolute text-white border-none hover:scale-125 transition duration-100"
            >
              {isPwdShown ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex flex-row">
              <input
                className={`w-full ${lightTheme ? "text-black" : "text-white"} bg-inherit shadow-none border-t-transparent  ${field && !isValidField ? "border-b-red-500" : ""} ${field && isValidField ? "border-b-green-500" : ""} border-x-transparent border-[2px] focus:outline-none`}
                type={inputType}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={(e) => {
                  setField(e.target.value);
                }}
                value={field}
              />
            </div>
          </div>
        )}

        {(isFocus && !isValidField && field && hintTag) ||
          (isMouseOver && hintTag) ? (
          <Hint type={hintTag} />
        ) : null}
      </div>
    </>
  );
};

export default InputField;
