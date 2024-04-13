import useGetFav from "../hooks/useGetFav";
import MiniProdInfo from "./MiniProdInfo";

const Favourites = () => {
  const favourites = useGetFav();

  return (
    <div className="absolute rounded-b p-1 overflow-y-scroll  lg:right-20 xl:right-20 2xl:right-[10rem] z-30 w-[23rem] min-h-[4rem] max-h-[10rem] bg-darkgrey">
      {favourites ? (
        <div className="flex flex-col gap-1">
          {favourites.map((item) => (
            <>
              <MiniProdInfo id={item} />
            </>
          ))}
        </div>
      ) : (
        <span className="font-sans text-white">Fav list empty</span>
      )}
    </div>
  );
};

export default Favourites;
