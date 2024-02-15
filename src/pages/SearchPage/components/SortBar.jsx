import { useState } from "react";
import RangeSlider from './RangeSlider';
import SortDropdown from './SortDropdown';

const SortBar = () => {
  const [sortDropdown, setSortDropdown] = useState(false);

  const handleSortDropdown = () => {
    setSortDropdown(!sortDropdown);
  };

  const handleTest = (e) => {
    console.log(e)
  }

    return(
        <>
        {/* TODO: dropdowns for every option */}
            <div className="flex justify-around z-0 p-1 relative m-1 rounded-[2rem] border-solid border-black border-[1px]">
        <RangeSlider min={ 20 } max={ 500 } onChange={(e)=>handleTest(e)} />

        <div className="flex flex-col h-full bg-black">
          <button onClick={handleSortDropdown}>Sort</button>
          {sortDropdown ? (<SortDropdown/>) : null}
        </div>

            </div>
        </>
    );
};
export default SortBar;
