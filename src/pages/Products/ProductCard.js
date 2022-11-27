import React from 'react';

const ProductCard = ({ singleBrand }) => {
    const { productName, image, price, resalePrice, usingTime, name, location, phone, date } = singleBrand;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="honda" /></figure>
            <div className="card-body">
                <h2 className="text-4xl font-semibold">{productName}</h2>
                <p><del>Price: {price}</del></p>
                <p>New Price: {resalePrice}</p>
                <p>Used: {usingTime}</p>
                <p>Post: {date}</p>
                <h3 className='text-2xl font-bold '>Seller Information</h3>
                <p className='font-semibold'>Name: {name}</p>
                <p>Location: {location}</p>
                <p>Phone: {phone}</p>
                <button className="btn btn-primary">Book Now</button>
            </div>
        </div>
    );
};

export default ProductCard;