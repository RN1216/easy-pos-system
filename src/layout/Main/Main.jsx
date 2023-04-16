import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarNav from '../../components/SidebarNav/SidebarNav';
import Navber from '../../components/Navbar/Navber';

const Main = () => {
    return (
        <div className='flex'>
            <SidebarNav/>
            <div className="w-full">
      <Navber></Navber>
        <Outlet />
      </div>
        </div>
    );
};

export default Main;