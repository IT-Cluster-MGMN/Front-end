import React from "react";
import {
    BsPersonCircle,BsFillPersonFill,BsFillGearFill,
    BsBoxArrowRight,BsFillKeyFill,BsFillPersonPlusFill,
    BsSearch,BsTelegram,BsDiscord,BsFillBasket2Fill,
    BsFillHeartFill,BsList,BsFillTagsFill,BsPhone,BsTv,BsLaptop,
    BsCarFront,BsFillUmbrellaFill,BsRocket, BsTencentQq, BsDribbble, BsFillHouseFill
  } from "react-icons/bs";

const Footer = () => {
    return (
        <>
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
            </div> 
        </>
    );
};
export default Footer;