import { Link } from "react-router-dom";
import "../App.css";

const ProductInfo = ({item}) => {

    return(
        <>
            <Link className="card" to={`../product/${item.productId}`}>
                <img src={`/src/assets/not-found.png`} alt="image" className="card-image"/>
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