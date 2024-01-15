import { Link } from "react-router-dom";
import { BsHouse, BsPhone } from "react-icons/bs";
import { useState } from "react";
import { categoriesData } from "./CategoriesMenuItems";

const CategoriesMenu = () => {
    const CATEGORIES_MENU_TEXT = 'font-sans font-semibold text-black text-[10px] no-underline';
    const CATEGORIES_MENU_BUTTONS = 'flex items-center justify-start w-full gap-2 px-5 py-2 border-none bg-inherit bg-zinc-300 hover:bg-zinc-400';
    
    const categories = categoriesData;

    const [category, setCategory] = useState(categories[0]);

    

    // const categories = ['electronics', 'autoAndParts', 'apparelAndAccessories', 'toysAndHobby', 'petSupplies', 'gardenEquipment']

    // const categoriesMap = {
    //     'electronics':{'title':'Electronics', 'icon':<BsPhone/>, 'subcategory':['1sub1', '1sub2', '1sub3']},
    //     'autoAndParts':{'title':'Auto and Parts', 'icon':<BsPhone/>, 'subcategory':['2sub1', '2sub2', '2sub3']},
    //     'apparelAndAccessories':{'title':'Apparel and accessories', 'icon':<BsPhone/>, 'subcategory':['3sub1', '3sub2', '3sub3']},
    //     'toysAndHobby':{'title':'Toys and hobby', 'icon':<BsPhone/>, 'subcategory':['4sub1', '4sub2', '4sub3']},
    //     'petSupplies':{'title':'Pet supplies', 'icon':<BsPhone/>, 'subcategory':['5sub1', '5sub2', '5sub3']},
    //     'gardenEquipment':{'title':'Garden equipment', 'icon':<BsHouse/>, 'subcategory':['6sub1', '6sub2', '6sub3']}
    // };

    const handleCategorySelection = (value) => {
        setCategory(value);
    };

    return(
        <>
            <div className="flex absolute justify-self-center left-[5%] bg-black w-[90%]">
                {/* Basic categories */}
                <div className="flex flex-col w-[25%] bg-black">
                    {categories.map(value => (
                        // arrow function in the onClick scope passes parameters to the handleCategorySelection
                        <button className={CATEGORIES_MENU_BUTTONS} onClick={() => handleCategorySelection(value)}>
                            {value['icon']}
                            {value['title']}
                        </button>
                    )
                    )}
                </div>
                {/* Subcategories */}
                <div className="grid w-full grid-cols-2 bg-zinc-200">
                    {category['subcategories'].map(subcategory => (
                        <div className="flex flex-col">
                            <p className="">{subcategory['title']}</p>
                            {subcategory['subsubcategory'].map(subsubcategory => (
                                <Link to={subsubcategory['url']}>{subsubcategory['title']}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default CategoriesMenu;