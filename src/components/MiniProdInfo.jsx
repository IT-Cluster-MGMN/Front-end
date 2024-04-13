import { useNavigate } from "react-router-dom";
import useAPIMainImage from "../hooks/useAPIMainImage";
import useProductInfo from "../hooks/useProductInfo";
import { GiCancel } from "react-icons/gi";
import useRemoveFav from "../hooks/useRemoveFav";

const MiniProdInfo = ({ id }) => {
  const productInfo = useProductInfo(id);
  const mainImage = "data:image/jpeg;base64," + useAPIMainImage(id);

  const navigate = useNavigate();

  const handleRemoveClick = () => {
    useRemoveFav(id);
  };

  return (
    <>
      {productInfo && mainImage ? (
        <div className="flex gap-2 hover:bg-zinc-200 font-sans items-center bg-zinc-100 rounded  shadow-lg flex-row p-2 overflow-hidden">
          <img
            onClick={() => navigate(`../product/${id}`)}
            src={mainImage}
            className="aspect-square  w-[3rem] rounded cursor-pointer"
          />
          <div
            onClick={() => navigate(`../product/${id}`)}
            className="flex flex-col w-full cursor-pointer"
          >
            <div className="flex flex-row justify-between">
              <span>{productInfo.title}</span>
              <span>{productInfo.price}</span>
            </div>
            <span>{productInfo.username}</span>
          </div>
          <GiCancel
            onClick={handleRemoveClick}
            size={"1.5rem"}
            className="bg-inherit cursor-pointer hover:bg-[rgba(30,30,30,0.2)] p-2 rounded aspect-square w-fit"
          />
        </div>
      ) : null}
    </>
  );
};

export default MiniProdInfo;
