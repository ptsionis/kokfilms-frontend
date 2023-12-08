import React, { useContext } from "react";

import { NavContext } from "../../App";

import "./SeeAllButton.css";

import translations from "../../translations/translations.json";

export default function SeeAllButton({ setShowAll }) {
  const language = useContext(NavContext).language;

  const seeAll = () => {
    setShowAll(true);
  };

  return (
    <button className="see-all-btn" onClick={() => seeAll()}>
      {translations[language].seeAllBtn}
    </button>
  );
}
