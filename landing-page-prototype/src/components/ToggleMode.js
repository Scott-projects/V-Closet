import React, { useState } from "react";

const ToggleMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div>
      <button onClick={() => setDarkMode(!isDarkMode)}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <style jsx>{`
        body {
          background-color: ${isDarkMode ? "#333" : "#fff"};
          color: ${isDarkMode ? "#fff" : "#333"};
        }
      `}</style>
    </div>
  );
};

export default ToggleMode;
