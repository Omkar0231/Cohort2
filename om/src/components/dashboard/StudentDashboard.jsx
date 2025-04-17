// src/components/dashboard/StudentDashboard.jsx
import React from 'react';
import CardList from '../ui/CardList';

const StudentDashboard = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 text-purple-700">Student Dashboard</h1>
      <CardList data={data} />
    </div>
  );
};

export default StudentDashboard;
