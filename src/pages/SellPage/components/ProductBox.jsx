import { useState } from "react";
import ProductInfoCreate from "./ProductInfoCreate";
import ProductImageCreate from "./ProductImageCreate";
import useAddProduct from "../../../hooks/useAddProduct";
import useUsername from "../../../hooks/useUsername";
import GreenButton from "../../../components/GreenButton";

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
      <div className="flex flex-row w-full h-full justify-center">
        <div className="flex flex-col w-[70%]   gap-y-4 bg-darkgrey p-[2rem] ">
          <div className="flex flex-row  gap-x-4 w-full">
            <ProductImageCreate
              onChange={(e) => {
                handleImageSubmit(e);
              }}
            />
            <ProductInfoCreate
              onChange={(e) => {
                handleInfoSubmit(e);
              }}
              username={username}
            />
          </div>
          <GreenButton hasHover={true} onClick={handleSubmit}>
            Submit
          </GreenButton>
        </div>
      </div>
    </>
  );
};

export default ProductBox;
