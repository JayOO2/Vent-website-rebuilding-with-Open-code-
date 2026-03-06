"use client";

import { useState } from "react";
import Link from "next/link";

const ADMIN_PASSWORD = "admin123";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid password!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">Admin Panel</h1>
          <p className="text-gray-400 text-center mb-6">Cafe De Anatolia</p>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          >
            Login
          </button>
          <p className="text-gray-400 text-sm mt-4 text-center">Default password: admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <a href="/" className="text-blue-400 hover:text-blue-300">View Website</a>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Manage Content</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/admin/events"
              className="block p-6 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              <h3 className="text-xl font-bold text-white">Events</h3>
              <p className="text-purple-200 text-sm">Manage events, announcements & ticket links</p>
            </Link>
            <Link
              href="/admin/artists"
              className="block p-6 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <h3 className="text-xl font-bold text-white">Artists</h3>
              <p className="text-green-200 text-sm">Add, edit or remove artists</p>
            </Link>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-white mb-4">Quick Info</h2>
          <div className="space-y-2 text-gray-300">
            <p>• Events and Artists data is stored in your browser (localStorage)</p>
            <p>• Changes will appear on the website immediately</p>
            <p>• To update the website permanently, you would need a backend database</p>
            <p>• Current setup works for demonstration purposes</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-400 hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
