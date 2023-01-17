import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../images/404-pages.jpg';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-semibold py-4'>This Route not found</h1>
            <img className='w-full' src={pic} alt="404 page" />
            <Link className='bg-green-500 text-white font-bold p-3 rounded-xl' to='/'>Go to home</Link>
        </div>
    );
};

export default ErrorPage;