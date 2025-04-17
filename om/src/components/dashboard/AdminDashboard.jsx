// src/components/dashboard/AdminDashboard.jsx
import React from 'react';
import CardList from '../ui/CardList';

const AdminDashboard = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 text-blue-700">Admin Dashboard</h1>
      <CardList data={data} />
    </div>
  );
};

export default AdminDashboard;
