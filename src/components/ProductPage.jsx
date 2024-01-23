import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import { BsArrowRight, BsChat, BsHeart, BsMessenger } from 'react-icons/bs';

const ProductPage = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${productId}`, {withCredentials:true})
      .then(res => {setProduct(res.data)
      console.log(res.data)})
      .catch(error => console.error('Error fetching product data:', error));
  }, [productId]);

  return (
    <div className='absolute top-0 left-0 flex flex-col w-full h-screen overflow-hidden'>
      <Navbar/>
      {product ? (
        <div className='flex flex-row w-full h-full'>
          {/* Product Images */}
          <div className='w-[100rem] bg-zinc-200 h-full'>
            {/* Image Selector */}
            <div>
              {/* {product.productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  onClick={() => setSelectedImage(index)}
                  className={index === selectedImage ? 'selected' : ''}
                />
              ))} */}
            </div>
            {/* Main Image */}
            <div>
              {/* <img
                src={product.productImages[selectedImage]}
                alt={`Product ${selectedImage + 1}`}
              /> */}
            </div>
          </div>
          {/* Product Info + Buttons */}
          <div className='w-full h-full bg-zinc-100 px-[2rem] pt-8'>
            {/* Product Info */}
            <div className='flex flex-col items-start gap-[0.8rem]'>
              <div className='flex items-center justify-between w-[90%]'>
                <span className='font-sans font-medium text-[2.5rem]'>{product.title}</span>
                <span className='font-sans font-semibold text-[2rem]'>₴{product.price}</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <Link className='no-underline font-sans font-light text-[1.5rem] text-zinc-700'>Category</Link>
                <BsArrowRight/>
                <Link className='no-underline font-sans font-light text-[1.5rem] text-zinc-700'>Subcategory</Link>
              </div>
              <div className='w-[87%] xl:h-[10rem] bg-zinc-300 p-2 border-[rgba(0,0,0,0.3)] border-solid border-[1px] rounded-[0.4rem]'>
                <span className='font-sans font-normal'>{product.description}</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <span className='font-sans font-semibold bg-zinc-300 rounded-[0.4rem] p-1 border-solid border-[1px] border-[rgba(0,0,0,0.3)]'>Sold by:</span>
                <span className='font-sans'>{product.username}</span>
              </div>
            </div>
            {/* Buttons */}
            <div className='flex flex-row mt-[5%] w-[90%] h-[2rem] rounded-[0.4rem] overflow-hidden 
            bg-zinc-300 border-solid border-[1px] border-[rgba(0,0,0,0.3)]'>
              <button className='flex items-center justify-center w-full gap-2 transition-colors duration-200 delay-75 border-none bg-inherit hover:bg-zinc-400'>
                <BsChat/>
                <span className='font-sans'>Message</span>
              </button>
              <div className='bg-[rgba(0,0,0,0.3)] w-[1px] h-full'></div>
              <button className='flex items-center justify-center w-full gap-2 transition-colors duration-200 delay-75 border-none bg-inherit hover:bg-zinc-400'>
                <BsHeart/>
                <span className='font-sans'>Add to favourites</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...WIP {productId}</p>
      )}
    </div>
  );
};

export default ProductPage;
