const PageButton = ({label, onClick}) => {

  return(
    <>
      <button onClick={onClick}>
        {label}
      </button>
    </>
  )
};

export default PageButton;