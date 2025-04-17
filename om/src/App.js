import React from 'react';
import { Routes, Route } from 'react-router-dom';

import VerifyOTP from './pages/VerifyOTP';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HackathonList from "./components/student/HackathonList";
import Hackathons from "./pages/Hackathons";
import Topbar from './components/layout/Topbar';
import Sidebar from './components/layout/SideNavbar';
import Appbar from './components/layout/Appbar';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/auth/PrivateRoute';

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <Appbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hackathons" element={<HackathonList />} /> {/* Displaying HackathonList within the layout */}
            <Route path="/hackathons/:id" element={<Hackathons />} /> {/* Nested route within the layout */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOTP />} /> {/* Moved outside PrivateRoute */}
        <Route path="/hackathons" element={<Hackathons />} /> {/* Keep this public if intended */}

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;