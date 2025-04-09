// src/pages/Dashboard.jsx
import React from 'react';
import CardList from '../components/ui/CardList';

const Dashboard = () => {
    const sampleData = [
        { title: "Team Alpha", description: "AI-based Solution" },
        { title: "Hackers United", description: "Web3 Integration" },
    ];

    return (
        <div className="p-4">
            <CardList data={sampleData} />
        </div>
    );
};

export default Dashboard;
