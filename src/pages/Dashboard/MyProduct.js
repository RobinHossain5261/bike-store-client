import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';


const MyProduct = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);

    const closeModal = () => {
        setDeleteProduct(null);
    }

    const { data: products = [], refetch } = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            try {
                const res = await fetch('https://bike-store-server.vercel.app/myproducts', {
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

    const handleDeleteProduct = product => {
        fetch(`https://bike-store-server.vercel.app/myproducts/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${product.productName} delete successfully.`)
                }
            })
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">My Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                {
                    products?.map(product =>
                        <div
                            key={product._id}
                            className="card  bg-base-100 shadow-xl">
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

                                <label onClick={() => setDeleteProduct(product)} htmlFor="confirmation-modal" className="btn  btn-error">Delete</label>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                deleteProduct && <ConfirmationModal
                    title={'Are you sure you want to delete.'}
                    message={`If you delete ${deleteProduct.productName}. It can not be undone.`}
                    successAction={handleDeleteProduct}
                    modalData={deleteProduct}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProduct;