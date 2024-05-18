import { useState, useEffect } from "react";
import ImageCropper from "../../../components/ImageCropper";
import cloneDeep from "lodash/cloneDeep";

const ProductImageCreate = ({ onChange }) => {
  const [images, setImages] = useState([]);
  const reader = new FileReader();
  const [draggedImageIndex, setDraggedImageIndex] = useState(null);

  console.log(images)

  const handleFileAddition = (e) => {
    reader.readAsDataURL(e);
    reader.onloadend = () => {
      const base64 = reader.result;
      setImages([...images, base64]);
    };
  };

  useEffect(() => {
    onChange(images);
  }, [images]);

  const handleImageRemoval = (index) => {
    const filteredArray = images.filter(
      (item, itemIndex) => itemIndex !== index,
    );
    setImages([...filteredArray]);
  };

  const handleDragStart = (index) => {
    setDraggedImageIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedImageIndex(null);
  };

  const handleDrop = (index) => {
    if (draggedImageIndex !== null && draggedImageIndex !== index) {
      const temp = images[draggedImageIndex];
      const updatedImages = cloneDeep(images);
      updatedImages[draggedImageIndex] = images[index];
      updatedImages[index] = temp;
      setImages(updatedImages);
    }
    setDraggedImageIndex(null);
  };

  return (
    <>
      <div className="h-full w-full items-center justify-center">
        <ImageCropper
          aspect={16 / 9}
          dropzone={true}
          onChange={(e) => handleFileAddition(e)}
        />
        <div
          className="flex flex-col justify-center aspect-square w-full h-[13rem]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(0)}
        >
          {images[0] ? (
            <img
              className="aspect-square object-cover w-[13rem] cursor-pointer rounded-[1rem] self-center"
              src={images[0]}
              onClick={() => handleImageRemoval(0)}
              draggable
              onDragStart={() => handleDragStart(0)}
              onDragEnd={handleDragEnd}
            />
          ) : (
            <div className="w-full justify-center items-center flex flex-col">
              <span className="font-sans text-white">
                Зображення ще не додані
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-row gap-1 self-center overflow-x-scroll w-full max-w-[30rem] h-[5rem] p-1">
          {images.map((image, index) => (
            <>
              {index !== 0 ? (
                <img
                  key={index}
                  src={image}
                  alt="image"
                  onDragStart={() => handleDragStart(index)}
                  onDragEnd={handleDragEnd}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(index)}
                  className="rounded-[0.5rem] aspect-square object-cover w-[4rem] cursor-move"
                  onClick={() => handleImageRemoval(index)}
                />
              ) : null}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImageCreate;
