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
      <div className="flex gap-2 flex-col">
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
        <div className="flex flex-row items-center gap-x-2">
          <label className="font-sans font-bold text-white">Опис</label>
          <BsStars
            onClick={handleAi}
            className="text-white cursor-pointer hover:text-purple-500 transition p-1 rounded-full"
          />
        </div>
        <textarea
          onChange={(e) => handleChange(e.target.value)}
          cols="30"
          rows="4"
          maxLength="500"
          className="resize-none rounded p-1 text-white bg-[rgba(50,50,50,1)] font-sans focus:outline-none"
          value={description}
        />
      </div>
      {errorMessage ? (
        <ErrorMessage errorMsg={errorMessage} setErrorMsg={setErrorMessage} />
      ) : null}
    </>
  );
};

export default DescriptionField;
