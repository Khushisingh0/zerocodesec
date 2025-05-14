import React, { useState } from 'react';
import Header from './Header';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/style.css'; // Tailwind styles


// Reusable Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#0f1f2e] to-[#132d41] rounded-2xl p-10 w-full max-w-3xl shadow-2xl border border-blue-800 text-white relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-3xl font-extrabold mb-6 text-center flex items-center justify-center gap-2">
              {title}
            </h2>
            {children}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-3xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function DashBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
const handleScanNow = async () => {
    if (!selectedFile) {
      alert("Please choose a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("repoFile", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/api/scan", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Scan failed");

      const data = await response.json();
      console.log("Scan success:", data);
      setReportFilename(data.reportFile);

      alert("Scan completed! You can now view the report ");
      // You can close modal or show a download button
    } catch (err) {
      console.error(err);
      alert("Error scanning file");
    }
  };


  const handleDownloadReport = () => {
     if (selectedFile) {
      toast.success("✅ Report downloaded successfully!", {
        position: "top-right",
        hideProgressBar: true,
        className: "bg-transparent text-whitetext-sm backdrop-blur-md border border-green-600 px-5 py-4 rounded-xl shadow-lg",
        bodyClassName: "flex items-center",
        icon: false,
      });
    }
    setIsReportModalOpen(false);
    window.open(`http://localhost:5000/api/report/${reportFilename}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#08191c] relative">
      <Header />
      <ToastContainer
        limit={1}
        closeButton={false}
        autoClose={3000}
        draggable={false}
        pauseOnHover={false}
      />

      {/* Upload Repo Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="📁 Upload Repo File"
      >
        <div className="mb-6">
          <label className="block mb-3 text-lg font-medium text-gray-300">
            Choose a file to scan:
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-white bg-gray-800 border border-gray-700 rounded-lg cursor-pointer focus:outline-none file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-700 hover:file:bg-blue-800 transition"
          />
        </div>

        <div className="flex justify-end space-x-3 pt-6 border-t border-gray-700">
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-3 rounded-lg transition font-semibold"
          >
            Cancel
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg transition font-semibold shadow-lg" onClick={handleScanNow}
          >
            🚀 Scan Now
          </button>
        </div>
      </Modal>

      {/* Vulnerability Report Modal */}
      <Modal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        title="Vulnerability Report"
      >
        {selectedFile ? (
          <div className="mb-6">
            <p className="text-lg text-gray-300">
              Report for: <span className="font-semibold text-white">{selectedFile.name}</span>
            </p>
          </div>
        ) : (
          <p className="mb-6 text-gray-400">No file selected. Please scan a repository to view the report.</p>
        )}
        <div className="flex justify-end pt-6 border-t border-gray-700">
          <button
            onClick={handleDownloadReport} 
            className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-3 rounded-lg transition font-semibold shadow-lg"
          >
            Download Report
          </button>  
        </div>
      </Modal>

      {/* Dashboard Content */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="rounded-lg shadow-md p-6 text-white transition-transform hover:scale-105" style={{ background: "linear-gradient(145deg, #0b1f33, #081a2a)" }}>
            <h2 className="text-lg font-semibold mb-2">Dashboard</h2>
            <p>Repositories connected: <strong>5</strong></p>
            <p>Vulnerabilities detected (last 7 days): <strong>23</strong></p>
            <p>Auto-fixed: <strong>8</strong></p>
            <p>Risk level: <strong>Medium</strong></p>
          </div>
          <div className="rounded-lg shadow-md p-6 text-white transition-transform hover:scale-105" style={{ background: "linear-gradient(145deg, #0b1f33, #081a2a)" }}>
            <h2 className="text-lg font-semibold mb-2">Auto-fixed Pending issues</h2>
            <p><strong>8</strong> → <strong>15</strong> issues</p>
          </div>
          <div className="rounded-lg shadow-md p-6 text-white transition-transform hover:scale-105 flex items-center justify-center" style={{ background: "linear-gradient(145deg, #0b1f33, #081a2a)" }}>
            <div>
              <h2 className="text-lg font-semibold mb-2">Risk level</h2>
              <p className="text-2xl font-bold text-yellow-600">Medium</p>
            </div>
          </div>
        </div>

        {/* Recent Activity + CI/CD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-lg shadow-md p-6 text-white h-auto" style={{ background: "linear-gradient(145deg, #0b1f33, #081a2a)" }}>
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-3 text-sm">
              <li>✅ AI Fix applied - PR #42: Fix in *Main.java* <span className="text-blue-500 ml-5">1 hour ago</span></li>
              <li>⚠️ New Vulnerability detected in *server.js* <span className="text-blue-500 ml-5">2 hours ago</span></li>
              <li>✅ AI Fix applied - PR #41: Encode output in *user-profile.html* <span className="text-blue-500 ml-5">6 hours ago</span></li>
              <li>🚨 High risk detected - PR #440: SQL injection in *DatabaseHandler.py* <span className="text-blue-500 ml-5">1 day ago</span></li>
              <li>📁 New repo scan rep <span className="text-blue-500 ml-5">2 days ago</span></li>
            </ul>
          </div>

          {/* CI/CD + Actions */}
          <div className="space-y-4">
            <div className="shadow-lg rounded-xl p-6 transition-transform hover:scale-100 text-white" style={{ background: "linear-gradient(145deg, #0b1f33, #081a2a)" }}>
              <h2 className="text-xl font-semibold mb-3">CI/CD Integration</h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Validate and enforce secure code standards automatically</li>
                <li>Hook into your existing build pipelines</li>
                <li>Block merge if high-risk vulnerabilities are present</li>
              </ul>
            </div>

            <div className="shadow-lg rounded-xl p-6 transition-transform hover:scale-100 text-white" style={{ background: "linear-gradient(145deg, #0b1f33, #081a2a)" }}>
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-900 text-white rounded-md py-2 hover:bg-blue-600 transition-colors" onClick={() => setIsModalOpen(true)}><span role="img" aria-label="scan">🔍</span>  Scan New Repo</button>
                <button className="bg-green-900 text-white rounded-md py-2 hover:bg-green-600 transition-colors" onClick={() => setIsReportModalOpen(true)}><span role="img" aria-label="report">📄</span> View Vulnerability Report</button>
                <button className="bg-yellow-900 text-white rounded-md py-2 hover:bg-yellow-600 transition-colors"><span role="img" aria-label="configure">⚙️</span> Configure AI Suggestions</button>
                <button className="bg-purple-900 text-white rounded-md py-2 hover:bg-purple-600 transition-colors"><span role="img" aria-label="cicd">🔗</span> Add to CI/CD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


