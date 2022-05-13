import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    const menu = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/contactUs">ContactUs</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        {user ? <button onClick={() => signOut(auth)}
            className='btn btn-ghost ' >LogOut</button> : <li><Link to="/login">Login</Link></li>}
    </>
    return (
        <div className='bg-base-100   '>
            <div className="navbar  md:justify-around md:w-11/12 md:mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <span className="btn btn-ghost normal-case text-xl">Doctors Portal</span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}

                    </ul>
                </div>
                <div className="navbar-end">
                    <label for="sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
    

                </div>
            </div>
        </div>
    );
};

export default Header;