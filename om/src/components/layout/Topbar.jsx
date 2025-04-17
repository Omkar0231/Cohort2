import React, { useState, useRef, useEffect } from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const { user, logout, loading } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">WUE Hackathon</h1>

      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        <Bell className="w-5 h-5 cursor-pointer" />

        {/* Don't show anything while loading */}
        {loading ? null : user ? (
          <>
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
              <img
                src={user.avatar || 'https://i.pravatar.cc/300'}
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium">{user.name || 'User'}</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {showDropdown && (
              <div className="absolute right-0 top-12 mt-1 w-48 bg-white text-black rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate('/profile')}
                  >
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Switch Account</li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-white text-blue-600 px-3 py-1 rounded-md font-medium"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Topbar;
