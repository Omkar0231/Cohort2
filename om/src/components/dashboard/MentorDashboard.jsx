// src/components/dashboard/MentorDashboard.jsx
import React from 'react';
import CardList from '../ui/CardList';

const MentorDashboard = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 text-green-700">Mentor Dashboard</h1>
      <CardList data={data} />
    </div>
  );
};

export default MentorDashboard;
