import { FileUploader } from "react-drag-drop-files";
import { useRef, useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import Cropper from "react-easy-crop";
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";
import { IoCropSharp } from "react-icons/io5";

const ImageCropper = ({ onChange }) => {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });
  const [zoom, setZoom] = useState(1.3);
  const canvasRef = useRef();
  const [output, setOutput] = useState(null);
  const [showCropper, setShowCropper] = useState(1);

  const selectImage = (e) => {
    setSrc(URL.createObjectURL(e));
    setCrop({ x: 0, y: 0 });
    setZoom(1.3);
    setOutput(null);
    setShowCropper(1);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = src;

    image.onload = () => {
      const pixelCrop = {
        x: croppedAreaPixels.x,
        y: croppedAreaPixels.y,
        width: croppedAreaPixels.width,
        height: croppedAreaPixels.height,
      };

      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
      );

      const canvasURL = canvas.toDataURL("image/jpeg");
      fetch(canvasURL)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "File name", { type: "image/jpeg" });
          setOutput(file);
        });
    };
  };

  const handleZoomIn = () => {
    if (zoom < 1.9) {
      setZoom((prev) => prev + 0.3);
    }
  };
  const handleZoomOut = () => {
    if (zoom > 1) {
      setZoom((prev) => prev - 0.3);
    }
  };

  const handleSubmit = () => {
    setShowCropper(false);
    onChange(output);
  };

  return (
    <div>
      <center className="flex flex-col items-center gap-2 p-2">
        <FileUploader
          handleChange={selectImage}
          name="file"
          types={["JPEG", "JPG", "PNG"]}
        />
        <div>
          {src && showCropper && (
            <div>
              <Cropper
                image={src}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                style={{ width: "300px", height: "200px" }}
              />
              <div className="absolute flex flex-col gap-2 bottom-2 w-fit right-2">
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-full flex items-center"
                >
                  <MdOutlineZoomInMap size={"1.7rem"} />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-full flex items-center"
                >
                  <MdOutlineZoomOutMap size={"1.7rem"} />
                </button>
                <button
                  onClick={handleSubmit}
                  className="p-2 rounded-full flex items-center"
                >
                  <IoCropSharp size={"1.7rem"} />
                </button>
              </div>
            </div>
          )}
        </div>
        <canvas ref={canvasRef} className="cursor-pointer w-[0rem] " />
      </center>
    </div>
  );
};

export default ImageCropper;
