import { useEffect, useState } from "react";
import ImageCropper from "@/components/ImageCropper";
import defaultProfile from "@/assets/profile.png";

const AvatarEdit = ({ onChange, currentAvatar }) => {
  const [renderImage, setRenderImage] = useState(currentAvatar);
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
    <div className="flex flex-col w-[5rem] items-center justify-center">
      <div className="flex flex-col items-center gap-1 h-full justify-center">
        <img
          src={`${renderImage ? renderImage : defaultProfile} `}
          alt="add profile picture"
          className="aspect-square bg-white cursor-pointer  shadow-md rounded-full w-[5.3rem]"
        />
        <ImageCropper
          rounded={true}
          setter={true}
          onChange={(e) => handleImageCrop(e)}
        />
      </div>
    </div>
  );
};

export default AvatarEdit;
