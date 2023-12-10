import React, { useContext } from "react";

import Name from "../components/Name/Name";
import SocialButton from "../components/SocialButton/SocialButton";
import { NavContext } from "../App";
import social from "../data/social.json";

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
      </div>
      <ul
        className="d-flex justify-content-center mt-5 list-unstyled"
        aria-label="Social media section">
        {socialList}
      </ul>
      <a
        className="d-flex flex-row align-items-center mt-3"
        aria-label="E-mail section"
        href="mailto:info@kokfilms.gr">
        <img src="/other/mail.svg" alt="E-mail" title="E-mail" />
        <p className="ms-1 my-0">info@kokfilms.gr</p>
      </a>
      <a
        className="d-flex flex-row align-items-center mt-1"
        aria-label="E-mail section"
        href="tel:+306983357725">
        <img src="/other/phone.svg" alt="Phone" title="Phone" />
        <p className="ms-1 my-0">+30 698 335 7725</p>
      </a>
    </section>
  );
}
