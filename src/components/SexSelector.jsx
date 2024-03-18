const SexSelector = ({ onChange, sex, lightTheme }) => {
  return (
    <div className="flex flex-col font-sans">
      <label>Sex</label>
      <select
        onChange={(e) => onChange(e.target.value)}
        className={`bg-inherit ${lightTheme ? "text-black" : "text-white"} p-2 border-t-transparent border-x-transparent  border-[2px] focus:outline-none ${sex ? "border-b-green-500" : ""} `}
      >
        <option disabled selected value>
          -
        </option>
        <option className="text-black">Male</option>
        <option className="text-black">Female</option>
        <option className="text-black">Other</option>
      </select>
    </div>
  );
};

export default SexSelector;
