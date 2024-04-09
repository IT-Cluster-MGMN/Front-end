import { BsTelegram, BsDiscord } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className="flex flex-row w-full min-h-[20rem] bg-darkgrey h-[20rem]">
                <div className="flex flex-row items-center gap-3 h-full">
                    <div className="font-sans text-white">Зв'язатись з нами</div>
                    <BsTelegram />
                    <BsDiscord />
                </div>
            </div>
        </>
    );
};
export default Footer;
