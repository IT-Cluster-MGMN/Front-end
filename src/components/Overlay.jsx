const Overlay = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute backdrop-blur-lg z-0 w-screen h-screen bg-black bg-opacity-70"
    />
  );
};

export default Overlay;
