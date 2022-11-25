import React from 'react';
import pic from '../../images/404-pages.jpg';

const ErrorPage = () => {
    return (
        <div className='text-center mt-16'>
            <h1 className='text-3xl font-semibold'>This Route not found</h1>
            <img src={pic} alt="" />
        </div>
    );
};

export default ErrorPage;