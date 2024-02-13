const FilterSideBar = () => {
    return(
        <>
        </>
    );
};
export default FilterSideBar;
// import React, { useState } from 'react';
// import Input from "../../components/Input";

// const Price = ({ handlePriceChange }) => {
//   const [minPrice, setMinPrice] = useState(30);
//   const [maxPrice, setMaxPrice] = useState(10000);

//   const handleMinPriceChange = (e) => {
//     setMinPrice(e.target.value);
//   };

//   const handleMaxPriceChange = (e) => {
//     setMaxPrice(e.target.value);
//   };

//   const onApplyFilter = () => {
//     handlePriceChange(minPrice, maxPrice);
//   };

//   return (
//     <div className="font-sans p-2">
//       <div className="flex items-center mb-1">
//         <input
//           type="number"
//           value={minPrice}
//           onChange={handleMinPriceChange}
//           className="border border-gray-300 p-1 w-20"
//         />
//         <span className="mx-1"> - </span>
//         <input
//           type="number"
//           value={maxPrice}
//           onChange={handleMaxPriceChange}
//           className="border border-gray-300 p-1 w-20"
//         />
//         <button
//           onClick={onApplyFilter}
//           className="bg-green-500 text-white p-1 ml-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
//           disabled={minPrice > maxPrice}
//         >
//           OK
//         </button>
//       </div>
//       <div className="relative">
//         <input
//           type="range"
//           min="0"
//           max="10000"
//           value={minPrice}
//           onChange={(e) => setMinPrice(e.target.value)}
//           className="w-full h-2 rounded bg-gradient-to-r from-gray-300 to-gray-300 focus:outline-none"
//         />
//         <input
//           type="range"
//           min="0"
//           max="10000"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(e.target.value)}
//           className="w-full h-2 rounded bg-gradient-to-r from-gray-300 to-gray-300 focus:outline-none"
//         />
//       </div>
//     </div>
//   );
// };  

// const Colors = ({ handleChange }) => {
//     return (
//       <div>
//         <h2 className="mt-8 text-xl font-semibold">Colors</h2>
//         <div className="flex items-center">
//           <input
//             onChange={handleChange}
//             type="radio"
//             value=""
//             name="color"
//             className="form-radio h-4 w-4"
//           />
//           <span className="ml-2 text-sm">All</span>
//         </div>
//         <Input handleChange={handleChange} value="black" title="Black" name="color" colorClass="bg-black" />
//         <Input handleChange={handleChange} value="blue" title="Blue" name="color" colorClass="bg-blue-600" />
//         <Input handleChange={handleChange} value="red" title="Red" name="color" colorClass="bg-red-600" />
//         <Input handleChange={handleChange} value="green" title="Green" name="color" colorClass="bg-green-600" />
//         <Input handleChange={handleChange} value="purple" title="Purple" name="color" colorClass="bg-purple-600" />
//         <div className="flex items-center">
//           <input
//             onChange={handleChange}
//             type="radio"
//             value="white"
//             name="color"
//             className="form-radio h-4 w-4"
//           />
//           <span className="checkmark bg-white border-2 border-black ml-2 h-4 w-4 rounded-full"></span>
//           <span className="ml-2 text-sm">White</span>
//         </div>
//       </div>
//     );
//   };
  

//   const Category = ({ handleChange }) => {
//     return (
//       <div>
//         <h2 className="text-2xl font-normal mb-5">Category</h2>
//         <div className="space-y-3">
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               onChange={handleChange}
//               type="radio"
//               value=""
//               name="category"
//               className="form-radio h-5 w-5 text-blue-600"
//             />
//             <span>All</span>
//           </label>
  
//           <Input handleChange={handleChange} value="phones" title="Phones" name="category" />
//           <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="category" />
//           <Input handleChange={handleChange} value="sport" title="Sport" name="category" />
//           <Input handleChange={handleChange} value="clothes" title="Clothes" name="category" />
//           <Input handleChange={handleChange} value="pc&laptops" title="PC&Laptops" name="category" />
//           <Input handleChange={handleChange} value="tv&multimedia" title="TV&Multimedia" name="category" />
//           <Input handleChange={handleChange} value="zoo" title="Zoo" name="category" />
//         </div>
//       </div>
//     );
//   };

// export { Price, Colors, Category };
