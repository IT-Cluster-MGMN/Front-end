import {
    
    BsTelegram,BsDiscord
    
      } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-end w-full bg-darkgrey h-[20rem]">
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