import Slider from "rc-slider";
import { useState } from "react";
import 'rc-slider/assets/index.css';

const RangeSlider = ({min, max, onChange}) => {

  const [range, setRange] = useState([min, max]);

  const handleSliderChange = (newRange) => {
    setRange(newRange);
    onChange(newRange);
  };

  return (
    <div className="flex items-center flex-row  gap-x-[0.7rem]">
      <span className="w-fit">{range[0]}</span>
      <Slider
        className="w-[50rem]"
        min={min}
        max={max}
        range
        value={range}
        onChange={handleSliderChange}
      />
      <span>{range[1]}</span>
    </div>
  );
};

export default RangeSlider;
