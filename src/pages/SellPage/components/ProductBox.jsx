import { useEffect, useState } from "react";
import ProductInfoCreate from "./ProductInfoCreate";
import ProductImageCreate from "./ProductImageCreate";
import useAddProduct from "../../../hooks/useAddProduct";
import useUsername from "../../../hooks/useUsername";
import GreenButton from "../../../components/GreenButton";
import ErrorMessage from "../../../components/ErrorMessage";
import Loading from "../../../components/Loading";

const ProductBox = () => {
  const [productInfo, setProductInfo] = useState(null);

  const [isComplete, setIsComplete] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  console.log(errorMsg);

  const username = useUsername();

  const [productImages, setProductImages] = useState(null);

  const handleInfoSubmit = (e) => {
    setProductInfo(e);
  };

  const handleImageSubmit = (e) => {
    setProductImages(e);
  };

  const handleSubmit = () => {
    useAddProduct(productInfo, productImages, setErrorMsg);
    setIsComplete(true);
  };

  useEffect(() => {
    setIsComplete(false);
  }, [errorMsg]);

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
      {isComplete ? <Loading darkTheme={true} /> : null}
      <ErrorMessage errorMsg={errorMsg} setErrorMsg={errorMsg} />
    </>
  );
};

export default ProductBox;
