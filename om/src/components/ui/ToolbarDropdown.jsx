import React from 'react';

const Dropdown = ({ label, options = [] }) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    {label}
                </label>
            )}
            <select className="px-3 py-1.5 text-sm border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                {options.map((option, idx) => (
                    <option key={idx} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
