const GreenButton = ({ onClick, children, hasHover, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? "text-zinc-500" : ""} select-none p-2 rounded border-none bg-white text-green-600 ${hasHover ? "hover:bg-green-700 hover:text-white cursor-pointer" : ""} text-[1rem] transition duration-200 font-sans font-bold `}
    >
      {children}
    </button>
  );
};

export default GreenButton;
