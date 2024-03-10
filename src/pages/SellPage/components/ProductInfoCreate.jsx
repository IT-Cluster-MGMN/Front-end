import { useEffect } from "react";
import InputField from "../../../components/InputField";
import useRegexValidation from "../../../hooks/useRegexValidation";
import {
  prodNameRegex,
  prodDescRegex,
  prodPriceRegex,
} from "../../../utils/regexPatterns";
import useUsername from "../../../hooks/useUsername";

const ProductInfoCreate = ({ onSubmit, username }) => {
  // TODO: text input fields for string prod fields

  const [title, isValidTitle, setTitle] = useRegexValidation(
    null,
    prodNameRegex,
  );
  const [description, isValidDescription, setDescription] = useRegexValidation(
    null,
    prodDescRegex,
  );
  const [price, isValidPrice, setPrice] = useRegexValidation(
    null,
    prodPriceRegex,
  );
  useEffect(() => {
    onSubmit({
      username,
      title,
      description,
      price,
    });
  }, [title, description, price]);

  return (
    <>
      <div className="flex flex-col ">
        <label>title</label>
        <input onChange={(e) => setTitle(e.target.value)} />
        <label>description</label>
        <input onChange={(e) => setDescription(e.target.value)} />
        <label>price</label>
        <input onChange={(e) => setPrice(Number(e.target.value))} />
      </div>
    </>
  );
};

export default ProductInfoCreate;
