import React from 'react';

const AuthInput = ({ label, type = "text", name, value, onChange, placeholder }) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
        </div>
    );
};

export default AuthInput;
