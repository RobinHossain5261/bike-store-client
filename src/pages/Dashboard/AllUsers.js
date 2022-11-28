import { useQuery } from '@tanstack/react-query';
// import React, { useEffect, useState } from 'react';
import AllSeller from './AllSeller';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setUsers(data);
    //         })
    // }, []);


    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">All Seller</h1>
            <div className=' grid grid-cols-4 justify-between my-2 text-2xl font-semibold bg-gray-300 p-3'>
                <h3>Name</h3>
                <h3>Email</h3>
                <h3>Admin</h3>
                <h3>Delete</h3>
            </div>
            <div>
                {
                    users.map((user, i) => <AllSeller
                        key={i}
                        user={user}
                    ></AllSeller>)
                }
            </div>




        </div>
    );
};

export default AllUsers;