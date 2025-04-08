import React from 'react';

const Sidebar = () => (
    <div className="flex flex-col h-screen w-64 bg-gray-100 border-r">
        {/* Scrollable content wrapper */}
        <div className="flex flex-col flex-grow overflow-y-auto p-4">
            {/* Top Section */}
            <nav className="space-y-4">
                <a href="#" className="block text-gray-700 hover:text-blue-600">Dashboard</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Contending Teams</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Submission</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Mentor</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Transactions</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Reports</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Setting</a>
            </nav>

            <hr className="my-4 border-gray-300" />

            {/* Middle Section */}
            <nav className="space-y-4">
                <a href="#" className="block text-gray-700 hover:text-blue-600">Help Center</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Feedback</a>
            </nav>

            {/* Spacer */}
            <div className="flex-grow" />
        </div>

        {/* Sticky Footer Section (always visible or scrolls with content) */}
        <div className="p-4 space-y-2 text-sm text-gray-500 border-t border-gray-300">
            <a href="#" className="block hover:text-blue-600">Terms of Service</a>
            <a href="#" className="block hover:text-blue-600">Privacy Policy</a>
            <p className="mt-2 text-xs text-gray-400">© 2025 WUE_OM</p>
        </div>
    </div>
);

export default Sidebar;
