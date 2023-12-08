import React, { useContext } from "react";

import Name from "../Name/Name";
import SocialButton from "../SocialButton/SocialButton";
import { NavContext } from "../../App";
import social from "../../data/social.json";

export default function WelcomePage() {
  const language = useContext(NavContext).language;
  const socialList = social.map((item) => {
    return (
      <li key={item.title}>
        <SocialButton href={item.url} title={item.title} color={"light"} />
      </li>
    );
  });

  return (
    <section className="page" name="home">
      <div className="container d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
        <Name />
        {/* <p>{language === "el" ? text.welcomeText.el : text.welcomeText.en}</p> */}
        {/* <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
            <ul
              className="d-flex justify-content-center mt-4 list-unstyled"
              aria-label="Social media section">
              {socialList}
            </ul>
            <a
              className="d-flex flex-row align-items-center me-0 me-lg-5"
              aria-label="E-mail section"
              href="mailto:info@kokfilms.gr">
              <img src="/other/mail.svg" alt="E-mail" title="E-mail" />
              <p className="ms-1 my-0">info@kokfilms.gr</p>
            </a>
          </div> */}
      </div>
      <ul
        className="d-flex justify-content-center mt-5 list-unstyled"
        aria-label="Social media section">
        {socialList}
      </ul>
      <a
        className="d-flex flex-row align-items-center"
        aria-label="E-mail section"
        href="mailto:info@kokfilms.gr">
        <img src="/other/mail.svg" alt="E-mail" title="E-mail" />
        <p className="ms-1 my-0">info@kokfilms.gr</p>
      </a>
    </section>
  );
}
