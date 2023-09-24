import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            dashboardlayout pages
            <div>
                <ul>
                    <li>
                        <Link to='/Dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/Dashboard/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/Dashboard/editProfile'>Edit Profile</Link>
                    </li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;