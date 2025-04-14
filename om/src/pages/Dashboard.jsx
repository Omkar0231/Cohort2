import React, { useState } from 'react';
import Toolbar from '../components/layout/Toolbar';
import ListView from '../components/ui/ListView';
import TableView from '../components/ui/TableView';

const Dashboard = () => {
    const [view, setView] = useState('list');

    return (
        <div className="p-4">
            <Toolbar view={view} setView={setView} />
            <div className="mt-6">
                {view === 'list' ? <ListView /> : <TableView />}
            </div>
        </div>
    );
};

export default Dashboard;
