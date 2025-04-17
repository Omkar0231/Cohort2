import React from 'react';
import { useAuth } from '../context/AuthContext';

import StudentDashboard from '../components/dashboard/StudentDashboard';
import MentorDashboard from '../components/dashboard/MentorDashboard';
import AdminDashboard from '../components/dashboard/AdminDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  const sampleData = [
    { title: "Team Alpha", description: "AI-based Solution" },
    { title: "Hackers United", description: "Web3 Integration" },
  ];

  const renderDashboard = () => {
    if (user?.role === 'student') return <StudentDashboard data={sampleData} />;
    if (user?.role === 'mentor') return <MentorDashboard data={sampleData} />;
    if (user?.role === 'admin') return <AdminDashboard data={sampleData} />;
    return <div className="text-center text-red-500">Unknown role</div>;
  };

  return (
    <div className="p-4">
      {renderDashboard()}
    </div>
  );
};

export default Dashboard;
