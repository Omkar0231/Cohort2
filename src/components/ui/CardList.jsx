// src/components/ui/CardList.jsx
import React from 'react';

const CardList = ({ data }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
            </div>
        ))}
    </div>
);

export default CardList;
