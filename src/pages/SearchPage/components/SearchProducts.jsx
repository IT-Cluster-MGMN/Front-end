import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductList from '../../../components/ProductList';

const SearchProducts = () => {
    const [data, setData] = useState(null);
    const location = useLocation();
    const searchInput = new URLSearchParams(location.search).get('query');
    const [test, setTest] = useState(false);

    const handleTest = () => {
        setTest(!test);
    };

    useEffect(() => {
        if (searchInput) {
            axios.post("http://localhost:8000/api/product/search", {
                "query": searchInput
            }, { withCredentials: true })
                .then((response) => {
                    console.log(response);
                    setData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [searchInput]);

    return (
        <>
            <div className='bg-zinc-300 px-[0.3rem] min-h-screen'>
                {data ? (
                    <>
                        <ProductList data={data} />
                    </>
                ) : (
                    <>
                        <p>No data for SearchReq: {typeof (searchInput)} | {searchInput}</p>
                        <button onClick={handleTest}>test</button>
                    </>
                )}
            </div>
        </>
    );
};
export default SearchProducts;
