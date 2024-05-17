import Slider from "rc-slider";
import { useState } from "react";
import "rc-slider/assets/index.css";

const RangeSlider = ({ min, max, setGlobalRange }) => {
  const [range, setRange] = useState([min, max]);

  const handleSliderChange = (newRange) => {
    setRange(newRange);
  };

  const handleMinBlur = () => {
    if (range[0] < min) {
      setRange((prev) => [min, prev[1]]);
    }
  };

  const handleMaxBlur = () => {
    if (range[1] > max) {
      setRange((prev) => [prev[0], max]);
    }
  };

  const handleSubmit = () => {
    setGlobalRange(range);
  };

  return (
    <div className="flex items-center flex-row  gap-x-[0.7rem]">
      <input
        className="border-x-transparent focus:outline-none bg-inherit max-w-[4rem] border-t-transparent border-[2px]"
        value={range[0]}
        onChange={(e) => setRange((prev) => [e.target.value, prev[1]])}
        onBlur={handleMinBlur}
      />
      <Slider
        className="w-[35rem]"
        min={min}
        max={max}
        range
        value={range}
        onChange={handleSliderChange}
        railStyle={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        trackStyle={{ backgroundColor: "lightgreen" }}
        draggableTrack={true}
        handleStyle={{
          backgroundColor: "rgba(37,37,37,1)",
          border: "none",
          opacity: "100%",
          width: 6,
          borderRadius: 4,
        }}
      />
      <input
        className="border-x-transparent focus:outline-none bg-inherit max-w-[4rem] border-t-transparent border-[2px]"
        value={range[1]}
        onChange={(e) => setRange((prev) => [prev[0], e.target.value])}
        onBlur={handleMaxBlur}
      />
      <button
        onClick={handleSubmit}
        className="bg-inherit font-sans font-bold items-center border-none rounded-[0.5rem] p-2 hover:bg-[rgba(80,200,120)] hover:text-white transition"
      >
        Вибрати
      </button>
    </div>
  );
};

export default RangeSlider;
