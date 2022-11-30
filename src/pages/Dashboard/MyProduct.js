import { useQuery } from '@tanstack/react-query';
import React from 'react';


const MyProduct = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/myproducts', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;

            }
            catch (error) {

            }
        }
    })

    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">My Product: {products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                {
                    products?.map(product =>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img src={product.image} alt="honda" /></figure>
                            <div className="card-body">
                                <h2 className="text-4xl font-semibold">{product.productName}</h2>
                                <p><del>Price: {product.orginalPrice}</del></p>
                                <p>New Price: {product.newPrice}</p>
                                <p>Used: {product.used}</p>
                                <p>Post: {product.date}</p>
                                <p>Condition: {product.condition}</p>
                                <h3 className='text-2xl font-bold '>Seller Information</h3>
                                <p className='font-semibold'>Name: {product.name}</p>
                                <p>Location: {product.location}</p>
                                <p>Phone: {product.phone}</p>
                                <button className="btn btn-secondary mt-3">available</button>
                                <button className="btn btn-error">Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyProduct;