import React from "react";

import ScrollToTop from "./ScrollToTop/ScrollToTop";
import WelcomePage from "./pages/WelcomePage";
import MusicPage from "./pages/MusicPage";
import CorporatePage from "./pages/CorporatePage";
import ChristeningsPage from "./pages/ChristeningsPage";
import TravelPage from "./pages/TravelPage";
import PhotographyPage from "./pages/PhotographyPage";
import ContactPage from "./pages/ContactPage";

export default function Main() {
  return (
    <main>
      <ScrollToTop />
      <WelcomePage />
      <MusicPage />
      <CorporatePage />
      <ChristeningsPage />
      <TravelPage />
      <PhotographyPage />
      <ContactPage />
    </main>
  );
}
