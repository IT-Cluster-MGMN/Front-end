import { FaPen } from "react-icons/fa";

const EditProfileButton = ({ onClick, isEdditing }) => {
  return (
    <button
      className={`flex justify-center items-center h-[2rem] border-none  transition ${isEdditing ? "bg-green-700 hover:bg-green-800" : "bg-white hover:bg-zinc-300"} w-[2rem] aspect-square rounded-full`}
      onClick={onClick}
    >
      <FaPen color={isEdditing ? "white" : "green"} />
    </button>
  );
};

export default EditProfileButton;
