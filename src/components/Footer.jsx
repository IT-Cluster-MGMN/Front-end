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
            <div className="flex flex-row items-center justify-end w-full bg-darkgrey h-[200px]">
                <div className="flex flex-row items-center gap-3 mx-10">
                    <div className="font-sans text-white">
                        Зв'язатись з нами
                    </div>
                    <BsTelegram/>
                    <BsDiscord/>
                </div>
            </div>
        </>
    );
};
export default Footer;