import { BsTelegram, BsDiscord } from "react-icons/bs";

const Footer = () => {
    const telegramLink = "https://www.google.com/";
    const discordLink = "https://www.google.com/";

    const handleLinkClick = (link) => {
        window.location.replace(link);
    };

    return (
        <>
            <div className="flex flex-col w-full min-h-[10rem] bg-darkgrey h-[10rem]">
                <label className="m-4 text-green-500 font-sans font-light text-[1.5rem]">
                    Leaves
                </label>
                <div className="flex flex-row items-center gap-3 h-full justify-around w-full">
                    <BsTelegram
                        onClick={() => handleLinkClick(telegramLink)}
                        color="white "
                        className="p-2 hover:bg-zinc-600 rounded-full cursor-pointer transition"
                    />
                    <BsDiscord
                        onClick={() => handleLinkClick(discordLink)}
                        className="p-2 hover:bg-zinc-500 rounded-full cursor-pointer transition"
                        color="white"
                    />
                </div>
            </div>
        </>
    );
};
export default Footer;
