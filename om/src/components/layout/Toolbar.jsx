import React from 'react';
import SearchInput from '../ui/SearchInput';
import Dropdown from '../ui/ToolbarDropdown';
import ToggleView from '../ui/ToggleView';

const Toolbar = () => {
    return (
        <div className="w-full bg-white dark:bg-gray-900/80 backdrop-blur-md p-4 rounded-md shadow border">
            <div className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">Dashboard</div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Left Section */}
                <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-1/2">
                    <SearchInput placeholder="Search Hackathon..." />
                    <Dropdown label="Sort by" options={["Recently Updated", "Name", "Start Date"]} />
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap gap-3 items-center justify-end w-full md:w-1/2">
                    <ToggleView />
                    <Dropdown label="Stage" options={["Applied", "Initial", "Final", "Closed"]} />
                    <Dropdown label="Status" options={["Active", "Inactive", "Completed"]} />
                    <Dropdown label="All Sources" options={["Website", "Referral", "Internal"]} />
                </div>
            </div>

            {/* Pagination and Summary */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                <div>Showing 1–10 of 100 Leads</div>
                <div className="flex gap-4">
                    <button className="hover:underline">&lt; Prev</button>
                    <button className="hover:underline">Next &gt;</button>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
