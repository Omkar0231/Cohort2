import React from 'react';
import { List, Table } from 'lucide-react';

const ToggleView = ({ view, setView }) => {
    const buttonBase = "h-10 w-10 flex items-center justify-center border rounded-md transition";
    const active = "bg-blue-500 text-white";
    const inactive = "bg-white text-gray-700 hover:bg-gray-100";

    return (
        <div className="flex gap-2 items-center">
            <button
                onClick={() => setView('list')}
                aria-label="List View"
                className={`${buttonBase} ${view === 'list' ? active : inactive}`}
            >
                <List size={18} />
            </button>
            <button
                onClick={() => setView('table')}
                aria-label="Table View"
                className={`${buttonBase} ${view === 'table' ? active : inactive}`}
            >
                <Table size={18} />
            </button>
        </div>
    );
};

export default ToggleView;
