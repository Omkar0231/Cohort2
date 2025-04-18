import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Added Link for navigation
import Topbar from './components/layout/Topbar';
import Sidebar from './components/layout/SideNavbar';
import Appbar from './components/layout/Appbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UnderMaintenance from './pages/UnderMaintenance';


function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Login page (now shows first) */}
        <Route path="/" element={<Login />} />

        {/* Routes for Dashboard, Login, and Signup */}
        <Route
          path="/dashboard"
          element={
            <div className="flex flex-col h-screen">
              <Topbar />
              <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex flex-col flex-1 overflow-y-auto">
                  <Appbar />
                  <Dashboard />
                </div>
              </div>
            </div>
          }
        />

        {/* Placeholder routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/maintenance" element={<UnderMaintenance />} />

        {/* ⛔ Future page placeholder */}
        <Route path="/analytics" element={<UnderMaintenance />} />
        <Route path="/user-profile" element={<UnderMaintenance />} />
      </Routes>
    </Router>
  );
}

export default App;
