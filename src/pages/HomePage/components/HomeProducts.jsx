import useGetRecents from "../../../hooks/useGetRecents";
import ProductScroller from "../../../components/ProductsScroller";
import Loading from "../../../components/Loading";

const HomeProducts = () => {
  const recents = useGetRecents();

  return (
    <>
      <div className=" w-full bg-zinc-200 p-4 h-full min-h-[33rem]">
        <h1 className="font-sans font-bold">Найновіші товари</h1>
        {recents ? (
          <ProductScroller data={recents} />
        ) : (
          <span className="font-sans font-bold">
            Ніяких товарів ще не додано
          </span>
        )}
      </div>
    </>
  );
};
export default HomeProducts;
