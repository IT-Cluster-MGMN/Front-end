import { useEffect, useState } from "react";
import ImageCropper from "../../../components/ImageCropper";
import defaultProfile from "../../../../public/images/profile.png";

const ProfilePicture = ({ onChange, currentImage = defaultProfile }) => {
  const [renderImage, setRenderImage] = useState();
  const reader = new FileReader();

  const handleImageCrop = (e) => {
    reader.readAsDataURL(e);
    reader.onloadend = () => {
      const base64 = reader.result;
      setRenderImage(base64);
      onChange(base64);
    };
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 h-full justify-center">
        <img
          src={`${renderImage ? renderImage : currentImage} `}
          alt="add profile picture"
          className="aspect-square bg-white cursor-pointer  rounded-full w-[15rem]"
        />
      </div>
      <ImageCropper rounded={true} onChange={(e) => handleImageCrop(e)} />
    </div>
  );
};

export default ProfilePicture;
