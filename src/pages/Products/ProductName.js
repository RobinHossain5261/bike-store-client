import React from 'react';
import { Link } from 'react-router-dom';

const ProductName = ({ product }) => {
    const { _id, category } = product;
    return (
        <div >
            <Link to={`/products/${_id}`} className='h-52 w-52 rounded-full bg-black text-white flex justify-center items-center hover:rounded-xl'>
                <h1 className='text-5xl font-bold'>{category}</h1>
            </Link>
        </div>
    );
};

export default ProductName;