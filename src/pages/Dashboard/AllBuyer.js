import { useQuery } from '@tanstack/react-query';
import Buyer from './Buyer';

const AllBuyer = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">All Buyer</h1>
            <div className=' grid grid-cols-4 justify-between my-2 text-2xl font-semibold bg-gray-300 p-3'>
                <h3>Name</h3>
                <h3>Email</h3>
                <h3>Admin</h3>
                <h3>Delete</h3>
            </div>
            <div>
                {
                    users.map((user, i) => <Buyer
                        key={i}
                        user={user}
                        refetch={refetch}
                    ></Buyer>)
                }
            </div>




        </div>
    );
};

export default AllBuyer;