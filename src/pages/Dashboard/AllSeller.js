import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Alluser = ({ user, refetch }) => {
    const [sellers, setSellers] = useState([]);

    const handaleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete.');
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully');
                        const remaining = sellers.filter(odr => odr._id !== id);
                        setSellers(remaining);
                    }
                })
        }
    }

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
                        <button onClick={() => handaleDelete(user._id)} className="btn btn-error btn-sm">Delete</button>
                    </td>
                </tr>
            }
        </div>
    );
};

export default Alluser;