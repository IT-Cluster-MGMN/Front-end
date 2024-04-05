import Navbar from "../../components/Navbar/Navbar";
import ProductBox from "./components/ProductBox";

const SellPage = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-screen overflow-hidden">
        <Navbar />
        <ProductBox />
      </div>
    </>
  );
};
export default SellPage;
