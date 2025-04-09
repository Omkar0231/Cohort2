import React from 'react';
import Topbar from './Topbar';
import Sidebar from './SideNavbar';
import Appbar from './Appbar';

const MainLayout = ({ children }) => (
    <div className="flex flex-col h-screen">
        <Topbar />
        <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <div className="h-16 flex-shrink-0">
                    <Appbar />
                </div>
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default MainLayout;
