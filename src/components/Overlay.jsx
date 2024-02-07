const Overlay = ({onClick}) => {
  return(
    <div onClick={onClick} className="absolute z-0 w-screen h-screen bg-black opacity-70"/>
  )
};

export default Overlay;
