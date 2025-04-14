import React from 'react';

const SearchInput = ({ placeholder }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="h-8 px-3 border border-gray-300 bg-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-60 mt-6"
        />
    );
};

export default SearchInput;
