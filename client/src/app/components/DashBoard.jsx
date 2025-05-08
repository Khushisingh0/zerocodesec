import React from 'react';
import Header from './Header';
import '@/style.css'; // Ensure Tailwind is loaded here

export default function DashBoard() {
  return (
    <div className="min-h-screen bg-[#10353b]">
      <Header />

      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 h-72 flex items-center justify-center">
            <h2 className="text-xl font-semibold">Card 1</h2>
            {/* Add your content for card 1 here */}
          </div>

          {/* Auto-fixed Pending issues */}
          <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 flex items-center justify-center">
            <h2 className="text-xl font-semibold">Auto-fixed Pending issues</h2>
            {/* Add your content for auto-fixed issues here */}
          </div>

          {/* Risk level */}
          <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 flex items-center justify-center">
            <h2 className="text-xl font-semibold">Risk level</h2>
            {/* Add your risk level content here */}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 h-96">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            {/* Add your recent activity list or content here */}
          </div>

          {/* Container for CI/CD and Quick Actions */}
          <div className="grid grid-rows-2 gap-4">
            {/* CI/CD Integration */}
            <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 h-1/2 flex items-center justify-center">
              <h2 className="text-xl font-semibold">CI/CD Integration</h2>
              {/* Add your CI/CD integration content here */}
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-transform hover:scale-105">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
               <div className="grid grid-cols-2 gap-4 h-24">
                <button className="bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Scan Repo</button>
                <button className="bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">View Vulnerability</button>
                <button className="bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">Configure AI Suggestions</button>
                <button className="bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors">Add to CI/CD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 


