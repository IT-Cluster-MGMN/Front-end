import { useState } from "react";
import { BsStars } from "react-icons/bs";
import ErrorMessage from "../../../components/ErrorMessage";

const DescriptionField = ({ onChange, category, title, isValidTitle }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleAi = () => {
    if (category && title && isValidTitle) {
      //AI logic
      console.log("111");
    } else {
      setErrorMessage("Невірна назва або не вибрана категорія");
    }
  };

  return (
    <>
      <div className="flex gap-2 flex-col">
        <div className="flex flex-row items-center gap-x-2">
          <label className="font-sans font-bold text-white">Опис</label>
          <BsStars
            onClick={handleAi}
            className="text-white cursor-pointer hover:text-purple-500 transition p-1 rounded-full"
          />
        </div>
        <textarea
          onChange={(e) => onChange(e)}
          cols="30"
          rows="4"
          maxLength="500"
          className="resize-none rounded p-1 text-white bg-[rgba(50,50,50,1)] font-sans focus:outline-none"
        />
      </div>
      {errorMessage ? (
        <ErrorMessage errorMsg={errorMessage} setErrorMsg={setErrorMessage} />
      ) : null}
    </>
  );
};

export default DescriptionField;
