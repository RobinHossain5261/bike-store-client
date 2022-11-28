import React from 'react';

const Buyer = ({ user }) => {
    return (
        <tbody>
            {
                user?.role === 'buyer' &&
                <tr className=' grid grid-cols-4 justify-between my-2'>

                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.role}</td>
                    <td>
                        <button className="btn btn-error btn-sm">Delete</button>
                    </td>
                </tr>
            }
        </tbody>
    );
};

export default Buyer;