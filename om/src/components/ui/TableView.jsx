import React from 'react';
import hackathonData from '../../data/hackathonData';

const TableView = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hackathonData.map((item, idx) => (
                <div
                    key={idx}
                    className="p-4 border rounded-lg shadow-md bg-blue-50 hover:bg-blue-100 dark:hover:bg-blue-400 transition duration-200 ease-in-out"
                >
                    <div className="text-xl font-bold">{item.name}</div>
                    <div className="text-sm mt-1 text-gray-500 dark:text-gray-300">
                        {item.date}
                    </div>
                    <div className="mt-2 inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        {item.status}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TableView;
