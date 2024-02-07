const InputField = ({label, onChange}) => {

  return(
    <>
      <span>{label}</span>
      <input onChange={(e) => onChange(e.target.value)}/>
    </>
  )
};

export default InputField;
