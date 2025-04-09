import React, { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Topbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Sample user info (you can replace this with real data)
    const user = {
        name: 'Om Prasad',
        avatar: 'https://i.pravatar.cc/300', // Replace with user's actual profile picture or use default
    };

    return (
        <div className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">WUE Hackathon</h1>
            <div className="flex items-center gap-4 relative" ref={dropdownRef}>
                <Bell className="w-5 h-5 text-white cursor-pointer" />

                <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">{user.name}</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

                {showDropdown && (
                    <div className="absolute right-0 top-12 mt-1 w-48 bg-white text-black rounded-md shadow-lg z-10">
                        <ul className="py-1">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Switch Account</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Topbar;
