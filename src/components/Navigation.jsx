import React, { useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { FaGlobe } from "react-icons/fa";

import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import kur from "../Assets/img/ku.svg";
import ar from "../Assets/img/ar.svg";
import en from "../Assets/img/en.svg";
import logo from "../Assets/img/qblogo.png";

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

const Navigation = ({ navs }) => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "rtl";
    i18next.changeLanguage(currentLanguageCode);
    document.title = t("app_title");
  }, [currentLanguage]);

  const btnLangs = (
    <>
      <Dropdown
        align={currentLanguage.dir ? "start" : "end"}
        className={`${currentLanguage.dir === "ltr" ? " navMenuFont" : " "}`}
      >
        <Dropdown.Toggle
          className="lang-btn btn-outline-light"
          id="dropdown-basic"
        >
          <FaGlobe />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-lng">
          <Dropdown.Item
            className="d-flex justify-content-between"
            disabled={"kur" === currentLanguageCode}
            onClick={() => {
              i18next.changeLanguage("kur");
            }}
          >
            <img
              src={kur}
              className="img-fluid lang-icon"
              alt=""
              style={{ opacity: "kur" === currentLanguageCode ? 0.5 : 1 }}
            />
            <div
              className={`${
                currentLanguage.dir === "ltr" ? "" : "lng-btn-div"
              }`}
              style={{ opacity: "kur" === currentLanguageCode ? 0.5 : 1 }}
            >
              کوردی
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            className="d-flex justify-content-between"
            disabled={"en" === currentLanguageCode}
            onClick={() => {
              i18next.changeLanguage("en");
            }}
          >
            <img
              src={en}
              className="img-fluid lang-icon"
              alt=""
              style={{ opacity: "en" === currentLanguageCode ? 0.5 : 1 }}
            />
            <div
              className={`${
                currentLanguage.dir === "ltr" ? "" : "lng-btn-div"
              }`}
              style={{ opacity: "en" === currentLanguageCode ? 0.5 : 1 }}
            >
              English
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            className="d-flex justify-content-between"
            disabled={"ar" === currentLanguageCode}
            onClick={() => {
              i18next.changeLanguage("ar");
            }}
          >
            <img
              src={ar}
              className="img-fluid lang-icon"
              alt=""
              style={{ opacity: "ar" === currentLanguageCode ? 0.5 : 1 }}
            />
            <div
              className={`${
                currentLanguage.dir === "ltr" ? "" : "lng-btn-div"
              }`}
              style={{ opacity: "ar" === currentLanguageCode ? 0.5 : 1 }}
            >
              عربي
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={scrollToTop}
          as={Link}
          to="/"
          className="p-0 m-0"
        >
          <img src={logo} className="img-fluid brand-logo" alt="" />
          <span
            className={`brandName ${
              currentLanguage.dir === "ltr" ? " brandFont" : ""
            }`}
          >
            {t("app_title")}
          </span>
        </Navbar.Brand>
        <div className={`d-flex justify-content-end dropdown-sm d-lg-none `}>
          {btnLangs}
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav
            className={`${
              currentLanguage.dir === "ltr" ? " navMenuFont" : " navMenuFonSize"
            }`}
          >
            <Nav.Link
              className={`navLink ${
                currentLanguage.dir === "rtl" ? " navMenuFonSize" : " "
              }`}
              onClick={scrollToTop}
              as={Link}
              to="/"
            >
              {t("home")}
            </Nav.Link>
            {navs.map((n) => {
              return (
                <Nav.Link
                  key={n}
                  className={`navLink ${
                    currentLanguage.dir === "rtl" ? " navMenuFonSize" : " "
                  }`}
                  href={"#" + n}
                >
                  {t(n)}
                </Nav.Link>
              );
            })}

            <NavDropdown
              className={`${
                currentLanguage.dir === "rtl" ? " navMenuFonSize" : " "
              }`}
              title={t("partners")}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className={`navLink ${
                  currentLanguage.dir === "rtl" ? " navMenuFonSize" : " "
                }`}
              >
                <Nav.Link
                  className={`navLink ${
                    currentLanguage.dir === "rtl" ? " navMenuFonSize" : " "
                  }`}
                  as={Link}
                  to="/sanapanel"
                >
                  {t("sanaPanel")}
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className={`navLink ${
                  currentLanguage.dir === "rtl" ? " navMenuFonSize" : " "
                }`}
              >
                <Nav.Link
                  className={`navLink ${
                    currentLanguage.dir === "rtl" ? " navMenuFonSize" : " "
                  }`}
                  as={Link}
                  to="/powerpanel"
                >
                  {t("powerPanel")}
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className={`navLink ${
                  currentLanguage.dir === "rtl" ? " navMenuFonSize" : " "
                }`}
              >
                <Nav.Link
                  className={`navLink ${
                    currentLanguage.dir === "rtl" ? " navMenuFonSize" : " "
                  }`}
                  as={Link}
                  to="/blackpipe"
                >
                  {t("blackPipe")}
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className={`navLink ${
                currentLanguage.dir === "rtl" ? " navMenuFonSize" : " "
              }`}
              href="#contact"
            >
              {t("contact")}
            </Nav.Link>
            <div className=" d-flex justify-content-end d-none d-lg-block mx-3 ">
              {btnLangs}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
