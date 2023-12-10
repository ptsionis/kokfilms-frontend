import React from "react";

import "./Loader.css";

const Loader = () => {
  return (
    <div className="page loader-bg">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
