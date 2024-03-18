import GreenButton from "../../../components/GreenButton";

const ProfilePicture = ({ onChange }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 h-full justify-center">
        <img
          src="../../../public/profile-svgrepo-com.svg"
          alt="add profile picture"
          className="aspect-square bg-white p-4 rounded-full w-[15rem]"
        />
        <GreenButton hasHover={true}>Add profile picture</GreenButton>
      </div>
    </div>
  );
};

export default ProfilePicture;
