import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';

const SellPage = () => {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDesctiption] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = () => {
        axios.post("http://localhost:8000/api/product/add", {
            "username":username,
            "price": price,
            "title": title,
            "description": description
        })
        .then((res)=>{
            console.log(res);
        });
    };
    return(
        <>
            <div className='absolute top-0 left-0 w-full'>
                <Navbar/>
                <form onSubmit={handleSubmit}>
                    <label>username</label>
                    <input onChange={(e) => setUsername(e)}/>
                    <label>title</label>
                    <input onChange={(e) => setTitle(e)}/>
                    <label>description</label>
                    <input onChange={(e) => setDesctiption(e)}/>
                    <label>price</label>
                    <input onChange={(e) => setPrice(e)}/>
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
export default SellPage;