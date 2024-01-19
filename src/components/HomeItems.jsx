import { Link } from "react-router-dom";
import dummyData from "../dummyData.json";

const HomeItems = () => {

    const data = dummyData;

    return(
        <>
            <div className=" px-[3px] bg-zinc-100">
                <div className="grid justify-between w-full grid-cols-5 gap-[1px] bg-inherit">
                    {data.map(item => (
                        <Link className={`no-underline bg-white text-black p-5 duration-300 delay-150 border-none rounded-b-[10px] rounded-tl-[10px] hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.5)]`}>
                            <div className="bg-inherit rounded-b-[10px] rounded-tl-[10px]">
                                <div className="flex flex-col gap-y-5 items-center h-fit w-fit max-h-[300px]">
                                    <img className="w-[100%] h-[56,25%]" src={item['photo']}/>
                                    <div className="flex flex-col">
                                        <span className="self-start font-sans font-bold">{item['title']}</span>
                                        <span className="self-start px-2 overflow-hidden font-sans ">{item['description'].substring(0,70)+'...'}</span>
                                        <span className="self-start font-sans font-semibold text-[23px]">{item['price']}₴</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="w-full bg-white h-[60px] flex items-center justify-center">
                    <button className="w-[100px] bg-inherit border-spacing-1 rounded-[20px] h-[30px]">
                        Show more WIP
                    </button>
                </div>
            </div>
        </>
    );
};
export default HomeItems;