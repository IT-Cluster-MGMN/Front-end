import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductList from '../../../components/ProductList';

const SearchProducts = () => {

    const [data, setData] = useState(null);
    
    const location = useLocation();

    const ids = location.state.ids;

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
    }, [ids])

    return(
        <>
            <div className='bg-zinc-300 px-[0.3rem] min-h-screen'>
                {data ? (
                    <>
                        <ProductList data={data}/>
                    </>
                    
                ):(
                    <>
                        <p>no data SearchReq:{typeof(ids)} | {ids}</p>
                        <button onClick={handleTest}>test</button>
                    </>
                )}
            </div>
        </>
    );
};
export default SearchProducts;