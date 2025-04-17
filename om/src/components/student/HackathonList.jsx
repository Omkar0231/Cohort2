import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const HackathonList = () => {
  const [hackathons, setHackathons] = useState([]);
  const { token } = useAuth(); // Get token from context

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/hackathons/", {
          headers: {
            Authorization: `Bearer ${token}`, // Use the token if available
          },
        });
        setHackathons(response.data);
      } catch (err) {
        console.error("Error fetching hackathons:", err);
        alert("Failed to load hackathons. Please try again later.");
      }
    };

    if (token) {
      fetchHackathons();
    } else {
      console.log("No token, skipping fetch.");
    }
  }, [token]); // Only refetch if token changes

  const applyToHackathon = async (id) => {
    try {
      await axios.post(`http://127.0.0.1:8000/api/hackathons/${id}/apply/`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Successfully applied to hackathon!");
    } catch (err) {
      alert("Application failed. Maybe you're not logged in or already applied.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Hackathon Listings</h2>
      <ul className="space-y-4">
        {hackathons.length > 0 ? (
          hackathons.map((hackathon) => (
            <li key={hackathon.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{hackathon.title}</h3>
              <p>{hackathon.description}</p>
              <p className="text-sm text-gray-600 mt-2">
                {new Date(hackathon.start_date).toLocaleString()} →{" "}
                {new Date(hackathon.end_date).toLocaleString()}
              </p>

              {token ? (
                <button
                  onClick={() => applyToHackathon(hackathon.id)}
                  className="mt-2 bg-green-600 text-white px-4 py-1 rounded"
                >
                  Apply
                </button>
              ) : (
                <p className="text-red-500 mt-2">Login to apply</p>
              )}
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500">No hackathons available at the moment.</li>
        )}
      </ul>
    </div>
  );
};

export default HackathonList;
