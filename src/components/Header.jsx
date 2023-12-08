import { React, useState } from "react";
import Burger from "./Nav/Burger";
import Navbar from "./Nav/Navbar";

export default function Header({ navbarRef, scrollOffset, toggleLanguage }) {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prevOpenNav) => !prevOpenNav);
  };

  return (
    <>
      <Burger openNav={openNav} toggleNav={toggleNav} />
      <header className={`header-container ${openNav ? "open" : "closed"}`}>
        <Navbar
          toggleNav={toggleNav}
          scrollOffset={scrollOffset}
          navbarRef={navbarRef}
          toggleLanguage={toggleLanguage}
        />
      </header>
    </>
  );
}
