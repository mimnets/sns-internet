import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                     {/* Page content here  */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dash Menu</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                         {/* Sidebar content here */}
                        <li><Link to='/dashboard'>Customers</Link></li>
                        <li><Link to='/dashboard/add-customer'>Add Customer</Link></li>
                        <li><Link to='/dashboard/bill-collect'>Bill Collect</Link></li>
                        <li><Link to='/dashboard/add-bills'>Add Bills</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;