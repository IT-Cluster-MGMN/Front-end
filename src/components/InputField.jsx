import React, { useState, useRef, useEffect } from 'react';

const InputField = ({ label, className, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.font = '16px Arial'; 
    const textWidth = ctx.measureText(inputValue).width;
    const padding = 0; 
    if (inputRef.current) {
      inputRef.current.style.width = `${textWidth + padding}px`;
    }
  }, [inputValue]);

  return (
    <div className={`mb-1 ${className}`}>
      <label className="block text-gray-700 text-sm font-bold mb-1 w-1/2">
        {label}
      </label>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className="shadow appearance-none border-none bg-gray-300 h-[10px] rounded py-2 px-2 text-black  leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;