import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import FilterSideBar from "./FilterSideBar";
import SearchProducts from "./SearchProducts";

const SearchPage = () => {

    const {searchRequest} = useParams();

    return(
        <div className="absolute top-0 left-0 w-full">
            <Navbar/>
            <div className="flex flex-row">
                <FilterSideBar/>
                <SearchProducts searchRequest={searchRequest}/>
            </div>
        </div>
    )
};
export default SearchPage;