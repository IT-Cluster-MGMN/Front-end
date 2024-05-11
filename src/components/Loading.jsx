import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ImSpinner } from "react-icons/im";

const Loading = ({ darkTheme }) => {
  return (
    <div className="absolute w-screen h-full overflow-hidden justify-center top-0 left-0 z-20 flex items-center bg-[rgba(0,0,0,0.5)]">
      <div className="fixed top-[50%] flex flex-row justify-center w-screen items-center gap-2">
        <span
          className={`${darkTheme ? "text-white" : "text-black"} text-[1.5rem] font-sans font-bold`}
        >
          Завантаження
        </span>
        <ImSpinner
          className="animate-spin"
          color={`${darkTheme ? "white" : "black"}`}
          size={"1.5rem"}
        />
      </div>
    </div>
  );
};

export default Loading;
