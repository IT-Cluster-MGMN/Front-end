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
  hide,
  onHide,
  hidden,
  placeholder,
}) => {
  return (
    <>
      <div className="flex gap-1 flex-row w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center gap-2">
            {label ? (
              <label
                className={`${lightTheme ? "text-black" : "text-white"} ${hidden ? "text-zinc-400" : ""} font-bold font-sans`}
              >
                {label}
              </label>
            ) : null}
            {field && !isValidField && onMouseOutInfo && onMouseOverInfo ? (
              <FaCircleInfo
                color={lightTheme ? "black" : "white"}
                onMouseOver={onMouseOverInfo}
                onMouseOut={onMouseOutInfo}
              />
            ) : null}
          </div>
          {inputType === "password" ? (
            <div className=" w-full flex flex-row items-center">
              <input
                className={`w-full ${lightTheme ? "text-black" : "text-white"} ${hidden ? "text-zinc-400" : ""} bg-inherit shadow-none border-t-transparent  ${field && !isValidField ? "border-b-red-500" : ""} ${field && isValidField ? "border-b-green-500" : ""} border-x-transparent border-[2px] focus:outline-none`}
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
                className="bg-inherit right-1 text-white border-none hover:scale-125 transition duration-100"
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
                  placeholder={placeholder}
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
        {hide && onHide ? (
          <>
            <input type="checkbox" onChange={onHide} checked={!hidden} />
          </>
        ) : null}
      </div>
    </>
  );
};

export default InputField;
