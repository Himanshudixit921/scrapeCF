import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div id="loading-indicator">
      <div className="lds-hourglass"></div>
    </div>
  );
};

export default Loader;
