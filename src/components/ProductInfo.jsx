import { Link } from "react-router-dom";
import "../App.css";
import { useEffect, useState } from "react";
import useAPIMainImage from "../hooks/useAPIMainImage";
import GreenButton from "./GreenButton";

const ProductInfo = ({ item }) => {
  const image = useAPIMainImage(item.productId);

  return (
    <>
      <Link
        className="flex flex-col no-underline border-black gap-2 border-solid border-[1px] p-4 rounded-[1rem] hover:bg-zinc-200 transition"
        to={`../product/${item.productId}`}
      >
        <img
          src={
            image
              ? `data:image/jpeg;base64,${image}`
              : `/src/assets/not-found-removebg-preview.png`
          }
          alt="image"
          className="rounded-[1rem] aspect-square w-[13rem]"
        />
        <span className="font-sans font-semibold text-black">{item.title}</span>
        <span className="font-sans  text-zinc-600 text-[1.2rem]">
          {item.price}₴
        </span>
        <GreenButton hasHover={true}>Add to favourites</GreenButton>
      </Link>
    </>
  );
};
export default ProductInfo;
