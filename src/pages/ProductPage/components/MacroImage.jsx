import Overlay from "@/components/Overlay";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MacroImage = ({ images, index, onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  return (
    <div className="absolute w-screen h-screen flex items-cente top-0 left-0">
      <Overlay zIndex={"z-20"} onClick={onClick} />

      <button
        className={`absolute p-2 ${currentIndex === 0 ? "" : "hover:bg-[rgba(50,50,50,0.5)]"} flex items-center rounded-full transition bg-inherit border-none z-30 text-white top-[50%] left-4`}
        onClick={() => setCurrentIndex((prev) => prev - 1)}
        disabled={currentIndex === 0}
      >
        <FaChevronLeft
          color={currentIndex === 0 ? "grey" : "white"}
          size={"2rem"}
        />
      </button>
      <button
        className={`absolute ${currentIndex === images.length + 1 ? "" : "hover:bg-[rgba(50,50,50,0.5)]"} flex items-center rounded-full p-2 bg-inherit border-none z-30 text-white top-[50%] right-4`}
        onClick={() => setCurrentIndex((prev) => prev + 1)}
        disabled={currentIndex === images.length + 1}
      >
        <FaChevronRight
          size={"2rem"}
          color={currentIndex === images.length + 1 ? "grey" : "white"}
        />
      </button>
      <div className="relative w-full items-center flex justify-center">
        <img
          className="absolute z-30 w-[30rem] aspect-square   "
          src={`data:image/jpeg;base64,${images[currentIndex]}`}
        />
      </div>
    </div>
  );
};

export default MacroImage;
