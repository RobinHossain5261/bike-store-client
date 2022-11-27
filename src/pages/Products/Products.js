import React, { useEffect, useState } from 'react';
import ProductName from './ProductName';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='mt-10'>
            <h1 className="text-5xl font-bold mb-10 text-center">Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[800px] mx-auto'>
                {

                    products?.map(product => <ProductName
                        key={product._id}
                        product={product}
                    ></ProductName>)
                }
            </div>

        </div>
    );
};

export default Products;