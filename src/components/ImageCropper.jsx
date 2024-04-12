import { FileUploader } from "react-drag-drop-files";
import { useRef, useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import Cropper from "react-easy-crop";
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";
import { IoCropSharp, IoTrashBin } from "react-icons/io5";

const ImageCropper = ({ onChange, dropzone, rounded }) => {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });
  const [zoom, setZoom] = useState(1.3);
  const canvasRef = useRef();
  const [output, setOutput] = useState(null);
  const [showCropper, setShowCropper] = useState(false);

  const selectImage = (e) => {
    setSrc(URL.createObjectURL(e));
    setCrop({ x: 0, y: 0 });
    setZoom(1.3);
    setOutput(null);
    setShowCropper(true);
  };

  const clearOutput = () => {
    setSrc(null);
    setOutput(null);
    onChange(null);
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
      console.log(canvasURL);
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
        {dropzone ? (
          <FileUploader
            handleChange={selectImage}
            name="file"
            types={["JPEG", "JPG", "PNG"]}
          />
        ) : (
          <>
            <input
              type="file"
              id="upload-button"
              hidden
              onChange={(e) => selectImage(e.target.files[0])}
              onClick={(e) => (e.target.value = null)}
            />
            <div className="flex flex-row gap-2 items-center">
              {src ? (
                <IoTrashBin
                  size={"1.7rem"}
                  color="grey"
                  className="cursor-pointer hover:bg-zinc-700 p-[0.30rem] rounded-full transition"
                  onClick={() => clearOutput()}
                />
              ) : null}
              <label
                for="upload-button"
                className="text-green-600 p-2 rounded bg-white hover:bg-green-700 select-none cursor-pointer hover:text-white transition font-sans font-bold"
              >
                Add profile picture
              </label>
              {src ? (
                <IoCropSharp
                  size={"1.7rem"}
                  color="grey"
                  className="hover:bg-zinc-700 p-[0.30rem] cursor-pointer rounded-full transition"
                  onClick={() => setShowCropper(true)}
                />
              ) : null}
            </div>
          </>
        )}
        <div>
          {src && showCropper && (
            <div>
              <Cropper
                image={src}
                crop={crop}
                zoom={zoom}
                aspect={1}
                cropShape={rounded ? "round" : "rect"}
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
        <canvas ref={canvasRef} hidden />
      </center>
    </div>
  );
};

export default ImageCropper;
