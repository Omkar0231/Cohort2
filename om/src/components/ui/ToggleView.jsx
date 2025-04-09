import React, { useState } from 'react';
import { List, Table } from 'lucide-react';

const ToggleView = () => {
    const [view, setView] = useState('list');

    const buttonBaseStyle = "p-2 border rounded-md transition-colors duration-200";
    const activeStyle = "bg-blue-500 text-white";
    const inactiveStyle = "bg-white text-gray-700 hover:bg-gray-100";

    return (
        <div className="flex gap-2 items-center">
            <button
                onClick={() => setView('list')}
                aria-label="List View"
                className={`${buttonBaseStyle} ${view === 'list' ? activeStyle : inactiveStyle}`}
            >
                <List size={18} />
            </button>
            <button
                onClick={() => setView('table')}
                aria-label="Table View"
                className={`${buttonBaseStyle} ${view === 'table' ? activeStyle : inactiveStyle}`}
            >
                <Table size={18} />
            </button>
        </div>
    );
};

export default ToggleView;
