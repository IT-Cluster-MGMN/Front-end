import { useState } from "react";
import { BsStars } from "react-icons/bs";
import ErrorMessage from "../../../components/ErrorMessage";
import axios from "axios";

const DescriptionField = ({ onChange, category, title, isValidTitle }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [color, setColor] = useState("");
  const [isAi, setIsAi] = useState(false);
  const [description, setDescription] = useState("");

  const handleAi = () => {
    if (isAi) {
      if (category && title && isValidTitle && color) {
        const aiEndpoint = "http://192.168.0.105:5175/gpt_request";
        axios
          .post(aiEndpoint, {
            category: category,
            item: title,
            color: color,
            language: "українська",
          })
          .then((res) => {
            setDescription(res.data.description);
          })
          .catch((err) => console.log(err));
      } else {
        setErrorMessage(
          "Невірна назва, або не вибрана категорія, або не вказано колір",
        );
      }
    } else {
      setIsAi(true);
    }
  };

  const handleChange = (e) => {
    setDescription(e);
    onChange(e);
  };

  return (
    <>
      <div className="flex gap-4 flex-col">
        <div
          className={`${isAi ? "h-[3rem]" : "h-0"} transition-all w-full flex flex-col gap-2`}
        >
          <label
            className={`${isAi ? "h-full" : "text-darkgrey h-0 text-[0rem]"} transition-transform delay-75 font-sans font-bold text-white`}
          >
            Колір
          </label>
          <input
            className={`${isAi ? "h-full" : "h-0 opacity-0"} w-[98%] bg-inherit border-t-transparent border-[2px] rounded border-b-purple-500 transition-transform border-x-transparent text-white font-sans focus:outline-none delay-75`}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-x-2">
            <label className="font-sans font-bold text-white">Опис</label>
            <div
              className={`p-1 overflow-hidden ${isAi ? "px-3 bg-zinc-300 w-fit text-purple-500 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-indigo-400 hover:to-purple-500 cursor-pointer border-[1.5px] border-solid border-transparent hover:border-white" : "bg-inherit hover:text-purple-500 text-white w-[1rem]"} transition-all cursor-pointer gap-1 rounded-[1rem] items-center flex flex-row`}
              onClick={handleAi}
            >
              <BsStars className=" cursor-pointer rounded-full" />
              {isAi ? (
                <>
                  <label className="font-sans cursor-pointer  text-[0.9rem] font-semibold">
                    Згенерувати опис
                  </label>
                </>
              ) : null}
            </div>
          </div>
          <textarea
            onChange={(e) => handleChange(e.target.value)}
            cols="30"
            rows="7"
            maxLength="2000"
            className="resize-none rounded p-1 text-white bg-[rgba(50,50,50,1)] font-sans focus:outline-none"
            value={description}
          />
        </div>
      </div>
      {errorMessage ? (
        <ErrorMessage errorMsg={errorMessage} setErrorMsg={setErrorMessage} />
      ) : null}
    </>
  );
};

export default DescriptionField;
