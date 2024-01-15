import { categoriesData } from "./CategoriesMenuItems";

const HomeSidePanel = () => {
    let categories = categoriesData;

    return(
        <>
            <div className="flex bg-zinc-500 w-[20%] left-[0px] h-[2000px]">
                <div>
                    {categories.map(category => (
                        <ul>
                            {category['title']}
                            {category['subcategories'].map(subcategory => (
                                <ul>
                                    {subcategory['title']}
                                    {subcategory['subsubcategory'].map(subsubcategory => (
                                        <ul>
                                            {subsubcategory['title']}
                                        </ul>
                                    ))}
                                </ul>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </>
    )
};
export default HomeSidePanel;