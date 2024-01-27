import { Link } from "react-router-dom";
import { BsHouse, BsPhone } from "react-icons/bs";
import { useState } from "react";
import { categoriesData } from "../../../jsons/CategoriesMenuItems";

const CategoriesMenu = () => {
    const CATEGORIES_MENU_TEXT = 'font-sans font-semibold text-black text-[10px] no-underline';
    const CATEGORIES_MENU_BUTTONS = 'flex items-center justify-start w-full gap-2 px-5 py-2 border-none bg-zinc-300 m-[5px] hover:bg-zinc-400';
    
    const categories = categoriesData;

    const [category, setCategory] = useState(categories[0]);

    const handleCategorySelection = (value) => {
        setCategory(value);
    };

    return(
        <>
            <div className="flex flex-row absolute justify-self-center left-[3%] z-10 w-[94%] max-h-[300px]">
                {/* Basic categories */}
                <div className="flex flex-col items-start w-[25%] bg-zinc-300 rounded-bl-[10px] py-4 overflow-y-auto">
                    {categories.map(value => (
                        // arrow function in the onClick scope passes parameters to the handleCategorySelection
                        <button className="flex w-full gap-2 px-5 my-2 border-none bg-inherit hover:underline hover:cursor-pointer" onClick={() => handleCategorySelection(value)}>
                            {value['icon']}
                            {value['title']}
                        </button>
                    )
                    )}
                </div>
                {/* Subcategories */}
                <div className="grid w-full grid-cols-3 bg-zinc-200 px-5 rounded-br-[10px] overflow-y-scroll">
                    {category['subcategories'].map(subcategory => (
                        <div className="flex flex-col px-3 py-2">
                            <p className="font-sans font-semibold text-[17px]">{subcategory['title']}</p>
                            {subcategory['subsubcategory'].map(subsubcategory => (
                                <Link className="font-sans text-[13px] text-black no-underline hover:underline" to={subsubcategory['url']}>{subsubcategory['title']}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default CategoriesMenu;