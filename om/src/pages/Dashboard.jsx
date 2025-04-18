import React, { useState } from 'react';
import ListView from '../components/ui/ListView';
import TableView from '../components/ui/TableView';
import Toolbar from '../components/layout/Toolbar';

const Dashboard = () => {
    const [view, setView] = useState('table');

    return (
        <div className="p-4 space-y-6">
            <Toolbar view={view} setView={setView} />
            {view === 'list' ? <ListView /> : <TableView />}
        </div>
    );
};

export default Dashboard;