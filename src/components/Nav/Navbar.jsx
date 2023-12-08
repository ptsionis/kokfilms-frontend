import React from "react";

import NavItem from "./NavItem";
import LanguageBadge from "../LanguageBadge/LanguageBadge";

import nav from "../../data/nav.json";
import translations from "../../translations/translations.json";

import "./Navbar.css";

export default function Navbar({
  toggleNav,
  scrollOffset,
  navbarRef,
  toggleLanguage,
}) {
  const navList = nav.map((item) => {
    return (
      <NavItem
        key={item.code}
        code={item.code}
        nameel={item.nameel}
        nameen={item.nameen}
        toggleNav={toggleNav}
        scrollOffset={scrollOffset}
      />
    );
  });

  const availableLangs = Object.keys(translations).map((code) => (
    <LanguageBadge key={code} code={code} toggleLanguage={toggleLanguage} />
  ));

  return (
    <nav className="h-100" ref={navbarRef}>
      <ul
        className="nav-list d-flex flex-column justify-content-center align-items-end list-unstyled"
        id="navbarId">
        {navList}
      </ul>
      <div className="lang-wrapper w-100 d-flex justify-content-center py-3">
        {availableLangs}
      </div>
    </nav>
  );
}
