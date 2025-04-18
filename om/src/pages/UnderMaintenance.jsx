import React from 'react';
import { Wrench, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UnderMaintenance = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center px-4">
            <Wrench className="text-yellow-500 w-16 h-16 mb-4 animate-bounce" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Under Maintenance</h1>
            <p className="text-gray-600 text-lg max-w-md mb-6">
                We're currently working hard to improve this page. Please check back later!
            </p>

            <button
                onClick={() => navigate(-1)}
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
                title="Go Back"
            >
                <ArrowLeft className="w-5 h-5" />
            </button>
        </div>
    );
};

export default UnderMaintenance;
