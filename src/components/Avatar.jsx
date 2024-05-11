import useGetAvatar from "../hooks/useGetAvatar";
import defaultAvatar from "@/assets/profile.png";
import useIsLogged from "../hooks/useIsLogged";

const Avatar = ({ className, onClick, avatar }) => {
  return (
    <>
      {avatar ? (
        <img
          src={`data:image/jpeg;base64,${avatar}`}
          className={className}
          onClick={onClick}
        />
      ) : (
        <img src={defaultAvatar} className={className} onClick={onClick} />
      )}
    </>
  );
};

export default Avatar;
