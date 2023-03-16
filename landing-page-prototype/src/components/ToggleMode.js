import React, { useState } from "react";
import {FiSun} from 'react-icons/fi';
import {FiMoon} from 'react-icons/fi';

const ToggleMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);

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
          background-color: ${isDarkMode ? "rgba(51, 51, 51)" : "#f5f5f5"};
          border-bottom: 3px solid ${isDarkMode ? "#f5f5f5" : "#333"}
        }
        .shapeStyle {
          color: ${isDarkMode ? "rgba(24, 24, 24)" : "silver"}
        }
        .image-container img {
          border: 10px solid ${isDarkMode ? "#f5f5f5" : "#505050"};
        }
      `}
      </style>
    </div>
  );
};

export default ToggleMode;
