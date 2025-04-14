import React from 'react';

const ListView = () => {
    const data = [
        { name: 'Hackathon A', date: '2025-04-11', status: 'Active' },
        { name: 'Hackathon B', date: '2025-04-12', status: 'Closed' },
        { name: 'Hackathon C', date: '2025-04-13', status: 'Upcoming' },
    ];

    return (
        <div className="space-y-4">
            {data.map((item, idx) => (
                <div
                    key={idx}
                    className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800"
                >
                    <div className="text-lg font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                        Date: {item.date}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                        Status: {item.status}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListView;
