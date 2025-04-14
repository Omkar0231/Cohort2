import React from 'react';

const TableView = () => {
    const data = [
        { name: 'Hackathon A', date: '2025-04-11', status: 'Active' },
        { name: 'Hackathon B', date: '2025-04-12', status: 'Closed' },
        { name: 'Hackathon C', date: '2025-04-13', status: 'Upcoming' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, idx) => (
                <div
                    key={idx}
                    className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800"
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
