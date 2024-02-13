import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { BsArrowRight, BsChat, BsHeart, BsCart2, BsFillHeartFill, BsChatLeftFill    } from 'react-icons/bs';
import MainImage from './components/MainImage';
import useAPIMainImage from '../../hooks/useAPIMainImage';
// can you import app.css?

const ProductPage = () => {

  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const mainImage = useAPIMainImage(productId);
  // const [selectedImage, setSelectedImage] = useState(0);

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
          <div>
            <MainImage image={mainImage}/>
          </div>
          {/* Product Info + Buttons */}
          <div className='w-full h-full bg-[#fff] pl-[1rem] px-0'>
            {/* Product Info */}
            <div className='flex flex-col items-start gap-[0.8rem]'>
            <div className='flex items-center justify-between w-[90%]'>
              <span className=' font-sans text-black text-[3rem] top-[3%]'>{product.title}</span>
            </div>
            <div className='flex flex-row items-center gap-2'>
            <Link className='no-underline font-sans text-black  text-[1.5rem] mr-5 '>Description</Link>
            <Link className='no-underline font-sans text-black text-[1.5rem] '>Characteristics</Link>
          </div>
          <svg width="100%" height="15" viewBox="0 0 1440 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="2" x2="100%" y2="2" stroke="black" stroke-opacity="0.5"/>
          </svg>
      
          <div className='product-description'>
            <span className='font-sans font-normal break-all'>Description: {product.description}</span>
          </div>
          <div className= 'buttons'>  
           <button className='add-to-cart2'>
              <BsFillHeartFill  style={{fontSize:15, color: 'white'}} className="mr-2" />
              <span className='font-sans text-white text-size-[20px] text-center'>Favourite</span>
           </button>
           <button className='add-to-cart3'>
              <BsChatLeftFill  style={{fontSize:15, color: 'white'}} className="mr-2" />
              <span className='font-sans text-white text-size-[20px] text-center '>Chat</span>
           </button>
              <span className='font-sans text-[64px] absolute bottom-[65%] left-[55%] translate-x-[-50%]'>{product.price}₴</span>
            <button className='add-to-cart11'>
              <BsCart2 style={{ fontSize: 20, color: 'white' }} className="mr-2" />
                <span className='font-sans text-white text-size-[20px]'>Add to Cart</span>
            </button>
          </div>
              {/* <div className='bg-[rgba(0,0,0,0.3)] w-[1px] h-full'></div>
              <button className='flex items-center justify-center w-[340px] gap-2 transition-colors duration-200 delay-75 rounded-lg bg-[#0C0C0D] opacity-80 '>
                <BsHeart/>
                <span className='font-sans text-color-[#fff]'>Add to Cart</span>
              </button> */}
              {/* <div className='flex flex-row items-center gap-2'>
                <span className='font-sans font-semibold bg-zinc-300 rounded-[0.4rem] p-1 border-solid border-[1px] border-[rgba(0,0,0,0.3)]'>Sold by:</span>
                <span className='font-sans '>{product.username}</span>
              </div> */}
            {/* Buttons */}
             {/* <div className='flex flex-row mt-[5%] w-[90%] h-[2rem] rounded-[0.4rem] overflow-hidden 
            bg-zinc-300 border-solid border-[1px] border-[rgba(0,0,0,0.3)]'> */}
            </div>  
          </div>
        // </div>
      ) : (
        <p>Loading...WIP {productId}</p>
      )}
    </div>
  );
};

export default ProductPage;
