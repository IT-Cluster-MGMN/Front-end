import { Link } from "react-router-dom";

const ProductDetails = ({item}) => {

    return(
        <>
            <Link className="flex flex-col font-sans text-black no-underline bg-white 
            hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] p-3 rounded-b-[0.4rem] rounded-tl-[0.4rem]
            transition delay-75 duration-100" to={`product/${item['id']}`}>
                <img src={item['photo']} className="self-center w-full aspect-square"/>
                <span className="font-semibold text-[1.5rem]">{item['title']}</span>
                <span className="text-zinc-500 text-[0.8rem]">category name</span>
                <span className="text-[0.8rem] line-clamp-4">{item['description']}</span>
                <span className="font-semibold text-[2rem]">{item['price']}</span>
            </Link>
        </>
    );
};
export default ProductDetails;