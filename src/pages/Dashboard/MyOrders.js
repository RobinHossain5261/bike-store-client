import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext);

    const url = `https://bike-store-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">My Orders</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) =>
                                <tr key={i}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask rounded-xl w-24 h-24">
                                                    <img src={booking.image} alt="honda" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{booking.bike}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user?.email}
                                    </td>
                                    <td className='text-green-500'>{booking.price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-sm">pay</button>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;