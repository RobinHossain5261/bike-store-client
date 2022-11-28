import React from 'react';

const Alluser = ({ user }) => {
    return (
        <tbody >
            {
                user?.role === 'seller' &&
                <tr className=' grid grid-cols-4 justify-between my-2'>

                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>
                        <button className="btn btn-xs">Make Admin</button>
                    </td>
                    <td>
                        <button className="btn btn-error btn-sm">Delete</button>
                    </td>
                </tr>
            }
        </tbody>
    );
};

export default Alluser;