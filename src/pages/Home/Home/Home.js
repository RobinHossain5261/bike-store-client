import React from 'react';
import Products from '../../Products/Products';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;