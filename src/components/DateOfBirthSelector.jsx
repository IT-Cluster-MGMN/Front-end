const DateOfBirthSelector = ({
  onChange,
  date_birth,
  lightTheme,
  hide,
  onHide,
  hidden,
}) => {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-full">
        <label
          className={`font-sans ${hidden ? "text-zinc-400" : ""} font-bold`}
        >
          Date of birth
        </label>
        <input
          type="date"
          onChange={(e) => onChange(e.target.value)}
          className={`bg-inherit ${lightTheme ? "text-black" : "text-white dark:[color-scheme:dark]"} border-t-transparent border-x-transparent  border-[2px] p-2  ${date_birth ? "border-b-green-500" : ""} focus:outline-none`}
        />
      </div>
      {hide && onHide ? (
        <input type="checkbox" onChange={onHide} checked={!hidden} />
      ) : null}
    </div>
  );
};

export default DateOfBirthSelector;
