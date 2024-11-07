import GreenButton from "@/components/GreenButton.jsx";
import { BsFillHeartFill, BsChatFill } from "react-icons/bs";
import noImage from "../../../../public/images/no-image.png"
import { useState } from "react";
import MacroImage from "./MacroImage";
import useAddToFav from "../../../hooks/useAddToFav";
import useIsFav from "../../../hooks/useIsFav";

const ProductInfo = ({ productInfo, minorImages }) => {
  const [largeImage, setLargeImage] = useState(0);

  const [isFav, setIsFav] = useIsFav(productInfo.productId);

  const images = [];
  for (let i = 0; i < minorImages.length; i++) {
    images.push(minorImages[i].photo);
  }

  const handleMacroImage = (index) => {
    setShowMacroImage(true);
  };

  const handleLargeImage = (index) => {
    setLargeImage(index);
  };

  const handleAddToFav = (id) => {
    useAddToFav(id);
    setIsFav(true);
  };

  const [showMacroImage, setShowMacroImage] = useState(false);
  return (
    <>
      <div className="flex flex-row items-center h-full  p-4 gap-2">
        <div className="h-[20rem] flex flex-row self-start gap-2">
          <img
            src={
              minorImages
                ? `data:image/jpeg;base64,${images[largeImage]}`
                : noImage
            }
            className="aspect-square object-cover h-full rounded "
            onClick={() => handleMacroImage(0)}
          />
          <div className="flex flex-col w-[6rem] h-full gap-1  items-center overflow-y-scroll">
            {images.map((image, index) => (
              <img
                src={`data:image/jpeg;base64,${image}`}
                className={`transition w-[5rem] object-cover aspect-square ${index === largeImage ? "brightness-[40%]" : ""} rounded`}
                onClick={() => handleLargeImage(index)}
                onDoubleClick={() => handleMacroImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="flex  flex-col gap-2 w-full  self-start h-[20rem]">
          <div className="flex flex-col gap-1">
            <label className="font-sans text-[1.2rem] font-semibold">
              Опис
            </label>
            <span className="h-[7rem] overflow-y-scroll break-words max-w-full font-sans font-light">
              {productInfo.description}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-sans text-[1.2rem] font-semibold">
              Ціна
            </label>
            <span className="h-[7rem] text-[2rem] overflow-y-scroll font-sans font-light">
              {productInfo.price}₴
            </span>
          </div>
          <div className="flex flex-row h-full justify-around items-end">
            <GreenButton hasHover={true}>
              <div className="flex flex-row gap-1 items-center">
                <BsChatFill />
                Написати продавцю
              </div>
            </GreenButton>
            <GreenButton hasHover={!isFav}>
              {isFav ? (
                <div
                  onClick={() => handleAddToFav(productInfo.productId)}
                  className="flex items-center flex-row gap-1"
                >
                  <BsFillHeartFill className="text-red-500" />
                  Додано до улюблених
                </div>
              ) : (
                <div
                  onClick={() => handleAddToFav(productInfo.productId)}
                  className="flex items-center flex-row gap-1"
                >
                  <BsFillHeartFill />
                  Додати до улюблених
                </div>
              )}
            </GreenButton>
          </div>
        </div>
      </div>
      {showMacroImage ? (
        <MacroImage
          images={images}
          index={largeImage}
          onClick={() => setShowMacroImage(false)}
        />
      ) : null}
    </>
  );
};

export default ProductInfo;
