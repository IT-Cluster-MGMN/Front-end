const SexSelector = ({ onChange, sex, lightTheme, hide, hidden, onHide }) => {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col font-sans w-full">
        <label
          className={`font-sans ${hidden ? "text-zinc-400" : ""} font-bold`}
        >
          Стать
        </label>
        <select
          onChange={(e) => onChange(e.target.value)}
          className={`bg-inherit ${lightTheme ? "text-black" : "text-white"} p-2 border-t-transparent border-x-transparent  border-[2px] focus:outline-none ${sex ? "border-b-green-500" : ""} `}
        >
          <option disabled selected value>
            -
          </option>
          <option className="text-black">Чоловік</option>
          <option className="text-black">Жінка</option>
          <option className="text-black">Інше</option>
        </select>
      </div>
      {hide && onHide ? (
        <input type="checkbox" onChange={onHide} checked={!hidden} />
      ) : null}
    </div>
  );
};

export default SexSelector;
