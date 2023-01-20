import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user, loading } = useContext(AuthContext);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                     {/* Page content here  */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                         {/* Sidebar content here */}
                        <li><Link to='/dashboard/customers'>Customers</Link></li>
                        <li><Link to='/dashboard/bill-collect'>Bill Collect</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;