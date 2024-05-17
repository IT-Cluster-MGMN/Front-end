import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SearchProducts from "./components/SearchProducts";
import SortBar from "./components/SortBar";

const SearchPage = () => {
  const [descendingSort, setDescendingSort] = useState(false);
  const [range, setRange] = useState([1, 9999999]);

  return (
    <div className="absolute top-0 left-0 flex flex-col w-full bg-zinc-100">
      <Navbar />
      <div className="p-1">
        <SortBar
          setDescending={setDescendingSort}
          setRange={(e) => setRange(e)}
          initRange={range}
        />
        <div className="flex flex-row">
          <SearchProducts descendingSort={descendingSort} range={range} />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default SearchPage;
