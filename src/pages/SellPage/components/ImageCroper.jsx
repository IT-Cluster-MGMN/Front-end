import { useState } from "react";
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";

const ImageCroper = () => {

  const [image, setImage] = useState(null);

  const [crop, setCrop] = useState({
  unit: '%', // Can be 'px' or '%'
  x: 25,
  y: 25,
  width: 50,
  height: 50
});

  const onSelectFile = (e) => {

    const file = e.target.files?.[0];
    
    if(!file) return;

    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
      const imageUrl = reader.result?.toString() || "";
      console.log(imageUrl);
      setImage(imageUrl);
    });

    reader.readAsDataURL(file);

    const onImageLoad = (e) => {
      const { width, height } = e.currentTarget;
      const cropWidthInPercent = (150 / width) * 100;

      const crop = makeAspectCrop(
        {
          unit: "%",
          width: cropWidthInPercent,
        },
        1,
        width,
        height
      );
      const centeredCrop = centerCrop(crop, width, height);
      setCrop(centeredCrop);
    };

  };

  return(
    <>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={onSelectFile}
        />
      </div>
      { image ? (
        <>
          <ReactCrop crop={crop} onChange={c => setCrop(c)}>
            <img src={image}
            onLoad={e => onImageLoad(e)}/>
          </ReactCrop>
        </>
      ) : (null)}
    </>
  )
};

export default ImageCroper;
