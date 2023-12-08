import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 d-flex flex-column flex-lg-row justify-content-center justify-content-lg-around">
      <span className="w-100">
        <a href="https://kokfilms.gr/">KOKFILMS</a> &copy;{" "}
        {new Date().getFullYear()}
      </span>
      <span className="w-100">
        DEVELOPED BY{" "}
        <a href="https://ptsionis.gr/" target="_blank">
          PTSIONIS
        </a>
      </span>
    </footer>
  );
}
