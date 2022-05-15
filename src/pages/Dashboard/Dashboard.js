import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin]=useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h3 className='text-center text-purple-600 text-3xl'>dashboard</h3>
                <Outlet/>
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    <li><Link  className=' btn btn-ghost' to='/dashboard'>my appointment</Link></li>
                    <li><Link  className=' btn btn-ghost' to='/dashboard/review'>my reviews</Link></li>
                    <li><Link  className=' btn btn-ghost' to='/dashboard/history'>my history</Link></li>
                    {admin && <li><Link  className=' btn btn-ghost' to='/dashboard/users'>users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;