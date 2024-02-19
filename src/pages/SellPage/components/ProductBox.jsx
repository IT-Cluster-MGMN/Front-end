import { useState } from "react";
import ProductInfoCreate from "./ProductInfoCreate";

const ProductBox = () => {

  const [productInfo, setProductInfo] = useState(null);

  const [productImages, setProductImages] = useState(null);

  const handleInfoSubmit = (e) => {
    setProductInfo(e);
  };

  const handleImageSubmit = (e) => {
    setProductImages(e);
  };

  const handleSubmit = () => {
    useAddProduct(productInfo, productImages);
  };

  return(
    <ProductInfoCreate onSubmit={(e) => {handleInfoSubmit(e)}}/>
  )

};

export default ProductBox;
