const GreenButton = ({ onClick, children, hasHover }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded border-none bg-white text-green-600 ${hasHover ? "hover:bg-green-700 hover:text-white cursor-pointer" : ""} text-[1rem] transition duration-200 font-sans font-bold `}
    >
      {children}
    </button>
  );
};

export default GreenButton;
