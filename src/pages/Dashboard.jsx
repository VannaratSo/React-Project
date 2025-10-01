import React from "react";
import useMockApi from "../hooks/useMockApi"; // we will create this next
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { data, loading } = useMockApi();
  const { logout } = useAuth();
  const navigate = useNavigate();

  if (loading)
    return <div className="p-6 text-white">Loading mock data...</div>;

  return (
    <div className="min-h-screen bg-[url('/bg-pattern.png')] bg-cover bg-center p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
          >
            Home
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Cards */}
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((user) => (
          <div
            key={user.id}
            className="backdrop-blur-md bg-white/20 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/40 rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-white">{user.name}</h2>
            <p className="text-gray-200">{user.role}</p>
            <p className="text-gray-300 mt-2">{user.email}</p>
            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
              View Profile
            </button>
          </div>
        ))}
      </section>

      {/* Table */}
      <section className="backdrop-blur-md bg-white/20 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/40 rounded-2xl p-4 shadow overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4 text-white">Users Table</h2>
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-200">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="border-t border-white/20">
                <td className="px-4 py-2 text-white">{user.name}</td>
                <td className="px-4 py-2 text-gray-200">{user.role}</td>
                <td className="px-4 py-2 text-gray-300">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
