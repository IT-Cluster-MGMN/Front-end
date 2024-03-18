import { useState } from "react";
import { FaCircleInfo, FaCross } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Hint = ({ type }) => {
  const hints = {
    email:
      "Use a valid email format like 'example@email.com'. Alphanumeric characters, dots, underscores, and hyphens are allowed before '@'.",
    password:
      "Your password must be 8-20 characters long, allowing only letters (both cases), numbers, and hyphens.",
    name: "Enter a valid name with 2-20 characters, using only letters. Special characters and numbers are not allowed in this field.",
    viber:
      "Add a Viber username starting with a letter, followed by 6 to 25 characters consisting of letters, numbers, or underscores.",
    telegram:
      "Your Telegram username should start with '@' and consist of 5-32 characters, including letters, numbers, or underscores.",
  };

  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] text-white font-sans shadow-[2rem] backdrop-blur-[2px] z-10 gap-2 rounded p-2 w-[19rem] mt-12  flex flex-row">
      <div className="relative flex flex-row">
        <FaCircleInfo className="justify-self-center w-[25%] self-center" />
        <span className="line-clamp-4 text-[0.8rem] font-semibold">
          {hints[type]}
        </span>
      </div>
    </div>
  );
};

export default Hint;
