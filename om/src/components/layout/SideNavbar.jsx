// src/components/layout/SideNavbar.jsx

import React from "react";
import { Link } from "react-router-dom";

import {
  IconHome,
  IconUsers,
  IconFileText,
  IconUserStar,
  IconReportAnalytics,
  IconSettings,
  IconHelp,
  IconMessage,
  IconCurrencyDollar,
  IconCalendarEvent,
} from "@tabler/icons-react";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", icon: <IconHome size={20} />, path: "/" },
    { label: "Hackathons", icon: <IconCalendarEvent size={20} />, path: "/hackathons" },
    { label: "Contending Teams", icon: <IconUsers size={20} />, path: "/teams" },
    { label: "Submission", icon: <IconFileText size={20} />, path: "/submission" },
    { label: "Mentor", icon: <IconUserStar size={20} />, path: "/mentor" },
    { label: "Transactions", icon: <IconCurrencyDollar size={20} />, path: "/transactions" },
    { label: "Reports", icon: <IconReportAnalytics size={20} />, path: "/reports" },
    { label: "Setting", icon: <IconSettings size={20} />, path: "/settings" },
  ];

  const helpItems = [
    { label: "Help Center", icon: <IconHelp size={20} />, path: "/help" },
    { label: "Feedback", icon: <IconMessage size={20} />, path: "/feedback" },
  ];

  return (
    <aside className="flex flex-col h-[calc(100vh-64px)] w-60 bg-gray-100 border-r">
      <div className="flex flex-col flex-grow overflow-y-auto p-4 space-y-4">
        <nav className="space-y-2">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="flex items-center gap-3 px-2 py-1 rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <hr className="my-4 border-gray-300" />

        <nav className="space-y-2">
          {helpItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="flex items-center gap-3 px-2 py-1 rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 text-sm text-gray-500 border-t border-gray-300 space-y-1">
        <Link to="/terms" className="block hover:text-blue-600">Terms of Service</Link>
        <Link to="/privacy" className="block hover:text-blue-600">Privacy Policy</Link>
        <p className="mt-2 text-xs text-gray-400">© 2025 WUE_OM, Inc.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
