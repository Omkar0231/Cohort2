import React from 'react';

const SearchInput = ({ placeholder }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="px-3 py-1.5 border border-gray-300 bg-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-60"
        />
    );
};

export default SearchInput;
