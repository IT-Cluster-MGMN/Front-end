const SellerLabel = ({ data, label }) => {
  return (
    <div className="flex-col flex">
      <label className="font-sans font-bold text-[1.2rem]">{label}</label>
      {data === null ? (
        <span className="font-sans text-zinc-500 font-semibold">
          (Приховано)
        </span>
      ) : (
        <span className="font-sans font-semibold text-zinc-500">{data}</span>
      )}
    </div>
  );
};

export default SellerLabel;
