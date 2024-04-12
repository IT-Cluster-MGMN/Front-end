import useGetRecents from "../../../hooks/useGetRecents";
import ProductScroller from "../../../components/ProductsScroller";
import Loading from "../../../components/Loading";

const HomeProducts = () => {
  const recents = useGetRecents();

  return (
    <>
      <div className=" w-full bg-zinc-200 p-4 h-full min-h-[33rem]">
        <h1 className="font-sans font-bold">Newest products</h1>
        {recents ? (
          <ProductScroller data={recents} />
        ) : (
          <span className="font-sans font-bold">
            No products have been added yet
          </span>
        )}
      </div>
    </>
  );
};
export default HomeProducts;
