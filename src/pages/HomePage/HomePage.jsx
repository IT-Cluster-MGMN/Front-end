import Navbar from "../../components/Navbar/Navbar";
import HomeSidePanel from "./components/HomeSidePanel";
import Footer from "../../components/Footer";
import HomeProducts from "./components/HomeProducts";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col absolute left-[0px] h-full  top-[0px] w-full">
        {<Navbar />}
        <div className="flex flex-row max-w-[100rem] w-full self-center h-full justify-center">
          {<HomeSidePanel />}
          {<HomeProducts />}
        </div>
        {<Footer />}
      </div>
    </>
  );
};
export default HomePage;
