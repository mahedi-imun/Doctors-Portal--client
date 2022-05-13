import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h3 className='text-center text-purple-600 text-3xl'>dashboard</h3>
                <Outlet/>
            </div>
            <div className="drawer-side">
                <label for="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    <li><Link  className=' btn btn-ghost' to='/dashboard'>my appointment</Link></li>
                    <li><Link  className=' btn btn-ghost' to='/dashboard/review'>my reviews</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;