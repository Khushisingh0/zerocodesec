import React from 'react';
import '@/style.css'; // Ensure Tailwind is loaded here


const Header = () => {
  return (
    <header className="bg-gradient-to-r bg-[#1E293B] text-white py-5 px-6 flex items-center justify-between shadow-md ">
      <div className="logo text-xl font-bold tracking-tight">
        <span className="text-transparent bg-clip-text text-3xl bg-gradient-to-r from-blue-400 to-purple-400">
          ZeroCodeSec
        </span>
      </div>
      <nav className="nav-links space-x-6">
        <a
          href="#"
          className="text-gray-200 hover:text-white transition-colors duration-300
                     hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20
                     px-3 py-1.5 rounded-md"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="text-gray-200 hover:text-white transition-colors duration-300
                     hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20
                     px-3 py-1.5 rounded-md"
        >
          Repositories
        </a>
        <a
          href="#"
          className="text-gray-200 hover:text-white transition-colors duration-300
                     hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20
                     px-3 py-1.5 rounded-md"
        >
          Settings
        </a>
      </nav>
    </header>
  );
};

export default Header;
