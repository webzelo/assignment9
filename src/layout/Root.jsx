import React from 'react';
import { Outlet } from 'react-router';
import Home from '../component/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;