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
          background-color: ${isDarkMode ? "#333" : "#fff"};
          color: ${isDarkMode ? "#fff" : "#333"};
        }
        tag {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ToggleMode;
