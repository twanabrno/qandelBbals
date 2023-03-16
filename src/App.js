import React from "react";
import { Route, Routes } from "react-router";
import cookies from "js-cookie";

import Default from "./components/Default";
import Home from "./components/Home";
import SanaPanel from "./components/SanaPanel";
import PowerPanel from "./components/PowerPanel";
import BlackPipe from "./components/BlackPipe";
import AOS from "aos";
import "aos/dist/aos.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Assets/style.css";
import "./App.css";

const languages = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
  },
  {
    code: "kur",
    name: "کوردی",
    dir: "rtl",
  },
];

function App() {
  AOS.init();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home lang={currentLanguage} />} />
        <Route
          path="/sanapanel"
          element={<SanaPanel lang={currentLanguage} />}
        />
        <Route
          path="/powerpanel"
          element={<PowerPanel lang={currentLanguage} />}
        />
        <Route
          path="/blackpipe"
          element={<BlackPipe lang={currentLanguage} />}
        />
        <Route path="*" element={<Default lang={currentLanguage} />} />
      </Routes>
    </>
  );
}

export default App;
