import React from 'react';
import Bajaj from './Bajaj';
import Honda from './Honda';
import Yahama from './Yahama';

const Category = () => {
    return (
        <div className='mt-10'>
            <h1 className="text-3xl text-center font-bold">Category</h1>
            <Honda></Honda>
            <Yahama></Yahama>
            <Bajaj></Bajaj>

        </div>
    );
};

export default Category;