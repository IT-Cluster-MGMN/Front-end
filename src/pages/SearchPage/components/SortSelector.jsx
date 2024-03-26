const SortSelector = ({ onChange, lightTheme }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className={`bg-inherit ${lightTheme ? "text-black" : "text-white"} p-2  border-none focus:outline-none  `}
    >
      <option disabled selected value>
        Sort by:
      </option>
      <option className="text-black">Price: from higher to lower</option>
      <option className="text-black">Price: from lower to higher</option>
    </select>
  );
};

export default SortSelector;
