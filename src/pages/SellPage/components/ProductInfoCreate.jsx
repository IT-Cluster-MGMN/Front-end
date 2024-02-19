import { useEffect } from 'react';
import InputField from '../../../components/InputField';
import useRegexValidation from '../../../hooks/useRegexValidation';
import { prodNameRegex, prodDescRegex, prodPriceRegex } from '../../../utils/regexPatterns';

const ProductInfoCreate = ({ onSubmit }) => {
// TODO: text input fields for string prod fields

  const [name, isValidName, setName] = useRegexValidation(null, prodNameRegex);
  const [description,isValidDescription, setDescription] = useRegexValidation(null, prodDescRegex);
  const [price,isValidPrice, setPrice] = useRegexValidation(null, prodPriceRegex);

  useEffect(() => {
    isValidName && isValidDescription && isValidPrice ? onSubmit({
      name,
      description,
      price,
    }) : null;
  }, [name, description, price])

  return(
    <>
      <div>
        <InputField label='Label' onChange={(e)=>setName(e.target.value)}/>
        <InputField label='Description' onChange={(e)=>setDescription(e.target.value)}/>
        <InputField label='Price' onChange={(e)=>setPrice(e.target.value)}/>
      </div>
    </>
  )
};

export default ProductInfoCreate;
