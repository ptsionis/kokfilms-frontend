import React from "react";

import "./LanguageBadge.css";

export default function LanguageBadge({ code, toggleLanguage }) {
  const useLanguage = () => {
    toggleLanguage(code);
  };

  return (
    <img
      className="lang-badge mx-2"
      src={`/flags/flag-${code}.svg`}
      alt={`${code} flag`}
      title={code}
      onClick={() => useLanguage()}
    />
  );
}
