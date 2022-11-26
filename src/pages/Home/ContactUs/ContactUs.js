import React from 'react';

const ContactUs = () => {
    return (
        <div className='py-10'>
            <div className='text-center'>
                <h3 className="text-xl text-red-500 font-bold">Contact Us</h3>
                <h2 className='text-3xl font-bold'>Stay connected with us</h2>
            </div>
            <form>
                <div className='border border-gray-300 shadow-xl rounded-xl lg:w-[450px] mx-auto mt-6 p-6'>
                    <input type="email" placeholder="Your Email" className="input input-bordered w-full mb-5" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full mb-5" />
                    <textarea className="textarea textarea-bordered w-full h-24 mb-5" placeholder="Your message"></textarea>
                    <div className='text-center'>
                        <button className='btn btn-outline'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;