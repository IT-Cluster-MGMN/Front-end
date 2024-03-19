const PageButton = ({ label, onClick, selected, disabled }) => {
  return (
    <>
      <button
        className={`${disabled ? "border-b-zinc-300 hover:border-b-zinc-300 hover:shadow-none cursor-default" : ""} ${selected ? "bg-green-600 border-b-transparent" : "bg-inherit cursor-pointer hover:border-b-green-300 hover:shadow hover:shadow-black"} rounded   border-x-transparent border-t-transparent border-b-green-400  border-[4px] transition  font-sans text-[1.2rem]`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export default PageButton;
