const SortSelector = ({ onChange, lightTheme }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className={`bg-inherit ${lightTheme ? "text-black" : "text-white"} p-2  border-none focus:outline-none  `}
    >
      <option disabled selected value>
        Сортувати за:
      </option>
      <option className="text-black">Найновіші</option>
      <option className="text-black">Ціною: від дорогих до дешевих</option>
      <option className="text-black">Ціною: від дешевих до дорогих</option>
    </select>
  );
};

export default SortSelector;
