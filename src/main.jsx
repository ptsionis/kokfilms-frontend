import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey="6LfBqrgnAAAAALHhSp1Gf6Eu8M6O94EcYHng5RgA">
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
