import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {

    const { productName, resalePrice } = booking;
    const { user } = useContext(AuthContext);

    const handaleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            bike: productName,
            name,
            email,
            price,
            phone,
            location
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setBooking(null);
                    toast.success('Booking confirmed')
                }

            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handaleBooking} className='grid grid-cols-1 gap-3 mt-5'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your name" className="input input-bordered w-full " />
                        <input name="email" type="email" defaultValue={user?.email} disabled className="input input-bordered w-full " />
                        <input name="price" type="text" defaultValue={resalePrice} disabled className="input input-bordered w-full " />
                        <input name="phone" type="text" placeholder="Type your phone number" className="input input-bordered w-full " />
                        <input name="location" type="text" placeholder="Type your location" className="input input-bordered w-full " />
                        <input className='w-full btn btn-goast' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;