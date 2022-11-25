import React from 'react';

const About = () => {
    return (
        <div className="hero mt-10 py-24" style={{ backgroundImage: `url("https://st2.depositphotos.com/1001951/7025/i/950/depositphotos_70256465-stock-photo-biker-and-his-bobber-style.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div >
                    <h1 className=" text-3xl text-red-500 font-semibold">Used Motorcycle Store</h1>
                    <h1 className="mb-5 text-5xl font-bold ">About Us</h1>
                    <p className="mb-5">We are passionate motorcycle enthusiasts changing the way that riders buy motorcycles. <br />

                        In an increasingly digital world, sometimes you need to get away, and we can help you do that. <br />

                        We have the largest independently owned motorcycle inventory in the United States with over 1,000 motorcycles available for purchase. <br />

                        We sell all Brands and all kinds, so regardless of what your 2 wheeled vice is, we've got it. <br />

                        And you can enjoy peace of mind with your purchase as all of our motorcycles are inspected by factory trained technicians. <br />

                        Check out our huge and constantly growing inventory and contact us with any questions. We look forward to serving you!</p>
                    <button className="btn btn-primary">read more</button>
                </div>
            </div>
        </div>
    );
};

export default About;