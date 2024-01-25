import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import ProductList from './ProductList';

const SearchProducts = ({searchRequest}) => {

    const [data, setData] = useState(null);
    
    const [searchParams] = useSearchParams();
    const ids = searchParams.get('ids');

    const [test, setTest] = useState(false);

    const handleTest = () => {
        setTest(!test);
    };

    useEffect(() => {
        axios.post("http://localhost:8000/api/product/search", {
            "ids":ids
        }, {withCredentials:true})
        .then((response) => {
            console.log(response);
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return(
        <>
            <div className='bg-zinc-300 px-[0.3rem] min-h-screen'>
                {data ? (
                    <>
                        <ProductList data={data}/>
                    </>
                    
                ):(
                    <>
                        <p>no data SearchReq:{typeof(ids)}</p>
                        <button onClick={handleTest}>test</button>
                    </>
                )}
            </div>
        </>
    );
};
export default SearchProducts;