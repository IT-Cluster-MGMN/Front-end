import { categoriesData } from "./CategoriesMenuItems";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsCaretUp, BsFolderMinus } from "react-icons/bs";

const HomeSidePanel = () => {
    const categories = categoriesData;
    const [categoryFocus, setCategoryFocus] = useState(null);

    const handleCategoryFocus = (category) => {
        if(categoryFocus === category){
            handleCategoryUnfocus();
        }
        else{
            setCategoryFocus(category);
        }
    };

    const handleCategoryUnfocus = () => {
        setCategoryFocus(null);
    };

    const categoryFocusCheck = (category) => {
        return(
            category === categoryFocus ? 1 : 0
        );
    };

    return(
        <>
            <div className="flex bg-zinc-200 w-[20%] left-[0px] h-[2000px]">
                <div className="transition duration-300 delay-300">
                    {/* {categories.map(category => (
                        <ul className="font-sans text-xl font-bold list-none list-inside">
                            <li >
                                <div className="flex flex-row items-center gap-2">
                                    {category['icon']}
                                    {category['title']}
                                </div>
                            </li>
                            {category['subcategories'].map(subcategory => (
                                <ul className="font-sans text-lg font-semibold list-none list-inside">
                                    <li>
                                        {subcategory['title']}
                                        {subcategory['subsubcategory'].map(subsubcategory => (
                                            <ul className="font-sans text-[15px] font-medium list-none">
                                                <li>
                                                    <Link className="no-underline " to={subsubcategory['url']}>{subsubcategory['title']}</Link>
                                                </li>
                                            </ul>
                                        ))}
                                    </li>
                                </ul>
                            ))}
                        </ul>
                    ))} */}

                    {categories.map(category => (
                        <ul className="list-none">
                            <li>
                                <button className="border-none bg-inherit hover:underline" onClick={() => handleCategoryFocus(category)}>
                                    <div className="flex flex-row items-center gap-2">
                                        {categoryFocusCheck(category) ? (<BsCaretUp/>) : category['icon']}
                                        {category['title']}
                                    </div>
                                </button>
                            </li>
                            {categoryFocusCheck(category) ? (
                                <ul className="list-none">
                                    {category['subcategories'].map(subcategory => (
                                        <li>
                                            <Link to={subcategory['url']}>
                                                {subcategory['title']}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </ul>
                    ))}
                </div>
            </div>
        </>
    )
};
export default HomeSidePanel;