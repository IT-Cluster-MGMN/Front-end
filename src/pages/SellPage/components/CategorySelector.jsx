import { categoriesData } from "../../../jsons/CategoriesMenuItems";

const CategorySelector = ({ onChange }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="font-sans font-bold text-white">Категорія</label>
        <select
          onChange={(e) => onChange(e)}
          className="bg-inherit p-1 focus:outline-none rounded text-white border-x-transparent border-t-transparent border-[2px]"
        >
          <option className="bg-zinc-600" disabled selected value>
            -
          </option>
          {categoriesData.map((category) => (
            <option className="bg-zinc-600">{category.title}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CategorySelector;
