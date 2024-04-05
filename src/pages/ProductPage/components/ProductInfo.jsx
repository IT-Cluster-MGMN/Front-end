import GreenButton from "@/components/GreenButton.jsx";
import { BsFillHeartFill, BsChatFill } from "react-icons/bs";
import notFound from "@/assets/not-found-removebg-preview.png";
import { useState } from "react";
import MacroImage from "./MacroImage";

const ProductInfo = ({ productInfo, mainImage, minorImages }) => {
  const testImageArr = [];
  for (let i = 0; i < 10; i++) {
    testImageArr.push(notFound);
  }
  const [macroImage, setMacroImage] = useState(0);
  const images = [mainImage, ...testImageArr];

  const handleMacroImage = (index) => {
    setMacroImage(index);
    setShowMacroImage(true);
  };
  const [showMacroImage, setShowMacroImage] = useState(false);
  return (
    <>
      <div className="flex flex-row items-center h-full  p-4 gap-2">
        <div className="h-[20rem] flex flex-row self-start gap-2">
          <img
            src={mainImage ? `data:image/jpeg;base64,${mainImage}` : notFound}
            className="aspect-square h-full rounded "
            onClick={() => handleMacroImage(0)}
          />
          <div className="flex flex-col w-[6rem] h-full gap-1  items-center overflow-y-scroll">
            {testImageArr.map((image, index) => (
              <img
                src={`${image}`}
                className="w-[5rem] aspect-square "
                onClick={() => handleMacroImage(index + 1)}
              />
            ))}
          </div>
        </div>
        <div className="flex  flex-col gap-2 w-full  self-start h-[20rem]">
          <div className="flex flex-col gap-1">
            <label className="font-sans text-[1.2rem] font-semibold">
              Description
            </label>
            <span className="h-[7rem] overflow-y-scroll font-sans font-light">
              {productInfo.description}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[2rem] font-extralight">
              {productInfo.price}₴
            </span>
          </div>
          <div className="flex flex-row h-full justify-around items-end">
            <GreenButton hasHover={true}>
              <div className="flex flex-row gap-1 items-center">
                <BsChatFill />
                Chat with seller
              </div>
            </GreenButton>
            <GreenButton hasHover={true}>
              <div className="flex items-center flex-row gap-1">
                <BsFillHeartFill />
                Add to favourites
              </div>
            </GreenButton>
          </div>
        </div>
      </div>
      {showMacroImage ? (
        <MacroImage
          images={images}
          index={macroImage}
          onClick={() => setShowMacroImage(false)}
        />
      ) : null}
    </>
  );
};

export default ProductInfo;
