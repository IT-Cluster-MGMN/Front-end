import { useState } from "react";
import ProductInfoCreate from "./ProductInfoCreate";
import ProductImageCreate from "./ProductImageCreate";
import useAddProduct from "../../../hooks/useAddProduct";
import useUsername from "../../../hooks/useUsername";

const ProductBox = () => {
  const [productInfo, setProductInfo] = useState(null);

  const username = useUsername();

  const [productImages, setProductImages] = useState(null);

  const handleInfoSubmit = (e) => {
    setProductInfo(e);
  };

  const handleImageSubmit = (e) => {
    setProductImages(e);
  };

  const handleSubmit = () => {
    useAddProduct(productInfo, productImages);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col w-[80%] gap-y-4 bg-zinc-300 p-[2rem] rounded-[1rem]">
          <div className="flex flex-row  gap-x-4 w-full">
            <ProductImageCreate
              onSubmit={(e) => {
                handleImageSubmit(e);
              }}
            />
            <ProductInfoCreate
              onSubmit={(e) => {
                handleInfoSubmit(e);
              }}
              username={username}
            />
          </div>
          <button className="self-center w-[70%]" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductBox;
