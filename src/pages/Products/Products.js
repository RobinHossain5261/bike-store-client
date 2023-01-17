import { useQuery } from '@tanstack/react-query';
// import React, { useEffect, useState } from 'react';
import ProductName from './ProductName';

const Products = () => {
    // const [products, setProducts] = useState([]);

    const { data = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://bike-store-server.vercel.app/products');
            const data = await res.json();
            return data;
        }
    })


    // useEffect(() => {
    //     fetch('https://bike-store-server.vercel.app/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);

    return (
        <div className='mt-10'>
            <h1 className="text-5xl font-bold mb-10 text-center">Our Product Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[800px] mx-auto'>
                {

                    data?.map(product => <ProductName
                        key={product._id}
                        product={product}
                    ></ProductName>)
                }
            </div>

        </div>
    );
};

export default Products;