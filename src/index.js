import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import en from "./langs/en";
import ar from "./langs/ar";
import kur from "./langs/kur";

import { MemoryRouter } from "react-router-dom";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources: {
      en: en,
      ar: ar,
      kur: kur,
    },
    supportedLngs: ["en", "ar", "kur"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
  });

const loadingMarkup = (
  <div className="py4 text-center">
    <h2> Loading... </h2>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </Suspense>,
  document.getElementById("root")
);
