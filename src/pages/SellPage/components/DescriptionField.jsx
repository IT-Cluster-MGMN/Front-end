const DescriptionField = ({ onChange }) => {
  return (
    <>
      <div className="flex gap-2 flex-col">
        <label className="font-sans font-bold text-white">Description</label>
        <textarea
          onChange={(e) => onChange(e)}
          cols="30"
          rows="4"
          maxLength="500"
          className="resize-none rounded p-1 text-white bg-[rgba(50,50,50,1)] font-sans focus:outline-none"
        />
      </div>
    </>
  );
};

export default DescriptionField;
