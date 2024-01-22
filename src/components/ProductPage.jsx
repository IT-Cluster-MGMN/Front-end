import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_ENDPOINT = "";

const ProductPage = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    axios.get(`${API_ENDPOINT}/product/${productId}`)
      .then(res => setProduct(res.data))
      .catch(error => console.error('Error fetching product data:', error));
  }, [productId]);

  return (
    <>
      {product ? (
        <div>
          {/* Product Images */}
          <div>
            {/* Image Selector */}
            <div>
              {product.productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  onClick={() => setSelectedImage(index)}
                  className={index === selectedImage ? 'selected' : ''}
                />
              ))}
            </div>
            {/* Main Image */}
            <div>
              <img
                src={product.productImages[selectedImage]}
                alt={`Product ${selectedImage + 1}`}
              />
            </div>
          </div>
          {/* Product Info + Buttons */}
          <div>
            {/* Product Info */}
            <div>
              <p>{product.productName}</p>
              <p>{product.productDescription}</p>
              <p>${product.productPrice}</p>
            </div>
            {/* Buttons */}
            <div>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...WIP {productId}</p>
      )}
    </>
  );
};

export default ProductPage;
