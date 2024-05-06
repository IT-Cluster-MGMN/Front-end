import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductList from "../../components/ProductList";
import dummyData from "@/jsons/dummyData.json";

const MyProducts = () => {
  return (
    <>
      <div className="flex flex-col absolute top-0 left-0 w-screen overflow-x-hidden">
        <Navbar />
        <div className="flex p-8 h-full flex-col bg-darkgrey w-[70%] self-center max-w-[100rem] ">
          <h1 className="text-white font-sans "> Мої товари</h1>
          <ProductList
            darkTheme={true}
            isHorizontal={true}
            itemsPerPage={6}
            data={dummyData}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MyProducts;
