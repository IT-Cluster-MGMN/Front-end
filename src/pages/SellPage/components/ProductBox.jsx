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

  const username = useUsername();

  const [productImages, setProductImages] = useState(null);
  console.log(productInfo, productImages);

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
      <div className="flex flex-row w-full h-[50rem] justify-center ">
        <div className="flex flex-col w-[70%] h-full gap-y-[2rem] bg-darkgrey p-[2rem] ">
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
          <GreenButton
            disabled={
              productImages?.[0] === undefined ||
              productInfo?.username === null ||
              productInfo?.title === undefined ||
              productInfo?.description === undefined ||
              productInfo?.category === undefined ||
              productInfo?.price === undefined
            }
            hasHover={
              !(
                productImages?.[0] === undefined ||
                productInfo?.username === null ||
                productInfo?.title === undefined ||
                productInfo?.description === undefined ||
                productInfo?.category === undefined ||
                productInfo?.price === undefined
              )
            }
            onClick={handleSubmit}
          >
            Оприлюднити
          </GreenButton>
        </div>
      </div>
      {isComplete ? <Loading darkTheme={true} /> : null}
      <ErrorMessage errorMsg={errorMsg} setErrorMsg={errorMsg} />
    </>
  );
};

export default ProductBox;
