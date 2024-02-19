const InputField = ({ label, onChange, className, placeholder, isValid=true }) => {
  //TODO: make isValid handling
  return (
    <div className={`mb-4 ${className}`}>
      {isValid ? (<p>Valid</p>) : (<p>Invalid</p>)}
      <label className="block text-gray-700 text-sm font-bold mb-2 w-1/2">
        {label}
      </label>
      <input
        type="text"
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
