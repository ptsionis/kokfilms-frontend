import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  lazy,
  Suspense,
} from "react";

import Loader from "./components/Loader/Loader";

export const NavContext = createContext();

const Header = lazy(() => import("./components/Header"));
const Main = lazy(() => import("./components/Main"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const navbarRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [language, setLanguage] = useState("el");

  const toggleLanguage = (code) => {
    setLanguage(code);
  };

  useEffect(() => {
    const handleResize = () => {
      if (navbarRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        setScrollOffset(windowHeight - navbarHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <NavContext.Provider value={{ language }}>
        <Header
          navbarRef={navbarRef}
          scrollOffset={scrollOffset}
          toggleLanguage={toggleLanguage}
        />
        <Main />
        <Footer />
      </NavContext.Provider>
    </Suspense>
  );
}
