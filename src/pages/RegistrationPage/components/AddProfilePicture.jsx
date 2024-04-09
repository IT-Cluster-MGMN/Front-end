import Overlay from "../../../components/Overlay";

const AddProfilePicture = ({ onChange }) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen z-30">
        <Overlay />
        <center className="w-[80%] z-40 h-[80%] bg-white absolute"></center>
      </div>
    </>
  );
};

export default AddProfilePicture;
