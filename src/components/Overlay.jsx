const Overlay = ({ onClick, zIndex = "z-0" }) => {
  return (
    <div
      onClick={onClick}
      className={`absolute backdrop-blur-lg ${zIndex} w-screen h-full min-h-screen bg-black  bg-opacity-70`}
    />
  );
};

export default Overlay;
