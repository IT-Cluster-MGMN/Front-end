import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {

    const [searchInput, setSetSearchInput] = useState(null);

    const handleInput = (e) => {
        setSetSearchInput(e);
        console.log(searchInput);
    };

    return(
        <>
            <div 
                className="
                flex 
                flex-row 
                items-center 
                w-full
                bg-white 
                rounded-[7px] 
                px-2
                py-1 

                delay-300 
                duration-300 
                hover:delay-300 
                hover:duration-300
                "
                >
                    <input className="
                    bg-white 
                    w-full 
                    h-full
                    border-none
                    font-sans
                    font-bold
                    text-black
                    text-[15px]
                    rounded-[7px]
                    !outline-none
                    "
                    type="text"
                    placeholder="Search"
                    onChange={(e) => handleInput(e.target.value)}/>
                    <button className="h-full bg-darkgrey border-none rounded-[1.5rem] 
                    hover:bg-[rgba(100,100,100,1)] py-1 delay-100 duration-150">
                        <BsSearch className="px-3 text-[0.8rem] text-white"/>
                    </button>
            </div>
        </>
    );
};
export default SearchBar;