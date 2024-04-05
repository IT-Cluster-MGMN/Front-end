import Navbar from "@/components/Navbar/Navbar.jsx";
import { Link, useParams } from "react-router-dom";
import useProductInfo from "../../hooks/useProductInfo";
import Loading from "@/components/Loading.jsx";
import { useState } from "react";
import ProductInfo from "./components/ProductInfo";
import useAPIMainImage from "../../hooks/useAPIMainImage";

const ProductPage = () => {
  const { productId } = useParams();

  const productInfo = useProductInfo(productId);
  const mainImage = useAPIMainImage(productId);

  const [isAdditionalInfo, setIsAdditionalInfo] = useState(false);

  return (
    <div className="flex flex-col items-center absolute top-0 left-0 w-screen h-screen overflow-hidden">
      <Navbar />
      {productInfo && mainImage ? (
        <div className="flex flex-col p-4 w-[80%] max-w-[100rem] bg-zinc-200 gap-2 h-full">
          <h1 className="font-sans m-0 font-bold text-darkgrey">
            {productInfo.title}
          </h1>
          <Link className="m-0 font-sans text-darkgrey no-underline hover:text-green-600 font-light text-[1.2rem]">
            Category
          </Link>
          <div className="flex flex-row w-[30rem] self-center justify-around border-solid border-[0px] border-b-darkgrey border-b-[2px] rounded">
            <span
              className={`${!isAdditionalInfo ? "text-green-600" : "text-darkgrey"} font-sans hover:bg-zinc-100 w-full rounded-l transition text-center`}
              onClick={() => setIsAdditionalInfo(false)}
            >
              Main
            </span>
            <span
              className={`${isAdditionalInfo ? "text-green-600" : "text-darkgrey"} font-sans hover:bg-zinc-100 rounded-r transition text-center w-full`}
              onClick={() => setIsAdditionalInfo(true)}
            >
              Additional
            </span>
          </div>

          {isAdditionalInfo ? (
            <></>
          ) : (
            <ProductInfo mainImage={mainImage} productInfo={productInfo} />
          )}
        </div>
      ) : (
        <Loading darkTheme={true} />
      )}
    </div>
  );
};

export default ProductPage;
