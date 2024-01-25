import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import FilterSideBar from "./FilterSideBar";
import SearchProducts from "./SearchProducts";
import SortBar from "./SortBar";

const SearchPage = () => {
    return(
        <div className="absolute top-0 left-0 flex flex-col w-full bg-zinc-100">
            <Navbar/>
            <SortBar/>
            <div className="flex flex-row">
                <FilterSideBar/>
                <SearchProducts/>
            </div>
        </div>
    )
};
export default SearchPage;