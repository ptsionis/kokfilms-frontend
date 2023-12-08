import React, { useState, useContext } from "react";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { NavContext } from "../../App";
import translations from "../../translations/translations.json";
import { submitForm } from "../../apiService";

import "./ContactForm.css";

export default function ContactForm({ pageColor }) {
  const language = useContext(NavContext).language;
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = await executeRecaptcha("contact_form");
      if (token) {
        const res = await submitForm(fullName, email, message, token);
        setFullName("");
        setEmail("");
        setMessage("");
        if (res === `OK`) {
          setFormSuccess(true);
        } else {
          console.log("Invalid reCAPTCHA token!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="d-flex flex-column" onSubmit={handleFormSubmit}>
        <div className="d-flex flex-column mb-4">
          <label htmlFor="full-name">
            {translations[language].contactName}
          </label>
          <input
            type="text"
            className="contact-input"
            id="full-name"
            name="full-name"
            minLength={3}
            maxLength={50}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="off"
            placeholder={translations[language].contactNamePlchl}
            style={{
              color: pageColor === "light" ? "#ffffff" : "#141313",
              backgroundColor: pageColor === "light" ? "#141313" : "#ffffff",
            }}
            required
          />
        </div>
        <div className="d-flex flex-column mb-4">
          <label htmlFor="email">{translations[language].contactEmail}</label>
          <input
            type="email"
            className="contact-input"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder={translations[language].contactEmailPlchl}
            style={{
              color: pageColor === "light" ? "#ffffff" : "#141313",
              backgroundColor: pageColor === "light" ? "#141313" : "#ffffff",
            }}
            required
          />
        </div>
        <div className="d-flex flex-column mb-4">
          <label htmlFor="message">
            {translations[language].contactMessage}
          </label>
          <textarea
            className="contact-input"
            name="message"
            value={message}
            rows={7}
            minLength={10}
            maxLength={500}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
            placeholder={translations[language].contactMessagePlchl}
            style={{
              color: pageColor === "light" ? "#ffffff" : "#141313",
              backgroundColor: pageColor === "light" ? "#141313" : "#ffffff",
            }}
            required
          />
        </div>
        <GoogleReCaptcha action="contact_form" />
        <input
          className="align-self-center"
          type="submit"
          style={{
            width: "fit-content",
            padding: "10px",
            color: pageColor === "light" ? "#ffffff" : "#141313",
            backgroundColor: pageColor === "light" ? "#141313" : "#ffffff",
          }}
          value={translations[language].contactSubmit}
        />
      </form>
      <span
        className="form-success d-flex justify-content-center mt-3"
        style={{ visibility: formSuccess === true ? "visible" : "hidden" }}>
        value={translations[language].contactSuccess}
      </span>
    </>
  );
}
