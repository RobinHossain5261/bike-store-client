import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const DashboarLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Order</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboarLayout;