import { Link } from "react-router-dom";
import dummyData from "../dummyData.json";
import { useState } from "react";
import ProductDetails from './ProductDetails';

const HomeItems = () => {

    const data = dummyData;

    return(
        <>
            <div className=" px-[0.3rem] bg-zinc-300">
                <div className="grid justify-between w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                xl:grid-cols-4 2xl:grid-cols-6 gap-[0.3rem] bg-inherit">
                    {data.map(item => <ProductDetails item={item}/>)}
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