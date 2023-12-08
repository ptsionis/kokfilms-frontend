import React, { useEffect, useState } from "react";

import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 850) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="scroll-to-top"
      title="Back to Top"
      onClick={scrollToTop}
      style={{ display: showButton === true ? "block" : "none" }}>
      <img src="/other/upArrow.svg" alt="Up" />
    </div>
  );
}
