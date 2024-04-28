import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import useAPIMainImage from "../hooks/useAPIMainImage";
import GreenButton from "./GreenButton";
import useAddToFav from "../hooks/useAddToFav";

const ProductInfo = ({ item }) => {
  const image = useAPIMainImage(item.productId);

  const navigate = useNavigate();

  const handleAddToFav = () => {
    useAddToFav(item.productId);
  };

  const handleNavigate = () => {
    navigate(`../product/${item.productId}`);
  };

  return (
    <>
      <div className="flex flex-col no-underline border-black gap-2 border-solid border-[1px] p-4 rounded-[1rem] hover:bg-zinc-200 transition">
        <div
          onClick={handleNavigate}
          className="cursor-pointer flex flex-col gap-2"
        >
          <img
            src={
              image
                ? `data:image/jpeg;base64,${image}`
                : `/src/assets/not-found-removebg-preview.png`
            }
            alt="image"
            className="rounded-[1rem] object-cover aspect-square w-[13rem] select-none"
          />
          <span className="font-sans font-semibold text-black">
            {item.title}
          </span>
          <span className="font-sans  text-zinc-600 text-[1.2rem]">
            {item.price}₴
          </span>
        </div>
        <GreenButton onClick={handleAddToFav} hasHover={true}>
          Add to favourites
        </GreenButton>
      </div>
    </>
  );
};
export default ProductInfo;
