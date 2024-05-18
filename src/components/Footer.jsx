import { BsTelegram, BsDiscord } from "react-icons/bs";

const Footer = () => {
    const telegramLink = "https://www.google.com/";
    const discordLink = "https://www.google.com/";

    const handleLinkClick = (link) => {
        window.location.replace(link);
    };

    return (
        <>
            <div
                className="flex flex-col w-full min-h-[10rem]  h-[10rem]
                bg-zinc-900
                "
            >
                <label className="m-4 text-white font-sans font-light text-[1.5rem]">
                    Сайт зроблено командою Leaves
                </label>
                <label className="font-sans text-white self-center">
                    Зв'язатись з нами:
                </label>
                <div className="flex flex-row items-center gap-3 h-full justify-around w-full">
                    <BsTelegram
                        onClick={() => handleLinkClick(telegramLink)}
                        color="white "
                        className="p-2 hover:bg-green-700 rounded text-[30px] cursor-pointer transition"
                    />
                    <BsDiscord
                        onClick={() => handleLinkClick(discordLink)}
                        className="p-2 hover:bg-green-700 rounded text-[30px] cursor-pointer transition"
                        color="white"
                    />
                </div>
            </div>
        </>
    );
};
export default Footer;
