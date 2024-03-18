const SaveButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-[1rem] px-4 border-none font-sans font-bold hover:bg-green-800 transition text-white bg-green-700"
    >
      Save
    </button>
  );
};

export default SaveButton;
