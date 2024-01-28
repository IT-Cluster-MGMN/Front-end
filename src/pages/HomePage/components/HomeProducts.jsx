import { Link } from "react-router-dom";
import dummyData from "../../../jsons/dummyData.json";
import { useState } from "react";
import ProductList from "../../../components/ProductList";

const HomeProducts = () => {
    const data = dummyData;

    return(
        <>
            <div className=" px-[0.3rem] bg-[#fff]">
                <ProductList data={data}/>
                <div className="w-full bg-white h-[60px] flex items-center justify-center">
                    <button className="w-[100px] bg-inherit border-spacing-1 rounded-[20px] h-[30px]">
                        Show more WIP
                    </button>
                </div>
            </div>
        </>
    );
};
export default HomeProducts;