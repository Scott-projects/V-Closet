import React, { useState, useEffect } from "react";
import {FiSun} from 'react-icons/fi';
import {FiMoon} from 'react-icons/fi';

const ToggleMode = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  return (
    <div>
      <tag onClick={() => setDarkMode(!isDarkMode)}>
        {isDarkMode ? <FiSun/> : <FiMoon/>}
      </tag>
      <style jsx>{`
        body {
          background-color: ${isDarkMode ? "#333" : "#f5f5f5"};
          color: ${isDarkMode ? "#f5f5f5" : "#333"};
        }
        tag {
          cursor: pointer;
        }
      `}</style>
      <style jsx global>{`
        .navbar-menu {
          background-color: ${isDarkMode ? "#333" : "#f5f5f5"};
          border-bottom: 3px solid ${isDarkMode ? "#f5f5f5" : "#333"}
        }
        .shapeStyle {
          color: ${isDarkMode ? "#181818" : "silver"}
        }
        .image-container img {
          border: 10px solid ${isDarkMode ? "gray" : "#505050"};
        }
        .weather-icon {
          background-color: ${isDarkMode ? "#f5f5f5" : "#333"};
        }
        .weather-icon img {
          filter: drop-shadow(0 0 4px ${isDarkMode ? "#181818" : "#f5f5f5"});
        }
      `}
      </style>
    </div>
  );
};

export default ToggleMode;
