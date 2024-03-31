import { useState, useEffect } from "react";

const ProductImageCreate = ({ onSubmit }) => {
  const [images, setImages] = useState([]);

  const handleFileAddition = (e) => {
    const file = e.target.files[0];
    setImages([...images, file]);
  };

  useEffect(() => {
    onSubmit(images);
    console.log(images.length);
  }, [images, onSubmit]);

  return (
    <>
      <div className="bg-black h-full">
        <input
          type="file"
          accept="image/jpeg"
          onChange={(e) => handleFileAddition(e)}
        />
        {images.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`image-${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default ProductImageCreate;
