// src/App.js
import React from 'react';
import Topbar from './components/layout/Topbar';
import Sidebar from './components/layout/SideNavbar';
import Appbar from './components/layout/Appbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
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
  );
}

export default App;
