import React, { useEffect, useState } from 'react';

const Honda = () => {
    const [hondaOptions, setHondaOptions] = useState([]);
    useEffect(() => {
        fetch('honda.json')
            .then(res => res.json())
            .then(data => setHondaOptions(data))
    }, [])
    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Honda</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    hondaOptions.map(option =>

                        <div key={option._id} className="hero border border-gray-200 rounded-xl">
                            <div className="hero-content flex-col ">
                                <img src={option.image} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-3xl font-bold">{option.productName}</h1>
                                    <p><del>Orginal Price: {option.price}</del></p>
                                    <p>Price: {option.resalePrice}</p>
                                    <p>Using: {option.usingTime}</p>
                                    <p>Date: {option.date}</p>
                                    <h3 className='text-2xl mt-2 font-semibold'>Seller information</h3>
                                    <h4 className="text-xl">Name: {option.name}</h4>
                                    <p>Address: {option.location}</p>
                                    <p>Phone-Number: {option.phone}</p>
                                    <button className="btn btn-primary mt-2">Book Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Honda;