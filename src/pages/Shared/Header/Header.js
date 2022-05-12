import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const menu = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/contactUs">ContactUs</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>
    return (
        <div className='bg-base-100   '>
            <div className="navbar  md:justify-around md:w-11/12 md:mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
            </div>
        </div>
    );
};

export default Header;