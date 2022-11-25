import React from 'react';

const Category = () => {
    return (
        <div className='mt-10'>
            <h1 className="text-5xl text-center font-bold mb-10">Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[800px] mx-auto'>
                <div className='h-52 w-52 rounded-full bg-black text-red-700 flex justify-center items-center'>
                    <h1 className='text-5xl font-bold'>Honda</h1>
                </div>
                <div className='h-52 w-52 rounded-full bg-black text-red-700 flex justify-center items-center'>
                    <h1 className='text-5xl font-bold'>Yamaha</h1>
                </div>
                <div className='h-52 w-52 rounded-full bg-black text-red-700 flex justify-center items-center'>
                    <h1 className='text-5xl font-bold'>Bajaj</h1>
                </div>

            </div>

        </div>
    );
};

export default Category;