import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryProduct = () => {
    const product = useLoaderData();
    const { category, brand } = product;
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-5">Category: {category}</h1>
            <hr />
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    brand?.map(singleBrand => <ProductCard
                        key={singleBrand._id}
                        singleBrand={singleBrand}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProduct;