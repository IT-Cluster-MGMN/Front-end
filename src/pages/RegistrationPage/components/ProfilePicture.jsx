const ProfilePicture = ({ onChange }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 h-full justify-center">
        <img
          src="../../../public/profile-svgrepo-com.svg"
          alt="add profile picture"
          className="aspect-square bg-white p-4 rounded-full w-[15rem]"
        />
        <button className="p-2 rounded border-none bg-white text-green-600 hover:bg-green-700 text-[1rem] transition duration-200 font-sans font-bold hover:text-white">
          Add Profile Picture
        </button>
      </div>
    </div>
  );
};

export default ProfilePicture;
