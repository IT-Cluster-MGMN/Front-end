import useAPIMainImage from "../../../hooks/useAPIMainImage";
import notFound from "@/assets/not-found-removebg-preview.png";
import useAPIMinorImage from "../../../hooks/useAPIMinorImages";
import { useState } from "react";
import MacroImage from "../../ProductPage/components/MacroImage";
import { IoTrashBin } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useDeleteMyProduct from "../../../hooks/useDeleteMyProduct";

const MyProductInfo = ({ data }) => {
  const navigate = useNavigate();
  const imagesJson = useAPIMinorImage(data.productId);
  const images = [];
  for (let i = 0; i < imagesJson.length; i++) {
    images.push(imagesJson[i].photo);
  }
  const [showMacroImage, setShowMacroImage] = useState(false);
  const [largeImage, setLargeImage] = useState(0);

  const handleMacroImage = () => {
    setShowMacroImage(true);
  };

  const handleLargeImage = (index) => {
    setLargeImage(index);
  };

  const handleProdClick = () => {
    navigate(`/product/${data.productId}`);
  };

  const handleDeletion = () => {
    useDeleteMyProduct(data.productId);
  };

  return (
    <>
      {data ? (
        <>
          <div className="flex gap-4 flex-row bg-white p-3 rounded">
            <div className="flex flex-row w-fit gap-2">
              <img
                src={
                  images
                    ? "data:image/jpeg;base64," + images[largeImage]
                    : notFound
                }
                onClick={handleMacroImage}
                className=" object-cover w-[10rem] aspect-square rounded"
              />
              <div className="flex flex-col w-fit h-[10rem] gap-1  items-center overflow-y-scroll">
                {images.map((image, index) => (
                  <img
                    src={`data:image/jpeg;base64,${image}`}
                    className={`transition w-[4rem] object-cover aspect-square ${index === largeImage ? "brightness-[40%]" : ""} rounded`}
                    onClick={() => handleLargeImage(index)}
                    onDoubleClick={() => handleMacroImage(index)}
                  />
                ))}
              </div>
            </div>
            <div
              onClick={handleProdClick}
              className="flex flex-col  bg-white h-full w-[40%]"
            >
              <span
                onClick={handleProdClick}
                className="font-sans cursor-pointer hover:underline font-semibold"
              >
                {data.title}
              </span>
              <span className="font-sans text-zinc-700">{data.price}₴</span>
            </div>
            <div className="bg-white h-[10rem] overflow-y-scroll w-full">
              <span className="font-sans">{data.description}</span>
            </div>
            {/* <div className="flex flex-col w-[10%]"> */}
            {/*   <IoTrashBin */}
            {/*     onClick={handleDeletion} */}
            {/*     color="green" */}
            {/*     className="h-full transition px-2 hover:bg-zinc-300 rounded cursor-pointer" */}
            {/*   /> */}
            {/* </div> */}
          </div>
          {showMacroImage ? (
            <MacroImage
              images={images}
              index={largeImage}
              onClick={() => setShowMacroImage(false)}
            />
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default MyProductInfo;
