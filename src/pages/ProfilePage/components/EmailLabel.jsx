const EmailLabel = ({ onChange, children, currentState }) => {
  return (
    <>
      <div
        className={`flex font-sans ${currentState ? "text-green-500" : "text-zinc-400"} gap-1 font-bold flex-row items-center`}
      >
        <span>{children}</span>
        {onChange ? (
          <input type="checkbox" checked={currentState} onChange={onChange} />
        ) : null}
      </div>
    </>
  );
};

export default EmailLabel;
