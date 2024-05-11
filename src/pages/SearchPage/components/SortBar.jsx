import { useState } from "react";
import RangeSlider from "./RangeSlider";
import SortSelector from "./SortSelector";

const SortBar = () => {
  return (
    <>
      {/* TODO: dropdowns for every option */}
      <div className="flex justify-around z-0 p-1  rounded-[2rem] border-solid border-black border-[1px]">
        <RangeSlider min={20} max={500} onChange={(e) => handleTest(e)} />

        <SortSelector lightTheme={true} onChange={(e) => console.log(e)} />
      </div>
    </>
  );
};
export default SortBar;
