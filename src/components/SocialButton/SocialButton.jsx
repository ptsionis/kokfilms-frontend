import React from "react";

import "./SocialButton.css";

export default function SocialButton({ href, title, color }) {
  return (
    <a
      className={`social-btn${color === "dark" ? "-dark" : ""} mx-1 py-3`}
      href={href}
      target="_blank"
      role="button"
      title={title}>
      <img src={"/social/" + title.toLowerCase() + ".svg"} alt={title} />
    </a>
  );
}
