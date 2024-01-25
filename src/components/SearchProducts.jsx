import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchProducts = ({searchRequest}) => {

    const [data, setData] = useState(null);

    // useEffect(() => {
    //     axios.post(`https://localhost:8000/api/product`, {
    //         "ids":searchRequest
    //     })
    // }, [data])

    return(
        <>
            {data ? (
                
                <p>DATA SHOULD GO HERE</p>
                
            ):(
            <p>no data SearchReq:{searchRequest}</p>
            )}
        </>
    );
};
export default SearchProducts;