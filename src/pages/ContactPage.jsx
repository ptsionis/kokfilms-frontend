import { React, useContext } from "react";

import SocialButton from "../components/SocialButton/SocialButton";
import ContactForm from "../components/ContactForm/ContactForm";
import { NavContext } from "../components/../App";
import social from "../components/../data/social.json";

import translations from "../translations/translations.json";

export default function ContactPage() {
  const language = useContext(NavContext).language;
  let categoryTitle = translations[language].contactTitle;
  const socialList = social.map((item) => {
    return (
      <li key={item.title}>
        <SocialButton href={item.url} title={item.title} color="light" />
      </li>
    );
  });

  return (
    <section className="page" name="contact">
      <h2 className="page-title">{categoryTitle}</h2>
      <div className="container">
        <div className="d-flex flex-column align-items-center text-center mb-5">
          <span className="mb-2">{translations[language].contact1}</span>
          <span>
            {translations[language].contact2}
            <a href="mailto:info@kokfilms.gr">info@kokfilms.gr</a>
            {translations[language].contact3}
          </span>
          <ul
            className="d-flex justify-content-center mt-4 list-unstyled"
            aria-label="Social media section">
            {socialList}
          </ul>
        </div>
        <ContactForm pageColor="light" />
      </div>
      <div className="d-flex flex-column align-items-center my-5">
        <h4 className="mb-4 text-center">{translations[language].contact4}</h4>
        <img
          className="logo-image"
          src={"/logos/icon-dark.webp"}
          alt="KoKFilms"
        />
      </div>
    </section>
  );
}
