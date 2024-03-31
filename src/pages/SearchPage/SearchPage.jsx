import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SearchProducts from "./components/SearchProducts";
import SortBar from "./components/SortBar";

const SearchPage = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col w-full bg-zinc-100">
      <Navbar />
      <div className="p-1">
        <SortBar />
        <div className="flex flex-row">
          <SearchProducts />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default SearchPage;
