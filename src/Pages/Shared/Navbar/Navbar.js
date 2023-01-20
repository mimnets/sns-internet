import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
            user?.uid
                ?
                    <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link onClick={handleLogOut}>Sign Out</Link></li>
                    </>
                :
                    <li><Link to='/login'>Login</Link></li>

        }

    </>;
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">SNS Internet</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;