import { useState } from "react";
import RangeSlider from "./RangeSlider";
import SortSelector from "./SortSelector";

const SortBar = ({ setDescending, setRange, initRange }) => {
  const handleSortSelector = (value) => {
    switch (value) {
      case "Найновіші":
        setDescending(true);
    }
  };

  return (
    <>
      {/* TODO: dropdowns for every option */}
      <div className="flex justify-around z-0 p-1  rounded-[2rem] border-solid border-black border-[1px]">
        <RangeSlider min={1} max={9999999} setGlobalRange={setRange} />

        <SortSelector
          lightTheme={true}
          onChange={(e) => handleSortSelector(e)}
        />
      </div>
    </>
  );
};
export default SortBar;
