import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import ProductImageCreate from './components/ProductImageCreate';

const SellPage = () => {


    const handleSubmit = () => {
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
