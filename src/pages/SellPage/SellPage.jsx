import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductBox from "./components/ProductBox";

const SellPage = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-screen overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col">
          <ProductBox />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default SellPage;
