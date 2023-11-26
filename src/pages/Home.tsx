import { useState, useRef } from "react";
import { useClickOutside } from "./App";
import HoverMenu from './hovermenu';
import { Link } from 'react-router-dom';
import {
  BsPersonCircle,BsFillPersonFill,BsFillGearFill,
  BsBoxArrowRight,BsFillKeyFill,BsFillPersonPlusFill,
  BsSearch,BsTelegram,BsDiscord,BsFillBasket2Fill,
  BsFillHeartFill,BsList,BsFillTagsFill,BsPhone,BsTv,BsLaptop,
  BsCarFront,BsFillUmbrellaFill,BsRocket, BsTencentQq, BsDribbble, BsFillHouseFill
} from "react-icons/bs";
import "./App.css";
import React from "react";

function Desktop1() {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });


  return (
    <div className = "footer">
      <div className="relative bg-white w-full h-[1240px] overflow-hidden text-left text-base z-1 text-black font-inter"> 
        <div className="absolute top-[1180px] left-[0px]" style={{ backgroundColor: "#0C0C0DE5", opacity: 0.9, width: "100vw", height: "60px", overflow: "hidden", color: "white" }}> {/* ось тут відбувається зміна футеру*/}
          <BsTelegram className="absolute top-[14px] left-[1400px] w-8 h-8 object-cover" />
          <BsDiscord className="absolute top-[14px] left-[1460px] w-8 h-8 object-cover" />
            <div className="absolute top-[16px] left-[1218px] inline-block w-[147px] h-7">
              Зв’язатись з нами
            </div>
        </div>
    </div>   



      {/* <span>Ось код знизу для navbarу</span> */}
      <div className="absolute top-[-1px] left-[-1px] box-border w-[100vw] h-[45px]  z-2 text-white border-[1px] border-solid border-gray-300" style={{ backgroundColor: "#0C0C0DE5", opacity: 0.9 }}>{/* ось тут відбувається зміна navbarу*/}
        <div className="absolute top-[12px] left-[125px] font-inter inline-block w-[97px] h-[25px] text-white no-underline">
          <BsList className= "absolute top-[-5px] left-[70px] w-8 h-8 object-cover" />
           {/* <span>Каталог</span>  */}
           <HoverMenu
              label="Каталог"
              items={[
                'Смартфони та телефони',
                'Телевізори та мультимедіа',
                'Ноутбуки та комп\'ютери',
                'Інструменти і автотовари',
                'Одяг та взуття',
                'Дитячі товари',
                'Зоотовари',
                'Спортивне знаряддя',
                'Дача, дім та сад'
              ].map((item, index, array) => (
            <React.Fragment key={index}>
            <div className={`mb-4 ${index !== array.length - 1 ? 'block' : ''} hover:underline hover:border-b-2 transition duration-300 `}>
              {item}
            </div>
            </React.Fragment>
              ))}
            />

        </div>
    <div className="header">          
      <div className="Site_banner">
      <div className="absolute top-[43.5px] left-[256.5px] bg-black box-border w-px h-[1137px] border-r-[1px] border-solid border-black" />
        <img
          className="absolute top-[425px] left-[0px] w-[257px] h-0.5"
          alt=""
          src="/line-4.svg"
        />
      </div>
      <div className="absolute top-[759px] left-[538px] w-[898px] h-[312px] text-sm font-inika">
        <img
          className="absolute top-[280.01px] left-[252px] w-[51.51px] h-[1.5px]"
          alt=""
          src="/line-1.svg"
        />
      <div className="absolute top-[8px] left-[257px] bg-white w-[725px] h-7 overflow-visible  text-xs text-black">
        <div
          className="absolute top-[4px] left-[44px] inline-block w-[242px] h-[19px] bg-white border-none outline-none hover:no-underline focus:no-underline font-inter text-black"
          contentEditable="true" // ось це і дає можливість писати в пошуку//
          placeholder="Пошук..." />
      </div>



      <div className="Header_logos">
        <BsSearch className="absolute top-[10px] left-[257px] w-8 h-6 object-cover fill-black " />
        <div className="absolute top-[15px] left-[18px] text-sm inline-block w-[97px] h-[25px]" />
            <div className="absolute top-[12px] left-[18px] font-inter inline-block w-[97px] h-[25px] text-white no-underline">
              <span>Головна</span>
            </div>   
        <BsFillTagsFill className="absolute top-[6px] right-[660px] w-8 h-8 object-cover" />        
          <div className="absolute top-[12px] right-[600px] font-inter inline-block w-[53px] h-5">
            <span>Кошик</span>
          </div>
        <BsFillBasket2Fill className="absolute top-[6px] right-[490px] w-8 h-8 object-cover" /> 
          <div className="absolute top-[12px] right-[430px] font-inter inline-block w-[53px] h-5">
            <span>Продаж</span>
          </div>
        <BsFillHeartFill className="absolute top-[10px] right-[320px] w-7 h-7 object-cover " />
          <div className="absolute top-[12px] right-[260px] font-inter inline-block w-[53px] h-5">
            <span>Обране</span>
          </div>
        <div className="absolute top-[12px] right-[70px] font-inter inline-block w-[53px] h-5">
          <span>Профіль</span>
        </div>
      </div>  
    </div>

    <div className="Left_sidebar">
      <div className="absolute top-[80px] left-[19px] w-[303px] h-[311px] ">
          <div className="absolute top-[0px] left-[23px] inline-block w-[280px] h-6  text-black">
            <BsPhone className="absolute top-[0px] left-[-20px] w-5 h-5 object-cover"/>
            Смартфони та телефони
          </div>
          <div className="absolute top-[105px] left-[23px] inline-block w-[177px] h-[19px] text-black">
            <BsCarFront className="absolute top-[0px] left-[-22px] w-5 h-5 object-cover" />
            Інструменти і автотовари
            </div>
          <div className="absolute top-[35px] left-[23px] inline-block w-[193px] h-[17px] text-black">
            <BsTv className="absolute top-[0px] left-[-22px] w-5 h-5 object-cover"/>
            Телевізори та мультимедіа
          </div>
          <div className="absolute top-[70px] left-[23px] inline-block w-[193px] h-[23px] text-black">
            <BsLaptop className="absolute top-[0px] left-[-22px] w-5 h-5 object-cover"/>
            Ноутбуки та комп’ютери
          </div>
          <div className="absolute top-[140px] left-[23px] inline-block w-44 h-[34px] text-black">
            <BsFillUmbrellaFill className="absolute top-[0px] left-[-22px] w-5 h-5 object-cover"/>
            Одяг та взуття
          </div>
          <div className="absolute top-[174px] left-[22px] inline-block w-[133px] h-[23px] text-black">
            <BsRocket className="absolute top-[0px] left-[-22px] w-5 h-5 object-cover"/>
            Дитячі товари
          </div>
          <div className="absolute top-[209px] left-[23px] inline-block w-[120px] h-[23px] text-black">
            <BsTencentQq className="absolute top-[0px] left-[-22px] w-5 h-5 object-cover"/>
            Зоотовари
          </div>
          <div className="absolute top-[245px] left-[23px] inline-block w-[149px] h-[23px] text-black">
            <BsDribbble className="absolute top-[0px] left-[-22px] w-5 h-5 object-cover"/>
            Спортивне знаряддя
          </div>
          <div className="absolute top-[280px] left-[23px] inline-block w-[159px] h-[31px] text-black">
            <BsFillHouseFill className="absolute top-[0px] left-[-22px] w-5 h-5 object-cover"/>
            Дача, дім та сад
          </div>
      </div>
  </div>    

        <header className="absolute top-[0px] right-[150px] font-inika inline-block w-4 h-4 object-cover text-white no-underline">
          <button className="menu-button" onClick={() => setOpen(!isOpen)}>
            <BsPersonCircle />
          </button>
          <nav className={`menu ${isOpen ? "active" : ""}`} ref={menuRef}>
            <ul className="menu__list">
              <li className="menu__item">
                <BsFillPersonFill className="icon" />
                <span>Profile</span>
              </li>
              {/* <li className="menu__item">
                <BsFillGearFill className="icon" />
                <span>Settings</span>
              </li> */}
              <li className="menu__item">
                <BsBoxArrowRight className="icon" />
                <span>Exit</span>
              </li>
              <li className="menu__item">
                <BsFillKeyFill className="icon" />
                <Link to='/login' className="text-[#747474] no-underline">
                <span>Login</span>
                </Link>
              </li>
              <li className="menu__item">
                <BsFillPersonPlusFill className="icon" />
                <Link to='/registration' className="text-[#747474] no-underline">
                <span>Regisr</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>


      </div>
    </div>
  </div>

   );
};

export default Desktop1;
