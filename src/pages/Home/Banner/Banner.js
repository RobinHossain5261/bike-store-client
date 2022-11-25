import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.rumbleon.com/static/media/web_hero-image-beach@2x.467c6788.jpg")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='max-w-screen-md	'>
                    <h1 className="mb-5 text-5xl font-bold">Your National Online Pre-Owned Motorcycle Dealership</h1>
                    <p className="mb-5">Whether you are looking for an upgrade or ready to sell, Used Motorcycle Store is your one-stop-shop for all things two-wheeled! Simply click Cash Offer below, provide your motorcycle details, and get a cash offer in less than 24 hours, shipping included. It’s that easy!</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;