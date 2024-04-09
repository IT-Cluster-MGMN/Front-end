import { categoriesData } from "../../../jsons/CategoriesMenuItems";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsCaretUp, BsFolderMinus } from "react-icons/bs";

const HomeSidePanel = () => {
  const categories = categoriesData;
  const [categoryFocus, setCategoryFocus] = useState(null);

  const handleCategoryFocus = (category) => {
    if (categoryFocus === category) {
      handleCategoryUnfocus();
    } else {
      setCategoryFocus(category);
    }
  };

  const handleCategoryUnfocus = () => {
    setCategoryFocus(null);
  };

  const categoryFocusCheck = (category) => {
    return category === categoryFocus ? 1 : 0;
  };

  return (
    <>
      <div className="flex bg-white md:w-[0rem] lg:w-[18rem] xl:w-[18rem] 2lx:w-[18rem] left-[0px] overflow-hidden sm:w-[0rem]">
        <div className="left-[0px] ">
          {categories.map((category) => (
            <ul className="p-0 pl-2 list-none h-fit">
              <li>
                <button
                  className="border-none bg-inherit hover:underline text-[14px] font-sans"
                  onClick={() => handleCategoryFocus(category)}
                >
                  <div className="flex flex-row items-center gap-2">
                    {categoryFocusCheck(category) ? (
                      <BsCaretUp />
                    ) : (
                      category["icon"]
                    )}
                    {category["title"]}
                  </div>
                </button>
              </li>
              {categoryFocusCheck(category) ? (
                <ul className="list-none">
                  {category["subcategories"].map((subcategory) => (
                    <li>
                      <Link
                        className="font-sans text-[13px] no-underline hover:underline text-black"
                        to={subcategory["url"]}
                      >
                        {subcategory["title"]}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
export default HomeSidePanel;
