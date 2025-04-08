import React from 'react';
import Button from '../ui/Button';
import Dropdown from '../ui/Dropdown';

const Toolbar = () => (
    <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <div className="flex items-center gap-4">
            <Dropdown />
            <Button text="Add New" />
        </div>
    </div>
);

export default Toolbar;
