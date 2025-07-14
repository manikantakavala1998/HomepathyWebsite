import React from "react";
import "./LoadingBar.css"; // Make sure the CSS file is imported

// You can import a logo if you have one, for example:
import Logo from './../../../assets/images/loadingLogo.png'; // Adjust the path as per your file structure

const LoadingBar = ({ message = "please wait..." }) => {
  return (
    <div className="loading-overlay">
      <div className="loading-bar">
        {/* Container for rotating circle with logo inside */}
        <div className="loading-ring-container">
          {/* Rotating blue ring */}
          <div className="loading-ring"></div>

          {/* Logo centered inside the rotating ring */}
          <img src={Logo} alt="Logo" className="loading-logo" />
        </div>

        {/* Loading message */}
        <div className="loading-message">{message}</div>
      </div>
    </div>
  );
};

export default LoadingBar;

