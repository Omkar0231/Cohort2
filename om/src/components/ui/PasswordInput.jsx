import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Optional: install lucide-react or use any icon lib

const PasswordInput = ({ placeholder = "Password", value, onChange, name, required = true }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="relative mb-3 w-full">
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={value}
                onChange={onChange}
                name={name}
                required={required}
            />
            <button
                type="button"
                onClick={toggleVisibility}
                className="absolute right-2 top-[50%] transform -translate-y-[100%] text-gray-500 hover:text-black transition duration-200"
            >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
        </div>
    );
};

export default PasswordInput;
