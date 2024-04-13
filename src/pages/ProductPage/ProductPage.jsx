import Navbar from "@/components/Navbar/Navbar.jsx";
import { Link, useParams } from "react-router-dom";
import useProductInfo from "../../hooks/useProductInfo";
import Loading from "@/components/Loading.jsx";
import { useEffect, useState } from "react";
import ProductInfo from "./components/ProductInfo";
import useAPIMinorImage from "../../hooks/useAPIMinorImages";
import AdditionalInfo from "./components/AdditionalInfo";
import useSellerAvatar from "../../hooks/useSellerAvatar";
import useSellerContacts from "../../hooks/useSellerContacts";
import useSellerPersonal from "../../hooks/useSellerPersonal";

const ProductPage = () => {
  const { productId } = useParams();

  const productInfo = useProductInfo(productId);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    if (productInfo) {
      console.log(11);
      setUsername(productInfo.username);
    }
  }, [productInfo]);

  const personal = useSellerPersonal(username);
  const contacts = useSellerContacts(username);
  const avatar = "data:image/jpeg;base64," + useSellerAvatar(username);
  const minorImages = useAPIMinorImage(productId);

  const [isAdditionalInfo, setIsAdditionalInfo] = useState(false);

  return (
    <div className="flex flex-col items-center absolute top-0 left-0 w-screen h-screen overflow-hidden">
      <Navbar />
      {productInfo && minorImages && personal && contacts && avatar ? (
        <div className="flex flex-col p-4 w-[80%] max-w-[100rem] bg-zinc-200 gap-2 h-full">
          <h1 className="font-sans m-0 font-bold text-darkgrey">
            {productInfo.title}
          </h1>
          <Link className="m-0 font-sans text-darkgrey no-underline hover:text-green-600 font-light text-[1.2rem]">
            {productInfo.category}
          </Link>
          <div className="flex flex-row w-[30rem] self-center justify-around border-solid border-[0px] border-b-darkgrey border-b-[2px] rounded">
            <span
              className={`${!isAdditionalInfo ? "text-green-600" : "text-darkgrey"} cursor-pointer font-sans hover:bg-zinc-100 w-full rounded-l transition text-center`}
              onClick={() => setIsAdditionalInfo(false)}
            >
              Product
            </span>
            <span
              className={`${isAdditionalInfo ? "text-green-600" : "text-darkgrey"} font-sans cursor-pointer hover:bg-zinc-100 rounded-r transition text-center w-full`}
              onClick={() => setIsAdditionalInfo(true)}
            >
              Seller
            </span>
          </div>

          {isAdditionalInfo ? (
            <AdditionalInfo
              username={username}
              personal={personal}
              contacts={contacts}
              avatar={avatar}
            />
          ) : (
            <ProductInfo minorImages={minorImages} productInfo={productInfo} />
          )}
        </div>
      ) : (
        <Loading darkTheme={true} />
      )}
    </div>
  );
};

export default ProductPage;
