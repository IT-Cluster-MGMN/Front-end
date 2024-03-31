const DateOfBirthSelector = ({ onChange, date_birth, lightTheme }) => {
  return (
    <div className="flex flex-col">
      <label className="font-sans font-bold">Date of birth</label>
      <input
        type="date"
        onChange={(e) => onChange(e.target.value)}
        className={`bg-inherit ${lightTheme ? "text-black" : "text-white dark:[color-scheme:dark]"} border-t-transparent border-x-transparent  border-[2px] p-2  ${date_birth ? "border-b-green-500" : ""} focus:outline-none`}
      />
    </div>
  );
};

export default DateOfBirthSelector;
