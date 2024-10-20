
"use client";

import { Sun, Moon } from 'lucide-react';
import {useState} from "react";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
      <button
          onClick={toggleMode}
          className={`flex items-center justify-between w-32 h-12 rounded-full px-2 transition-colors duration-300 focus:outline-none ${
              isDarkMode ? 'bg-gray-800' : 'bg-blue-100'
          }`}
      >
        <div className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-400' : 'text-yellow-500'}`}>
          <Sun size={20} />
          <span className="text-sm font-medium">Light</span>
        </div>
        <div className={`flex items-center space-x-2 ${isDarkMode ? 'text-blue-400' : 'text-gray-400'}`}>
          <span className="text-sm font-medium">Dark</span>
          <Moon size={20} />
        </div>
        <div
            className={`absolute w-14 h-10 rounded-full transition-transform duration-300 ${
                isDarkMode ? 'bg-gray-700 translate-x-16' : 'bg-white translate-x-0'
            }`}
        />
      </button>
  );
};

export default ThemeToggleButton;