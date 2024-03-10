import { useEffect } from "react";

const ProductImageCreate = ({ onSubmit }) => {
  const images = [];

  const handleFileAddition = (e) => {
    images.push(e.target.file);
    onSubmit(images);
    console.log(images.length);
  };

  return (
    <>
      <div className="bg-black  h-full">
        <input
          type="file"
          accept="image/jpeg"
          onChange={(e) => handleFileAddition(e)}
        />
        {images.map((image) => (
          <img src={image} />
        ))}
      </div>
    </>
  );
};

export default ProductImageCreate;
