import React, { useState } from "react";
import {FiSun} from 'react-icons/fi';
import {FiMoon} from 'react-icons/fi';
import ShapeContainer from "./ShapeContainer";

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
      <ShapeContainer color= {isDarkMode ? "black" : "gray"}/> 
    </div>
  );
};

export default ToggleMode;
