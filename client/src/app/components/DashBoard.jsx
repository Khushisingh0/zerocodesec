// DashBoard.jsx
import React from 'react';
import Header from './Header';
import '@/style.css'; // Tailwind styles

export default function DashBoard() {
  return (
    <div className="min-h-screen bg-[#10353b]">
      <Header />

      <div className="py-6 px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Repositories & Vulnerabilities */}
          <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 transition-transform hover:scale-105">
            <h2 className="text-lg font-semibold mb-2">Dashboard</h2>
            <p>Repositories connected: <strong>5</strong></p>
            <p>Vulnerabilities detected (last 7 days): <strong>23</strong></p>
            <p>Auto-fixed: <strong>8</strong></p>
            <p>Risk level: <strong>Medium</strong></p>
          </div>

          {/* Auto-fixed Pending Issues */}
          <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 transition-transform hover:scale-105">
            <h2 className="text-lg font-semibold mb-2">Auto-fixed Pending issues</h2>
            <p><strong>8</strong> → <strong>15</strong> issues</p>
          </div>

          {/* Risk Level */}
          <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 transition-transform hover:scale-105 flex items-center justify-center">
            <div>
              <h2 className="text-lg font-semibold mb-2">Risk level</h2>
              <p className="text-2xl font-bold text-yellow-600">Medium</p>
            </div>
          </div>
        </div>

        {/* Lower Half: Recent Activity | CI/CD & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 h-auto">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-3 text-sm">
              <li>✅ AI Fix applied - PR #42: Fix in *Main.java* <span className="text-gray-500 ml-2">1 hour ago</span></li>
              <li>⚠️ New Vulnerability detected in *server.js* <span className="text-gray-500 ml-2">2 hours ago</span></li>
              <li>✅ AI Fix applied - PR #41: Encode output in *user-profile.html* <span className="text-gray-500 ml-2">6 hours ago</span></li>
              <li>🚨 High risk detected - PR #440: SQL injection in *DatabaseHandler.py* <span className="text-gray-500 ml-2">1 day ago</span></li>
              <li>📁 New repo scan rep <span className="text-gray-500 ml-2">2 days ago</span></li>
            </ul>
          </div>

          {/* CI/CD + Quick Actions */}
          <div className="space-y-4">
            {/* CI/CD Integration */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-transform hover:scale-105 text-gray-800 dark:text-white">
              <h2 className="text-xl font-semibold mb-3">CI/CD Integration</h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Validate and enforce secure code standards automatically</li>
                <li>Hook into your existing build pipelines</li>
                <li>Block merge if high-risk vulnerabilities are present</li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-transform hover:scale-105 text-gray-800 dark:text-white">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition-colors">Scan New Repo</button>
                <button className="bg-green-500 text-white rounded-md py-2 hover:bg-green-600 transition-colors">View Vulnerability Report</button>
                <button className="bg-yellow-500 text-white rounded-md py-2 hover:bg-yellow-600 transition-colors">Configure AI Suggestions</button>
                <button className="bg-purple-500 text-white rounded-md py-2 hover:bg-purple-600 transition-colors">Add to CI/CD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
