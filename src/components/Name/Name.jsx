import React, { useContext } from "react";

import { NavContext } from "../../App";

import "./Name.css";

import translations from "../../translations/translations.json";

const Name = () => {
  const language = useContext(NavContext).language;

  return (
    <>
      <div className="intro-wrapper d-flex flex-column text-start me-0 me-lg-5">
        <h1 className="name">KOKFILMS</h1>
        <h2 className="intro">{translations[language].intro1}</h2>
        <h2 className="intro">{translations[language].intro2}</h2>
        <h2 className="intro">{translations[language].intro3}</h2>
      </div>
      <img
        src={"/logos/icon-dark.webp"}
        className="logo-image ms-0 ms-lg-5"
        alt="KoKFilms"
      />
    </>
  );
};

export default Name;
