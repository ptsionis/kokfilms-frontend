import React, { useEffect, useRef, useState, createContext } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export const NavContext = createContext();

export default function App() {
  const navbarRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [language, setLanguage] = useState("el");

  const toggleLanguage = (code) => {
    setLanguage(code);
  };

  useEffect(() => {
    const handleResize = () => {
      const navbarHeight = navbarRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      setScrollOffset(windowHeight - navbarHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavContext.Provider value={{ language }}>
      <Header
        navbarRef={navbarRef}
        scrollOffset={scrollOffset}
        toggleLanguage={toggleLanguage}
      />
      <Main />
      <Footer />
    </NavContext.Provider>
  );
}
