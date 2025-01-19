import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="md:flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="md:flex-1 md:ml-64 p-4"> {/* Add margin-left equal to the sidebar width */}
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
