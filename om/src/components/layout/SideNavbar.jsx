import React from "react";
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
} from "@tabler/icons-react";

const Sidebar = () => {
    const menuItems = [
        { label: "Dashboard", icon: <IconHome size={20} /> },
        { label: "Contending Teams", icon: <IconUsers size={20} /> },
        { label: "Submission", icon: <IconFileText size={20} /> },
        { label: "Mentor", icon: <IconUserStar size={20} /> },
        { label: "Transactions", icon: <IconCurrencyDollar size={20} /> },
        { label: "Reports", icon: <IconReportAnalytics size={20} /> },
        { label: "Setting", icon: <IconSettings size={20} /> },
    ];

    const helpItems = [
        { label: "Help Center", icon: <IconHelp size={20} /> },
        { label: "Feedback", icon: <IconMessage size={20} /> },
    ];

    return (
        <div className="flex flex-col h-[calc(100vh-64px)] w-60 bg-gray-100 border-r">
            <div className="flex flex-col flex-grow overflow-y-auto p-4 space-y-4">
                <nav className="space-y-2">
                    {menuItems.map((item, idx) => (
                        <a
                            href="#"
                            key={idx}
                            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                        >
                            {item.icon}
                            {item.label}
                        </a>
                    ))}
                </nav>

                <hr className="my-4 border-gray-300" />

                <nav className="space-y-2">
                    {helpItems.map((item, idx) => (
                        <a
                            href="#"
                            key={idx}
                            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                        >
                            {item.icon}
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="flex-grow" />
            </div>

            <div className="p-4 space-y-2 text-sm text-gray-500 border-t border-gray-300">
                <a href="#" className="block hover:text-blue-600">Terms of Service</a>
                <a href="#" className="block hover:text-blue-600">Privacy Policy</a>
                <p className="mt-2 text-xs text-gray-400">© 2025 WUE_OM, Inc.</p>
            </div>
        </div>
    );
};

export default Sidebar;
