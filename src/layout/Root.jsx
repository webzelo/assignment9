import React from 'react';
import { Outlet } from 'react-router';
import Home from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;