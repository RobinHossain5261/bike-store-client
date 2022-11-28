import React, { useEffect, useState } from 'react';
import Buyer from './Buyer';

const AllBuyer = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setUsers(data);
            })
    }, []);
    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">All Buyer</h1>
            <div className=' grid grid-cols-4 justify-between my-2 text-2xl font-semibold bg-gray-300 p-3'>
                <h3>Name</h3>
                <h3>Email</h3>
                <h3>Role</h3>
                <h3>Delete</h3>
            </div>
            <div>
                {
                    users.map((user, i) => <Buyer
                        key={i}
                        user={user}
                    ></Buyer>)
                }
            </div>




        </div>
    );
};

export default AllBuyer;