import React from 'react';
import hackathonData from '../../data/hackathonData';

const ListView = () => {
    return (
        <div className="space-y-4">
            {hackathonData.map((item, idx) => (
                <div
                    key={idx}
                    className="p-4 border rounded-md shadow-sm bg-blue-50 hover:bg-blue-100 dark:hover:bg-blue-400 transition duration-200 ease-in-out"
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
