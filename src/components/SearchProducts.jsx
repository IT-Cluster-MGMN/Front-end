import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SearchProducts = ({searchRequest}) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.post(`https://localhost:8000/api/product`, {
            "ids":searchRequest
        })
    }, [data])

    return(
        <>
            {data ? (
                <ProductList data={data}/>
            ):(
            <p>no data</p>
            )}
        </>
    );
};
export default SearchProducts;