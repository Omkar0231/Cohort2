import React, { useState, useRef, useEffect } from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // import navigate
import { notifications } from '../../data/notificationData'; // Import the notification data

const Topbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const dropdownRef = useRef(null);
    const notificationRef = useRef(null);
    const navigate = useNavigate(); // initialize navigate

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const toggleNotifications = () => setShowNotifications(!showNotifications);

    const handleClickOutside = (e) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(e.target) &&
            notificationRef.current && !notificationRef.current.contains(e.target)
        ) {
            setShowDropdown(false);
            setShowNotifications(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 🔐 Handle logout action
    const handleLogout = () => {
        // You can also clear localStorage/session if needed
        // localStorage.removeItem("token");
        navigate('/login');
    };

    const user = {
        name: 'Om Prasad',
        avatar: 'https://i.pravatar.cc/300',
    };

    return (
        <div className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center relative">
            <h1 className="text-xl font-bold">WUE Hackathon</h1>

            <div className="flex items-center gap-4 relative">
                {/* Bell Icon for Notifications */}
                <div ref={notificationRef}>
                    <Bell
                        className="w-5 h-5 text-white cursor-pointer"
                        onClick={toggleNotifications} // Toggle notifications on click
                        title="Notifications"
                    />

                    {/* Notification Popup */}
                    {showNotifications && (
                        <div className="absolute right-16 top-12 w-64 bg-white text-black rounded-md shadow-lg z-10 p-3">
                            <h3 className="font-semibold mb-2">Notifications</h3>
                            {notifications.length > 0 ? (
                                <ul className="space-y-2">
                                    {notifications.map((note) => (
                                        <li key={note.id} className="text-sm border-b pb-1 last:border-none">
                                            {note.text}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 text-sm">No notifications</p>
                            )}
                        </div>
                    )}
                </div>

                {/* Avatar & Dropdown */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown} ref={dropdownRef}>
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">{user.name}</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

                {/* Dropdown Menu */}
                {showDropdown && (
                    <div className="absolute right-0 top-12 mt-1 w-48 bg-white text-black rounded-md shadow-lg z-10">
                        <ul className="py-1">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <Link to="/maintenance" className="block w-full h-full">Profile</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <Link to="/maintenance" className="block w-full h-full">Switch Account</Link>
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                                onClick={handleLogout}
                            >
                                Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Topbar;
