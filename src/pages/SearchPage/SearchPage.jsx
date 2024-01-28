import Navbar from "../../components/Navbar/Navbar";
import FilterSideBar from "./components/FilterSideBar";
import SearchProducts from "./components/SearchProducts";
import SortBar from "./components/SortBar";

const SearchPage = () => {
    return(
        <div className="absolute top-0 left-0 flex flex-col w-full bg-zinc-100">
            <Navbar/>
            <SortBar/>
            <div className="flex flex-row">
                {/* <FilterSideBar/> */}
                <SearchProducts/>
            </div>
        </div>
    )
};
export default SearchPage;