import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductList from "../../components/ProductList";
import dummyData from "@/jsons/dummyData.json";
import useGetMyProducts from "../../hooks/useGetMyProducts";
import Loading from "../../components/Loading";
import useUsername from "../../hooks/useUsername";

const MyProducts = () => {
  const username = useUsername();
  const myProducts = useGetMyProducts(username);
  return (
    <>
      <div className="flex flex-col absolute top-0 left-0 w-screen overflow-x-hidden">
        <Navbar />
        <div className="flex p-8 h-full min-h-screen flex-col bg-darkgrey w-[70%] self-center max-w-[100rem] ">
          <h1 className="text-white font-sans "> Мої товари</h1>
          {myProducts ? (
            <ProductList
              darkTheme={true}
              isHorizontal={true}
              itemsPerPage={6}
              data={myProducts}
            />
          ) : (
            <Loading />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MyProducts;
