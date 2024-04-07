import { useEffect } from "react";
import { IoIosAlert } from "react-icons/io";
const ErrorMessage = ({ errorMsg, setErrorMsg }) => {
  useEffect(() => {
    window.setTimeout(() => setErrorMsg(""), 8000);
  }, [errorMsg]);
  return (
    <div
      onClick={() => setErrorMsg("")}
      className={`${errorMsg ? "opacity-100 w-[15rem] h-[4rem] top-5  bg-red-500" : "bg-transparen top-0  opacity-0 h-0 z-0 w-0"} right-5 duration-600 absolute transition-all cursor-pointer flex   overflow-hidden flex-row items-center gap-1 p-2 z-50  rounded    `}
    >
      {errorMsg ? <IoIosAlert color="white" /> : null}
      {errorMsg ? (
        <span className="font-sans text-white">{errorMsg}</span>
      ) : null}
    </div>
  );
};

export default ErrorMessage;
