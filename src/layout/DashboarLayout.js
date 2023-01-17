import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Header from '../pages/Shared/Header/Header';

const DashboarLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side sticky top-6 mr-5">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-white font-bold text-lg text-base-content">

                        <li className='hover:ml-5 hover:text-green-600'><Link to='/dashboard'>My Orders</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li className='hover:ml-5 hover:text-green-600'><Link to='/dashboard/sellers'>All Sellers</Link></li>
                                <li className='hover:ml-5 hover:text-green-600'><Link to='/dashboard/buyers'>All Buyers</Link></li>

                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li className='hover:ml-5 hover:text-green-600'><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                <li className='hover:ml-5 hover:text-green-600'><Link to='/dashboard/myproduct'>My Product</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboarLayout;