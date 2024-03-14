import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const PlusButton = ({ onClick }) => {
  const [isMinusSign, setIsMinusSign] = useState(false);

  const handleClick = () => {
    onClick();
    setIsMinusSign(!isMinusSign);
  };
  return (
    <button
      onClick={handleClick}
      className="w-[2rem] h-[2rem] hover:transition-all justify-between  duration-500 rounded-full p-2 border-none hover:bg-green-700 bg-white relative hover:w-[12rem] items-center group  flex flex-row self-end overflow-hidden"
    >
      <span className="text-[0px] text-black font-sans  font-bold group-hover:text-[0.9rem] group-hover:text-white line-clamp-1 opacity-0 group-hover:opacity-100 transition-all   ">
        {isMinusSign ? "Mandatory fields" : "Additional fields"}
      </span>
      {isMinusSign ? (
        <FaMinus
          size={"1rem"}
          className="group-hover:text-white text-green-700"
        />
      ) : (
        <FaPlus
          size={"1rem"}
          className="group-hover:text-white text-green-700"
        />
      )}
    </button>
  );
};

export default PlusButton;
