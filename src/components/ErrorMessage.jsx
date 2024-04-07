import { useEffect } from "react";
import { IoIosAlert } from "react-icons/io";
const ErrorMessage = ({ errorMsg, setErrorMsg }) => {
  useEffect(() => {
    window.setTimeout(() => setErrorMsg(""), 8000);
  }, [errorMsg]);
  return (
    <div
      onClick={() => setErrorMsg("")}
      className={`${errorMsg ? "opacity-100" : "opacity-0"} delay-75 duration-300 absolute transition cursor-pointer flex w-[15rem] h-[4rem] overflow-hidden flex-row items-center gap-1 p-2 z-50 top-5 right-5 rounded bg-red-500   `}
    >
      <IoIosAlert color="white" />
      <span className="font-sans text-white">{errorMsg}</span>
    </div>
  );
};

export default ErrorMessage;
