import { Link } from "react-router-dom";
import "../App.css";
import { useEffect, useState } from "react";
import useAPIMainImage from "../hooks/useAPIMainImage";

const ProductInfo = ({item}) => {

  const image = useAPIMainImage(item.id);

    return(
        <>
            <Link className="card" to={`../product/${item.productId}`}>
                <img src={image ? image : `/src/assets/not-found.png`} alt="image" className="card-image"/>
                <span className="card-title">{item.title}</span>
                {/* <span className="text-zinc-500 text-[0.8rem]">category name</span> */}
                <span className="card-price">{item.price}</span>
                <button className="add-to-cart">Add to Favourites</button>
                {/* <span className="text-[0.8rem] line-clamp-3 break-all">{item.description}</span> */}

            </Link>
        </>
    );
};
export default ProductInfo;
