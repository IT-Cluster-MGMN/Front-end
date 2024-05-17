import { useEffect, useState } from "react";
import InputField from "../../../components/InputField";
import useRegexValidation from "../../../hooks/useRegexValidation";
import {
  prodNameRegex,
  prodDescRegex,
  prodPriceRegex,
} from "../../../utils/regexPatterns";
import useUsername from "../../../hooks/useUsername";
import CategorySelector from "./CategorySelector";
import DescriptionField from "./DescriptionField";

const ProductInfoCreate = ({ onChange, username }) => {
  // TODO: text input fields for string prod fields

  const [title, setTitle] = useState();
  const [isValidTitle, setIsValidTitle] = useState(false);
  useEffect(() => {
    setIsValidTitle(prodNameRegex.test(title));
  }, [title]);
  const [titleFocus, setTitleFocus] = useState(false);
  const [mouseOverTitle, setMouseOverTitle] = useState(false);

  const [category, setCategory] = useState();

  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [isValidPrice, setIsValidPrice] = useState(false);
  useEffect(() => {
    setIsValidPrice(prodPriceRegex.test(price));
  }, [price]);
  const [priceFocus, setPriceFocus] = useState(false);
  const [mouseOverPrice, setMouseOverPrice] = useState(false);

  useEffect(() => {
    onChange({
      username,
      title,
      description,
      category,
      price,
    });
  }, [title, description, price, category]);

  return (
    <>
      <div className="flex flex-col gap-2 w-[60%] ">
        <InputField
          label={"Назва"}
          onMouseOverInfo={() => setMouseOverTitle(true)}
          onMouseOutInfo={() => setMouseOverTitle(false)}
          field={title}
          isValidField={isValidTitle}
          setField={setTitle}
          hintTag={"title"}
          onFocus={() => setTitleFocus(true)}
          onBlur={() => setTitleFocus(false)}
          isFocus={titleFocus}
          isMouseOver={mouseOverTitle}
        />
        <CategorySelector onChange={(e) => setCategory(e.target.value)} />
        <DescriptionField
          title={title}
          isValidTitle={isValidTitle}
          category={category}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputField
          label={"Ціна"}
          onMouseOverInfo={() => setMouseOverPrice(true)}
          onMouseOutInfo={() => setMouseOverPrice(false)}
          field={price}
          isValidField={isValidPrice}
          setField={setPrice}
          hintTag={"price"}
          onFocus={() => setPriceFocus(true)}
          onBlur={() => setPriceFocus(false)}
          isFocus={price}
          isMouseOver={mouseOverPrice}
        />
      </div>
    </>
  );
};

export default ProductInfoCreate;
