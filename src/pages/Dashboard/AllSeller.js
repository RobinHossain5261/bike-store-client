import React from 'react';
import toast from 'react-hot-toast';

const Alluser = ({ user, refetch }) => {

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.');
                    refetch();
                }
            })
    }
    return (
        <div >
            {
                user?.role === 'seller' &&
                <tr className=' grid grid-cols-4 justify-between my-2'>

                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>
                        {
                            user?.admin !== 'admin' &&
                            <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-xs">Make Admin</button>
                        }
                    </td>
                    <td>
                        <button className="btn btn-error btn-sm">Delete</button>
                    </td>
                </tr>
            }
        </div>
    );
};

export default Alluser;