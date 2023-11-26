import React, { useState } from 'react';

const HoverMenu = ({ label, items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuItem, setSubMenuItem] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSubMenuOpen(false);
    setSubMenuItem(null);
  };

  const handleSubMenuEnter = (item) => {
    setSubMenuOpen(true);
    setSubMenuItem(item);
  };

  const handleSubMenuLeave = () => {
    setSubMenuOpen(false);
    setSubMenuItem(null);
  };

  return (
    <div className="relative inline-block">
      <div className="hover-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div>{label}</div>
        {isHovered && (
          <ul>
            {items.map((item, index) => (
              <li key={index} onMouseEnter={() => handleSubMenuEnter(item)} onMouseLeave={handleSubMenuLeave}>
                <div className={`mb-4 ${index !== items.length - 1 ? 'block' : ''} hover:underline hover:border-b-2 transition duration-300`}>
                  {item}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {subMenuOpen && subMenuItem && (
        <div className="submenu" >
        </div>
      )}
    </div>
  );
};

export default HoverMenu;


