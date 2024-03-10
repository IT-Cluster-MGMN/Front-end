import { useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import ReactCrop from "react-image-crop";

const ImageCroper = () => {
  const [image, setImage] = useState(null);

  const [crop, setCrop] = useState({
    unit: "%", // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });

  const handleSelectImage = (e) => {
    setImage(e.target.files[0]);
  };

  const [croppedImage, setCroppedImage] = useState(null);

  const handleCrop = (e) => {
    console.log(e);
    console.log(crop);
    setCroppedImage(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            handleSelectImage(e);
          }}
        />
      </div>
      {image ? (
        <>
          <ReactCrop
            crop={crop}
            onComplete={(e) => handleCrop(e)}
            locked={true}
            onChange={(c) => setCrop(c)}
          >
            <img
              src={URL.createObjectURL(image)}
              className="h-[10rem] "
              onLoad={(e) => {
                console.log(URL.createObjectURL(image));
                onImageLoad(e);
              }}
            />
          </ReactCrop>
        </>
      ) : null}
      <img src={croppedImage} />
    </>
  );
};

export default ImageCroper;
