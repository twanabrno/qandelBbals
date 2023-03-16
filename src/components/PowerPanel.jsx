import React, { useRef, useEffect } from "react";

import Navigation from "./Navigation";
import { Footer } from "./Footer";

import { useTranslation } from "react-i18next";
import { Button, Col, Container, Row } from "react-bootstrap";

import emailjs from "emailjs-com";

import power from "../Assets/img/powerPanel.png";
import power_about from "../Assets/videos/sana-about.mp4";
import power_1 from "../Assets/videos/sana1.mp4";
import power_2 from "../Assets/videos/sana2.mp4";
import power_3 from "../Assets/videos/sana3.mp4";
import Brands from "./Brands";
import type1 from "../Assets/img/sanaType1.PNG";
import type2 from "../Assets/img/sanaType2.PNG";
import GoTop from "./GoTop";

const PowerPanel = ({ lang }) => {
  const { t } = useTranslation();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_inyaa89",
        "template_993qouc",
        form.current,
        "user_DfrMcD1i8Klde4wR1m0qR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const menu = ["about", "powerPanel"];
  return (
    <>
      <Navigation navs={menu} />
      {/* Home */}
      <div id="s-head">
        <div className="b-h-overlay">
          <img src={power} className="image-fluid" alt="" />
          <h3 className="mt-2">{t("p_top_header1")}</h3>
        </div>
      </div>
      {/* Brands */}
      <Brands />
      {/* About */}
      <div id="about" className="s-about" data-aos="fade-up" data-aos-duration="1000">
        <div className="s-about-inner">
          <Container>
            <Row>
              <Col
                md={6}
                className="left d-flex justify-content-center align-items-cenetr"
              >
                <video
                  src={power_about}
                  autoPlay
                  muted
                  controls="controls"
                  loop
                  webkit-playsInline
                  playsInline
                  autofullscreen="false"
                  alt=""
                />
              </Col>
              <Col xs={12} md={6} className="about-us">
                <div className="about-text">
                  <h2 className={` ${lang.dir === "ltr" ? "h2Font" : "h2rtl"}`}>
                    {t("about_us")}
                  </h2>
                  <div className="mb-4">
                    <hr className="hr" />
                  </div>
                  <div className="about-text">
                    <p>{t("p_about_p")}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* bg-image */}
      <div id="powerPanel" className="s-bg-compo" data-aos="fade-in" data-aos-duration="1000"></div>
      <div className="article-text-box" data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <div className="article">
            {/* Whats sandwich panel */}
            <div className="whatssandwich mb-5" data-aos="fade-in" data-aos-duration="1500">
              <Container>
                <h4
                  className={`mb-1  ${lang.dir === "ltr" ? "h2Font" : "h3rtl"}`}
                >
                  {t("p_whatspanel")}
                </h4>
                <div className="mb-3">
                  <hr className="s-hr" />
                </div>
                <div className="app-text">
                  <p className="w-75">{t("p_whatspanel_p")}</p>
                </div>
              </Container>
            </div>
            {/* Services */}
            <div className="s-available mb-5" data-aos="fade-in" data-aos-duration="1500">
              <Container>
                <h4
                  className={`mb-1 ${lang.dir === "ltr" ? "h2Font" : "h3rtl"}`}
                >
                  {t("p_availables")}
                </h4>
                <div className="mb-3">
                  <hr className="s-hr" />
                </div>
                <Row>
                  <table className="table table-sm text-center w-75">
                    <thead>
                      <tr className="table-primary">
                        <th scope="col">{t("p_specifics")}</th>
                        <th scope="col">{t("p_roof")}</th>
                        <th scope="col">{t("p_wall")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{t("p_spec_width")}</td>
                        <td>{t("p_f_1")}</td>
                        <td>{t("p_f_1")}</td>
                      </tr>
                      <tr>
                        <td>{t("p_spec_length")}</td>
                        <td>{t("p_f_2")}</td>
                        <td>{t("p_f_2")}</td>
                      </tr>
                      <tr>
                        <td>{t("p_spec_thikness")}</td>
                        <td>{t("p_f_3")}</td>
                        <td>{t("p_f_3")}</td>
                      </tr>
                      <tr>
                        <td>{t("p_spec_density")}</td>
                        <td>
                          {t("p_f_4")}
                          <sup>3</sup> {t("p_f_4a")}
                        </td>
                        <td>
                          {t("p_f_4")}
                          <sup>3</sup> {t("p_f_4a")}
                        </td>
                      </tr>
                      <tr>
                        <td>{t("p_spec_thermal")}</td>
                        <td>{t("p_f_5")}</td>
                        <td>{t("p_f_5")}</td>
                      </tr>
                      <tr>
                        <td>{t("p_spec_sound")}</td>
                        <td>{t("p_f_6")}</td>
                        <td>{t("p_f_6")}</td>
                      </tr>
                    </tbody>
                  </table>
                </Row>
              </Container>
            </div>
            {/* Application */}
            <div className="application mb-5" data-aos="fade-in" data-aos-duration="1500">
              <Container>
                <h4
                  className={`mb-1  ${lang.dir === "ltr" ? "h2Font" : "h3rtl"}`}
                >
                  {t("p_application")}
                </h4>
                <div className="mb-3">
                  <hr className="s-hr" />
                </div>
                <div className="app-text">
                  <p className="w-75">{t("p_application_p")}</p>
                </div>
              </Container>
            </div>
            {/* Product Types */}
            <div className="s-types mb-5" data-aos="fade-in" data-aos-duration="1500">
              <Container>
                <Row>
                  <h4
                    className={`mb-1 ${
                      lang.dir === "ltr" ? "h2Font" : "h3rtl"
                    }`}
                  >
                    {t("p_type")}
                  </h4>
                  <div className="mb-3 ">
                    <hr className="s-hr" />
                  </div>
                  <Col sm={12} className="px-md-5">
                    <ul className="p-0 m-0 mb-4 list-types ">
                      <li>{t("p_type1")}</li>
                      <li>{t("p_type2")}</li>
                      <li>{t("p_type3")}</li>
                    </ul>
                  </Col>
                  <Col md={6} className="text-center">
                    <img src={type1} className="image-fluid" alt="" />
                  </Col>
                  <Col md={6} className="text-center mt-3 mt-md-0">
                    <img src={type2} className="image-fluid" alt="" />
                  </Col>
                </Row>
              </Container>
            </div>
            {/* Specifications */}
            <div className="specifications mb-5" data-aos="fade-in" data-aos-duration="1500">
              <div className="overlay">
                <Container>
                  <Row>
                    <h4
                      className={`mb-1 ${
                        lang.dir === "ltr" ? "h2Font" : "h3rtl"
                      }`}
                    >
                      {t("p_specification")}
                    </h4>
                    <div className="mb-3 ">
                      <hr className="s-hr" />
                    </div>
                    <Col sm={12} md={7} className="px-md-4 px-lg-5">
                      <ul className="p-0 m-0 ">
                        <li>{t("p_specific_1")}</li>
                        <li>{t("p_specific_2")}</li>
                        <li>{t("p_specific_3")}</li>
                        <li>{t("p_specific_4")}</li>
                        <li>{t("p_specific_5")}</li>
                        <li>{t("p_specific_6")}</li>
                        <li>{t("p_specific_7")}</li>
                        <li>{t("p_specific_8")}</li>
                        <li>{t("p_specific_9")}</li>
                        <li>{t("p_specific_10")}</li>
                        <li>{t("p_specific_11")}</li>
                        <li>{t("p_specific_12")}</li>
                        <li>{t("p_specific_13")}</li>
                        <li>{t("p_specific_14")}</li>
                        <li>{t("p_specific_15")}</li>
                        <li>{t("p_specific_16")}</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Videos*/}
      <div className="s-videos">
        <Container>
          <Row>
            <Col xs={6} sm={3}>
              <video
                src={power_about}
                autoPlay
                muted
                controls="controls"
                loop
                playsInline
                webkit-playsInline
                autofullscreen="false"
                alt=""
                width="100%"
                height="250px"
              />
            </Col>
            <Col xs={6} sm={3}>
              <video
                src={power_1}
                autoPlay
                muted
                controls="controls"
                loop
                playsInline
                webkit-playsInline
                autofullscreen="false"
                alt=""
                width="100%"
                height="250px"
              />
            </Col>
            <Col xs={6} sm={3}>
              <video
                src={power_2}
                autoPlay
                muted
                controls="controls"
                loop
                webkit-playsInline
                playsInline
                autofullscreen="false"
                alt=""
                width="100%"
                height="250px"
              />
            </Col>
            <Col xs={6} sm={3}>
              <video
                src={power_3}
                autoPlay
                muted
                controls="controls"
                loop
                webkit-playsInline
                playsInline
                autofullscreen="false"
                alt=""
                width="100%"
                height="250px"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact */}
      <div id="contact">
        <div className="overlay">
          <Container>
            <Row>
              <Col lg={{ span: 6, order: 2 }} className=" contactFormCol">
                <div className="contact-us">
                  <h4
                    className={`mb-4 text-center ${
                      lang.dir === "ltr" ? "h2Font" : "h3rtl"
                    }`}
                  >
                    {t("contact_form")}
                  </h4>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                      <label htmlFor="name">{t("name")} :</label>
                      <input
                        type="text"
                        className="form-control form-control-sm my-1"
                        id="name"
                        placeholder={t("name")}
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="email">{t("email")} :</label>
                      <input
                        type="email"
                        className="form-control form-control-sm my-1"
                        id="email"
                        placeholder={t("email")}
                        aria-describedby="emailHelp"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">{t("message")} :</label>
                      <textarea
                        className="form-control form-control-sm my-1"
                        id="message"
                        placeholder={t("message")}
                        rows="3"
                        name="message"
                        required
                      ></textarea>
                    </div>
                    <div className="d-flex flex-row">
                      <Button
                        variant="primary"
                        className="mt-3 px-3 btn-sm"
                        type="submit"
                      >
                        {t("send_message")}
                      </Button>
                    </div>
                  </form>
                </div>
              </Col>
              <Col lg={{ span: 6, order: 1 }} className="left-col px-4 py-4">
                <img src={power} className="image fluid s-about-logo " alt="" />
                <h3
                  className={`s-about-title d-inline mx-4 ${
                    lang.dir === "ltr" ? "h2Font" : "h2rtl"
                  }`}
                >
                  {t("powerPanel")}
                </h3>
                <div className="text-center mt-4 mt-lg-5">
                  <p className="fs-7 mb-4 ">{t("p_about_p")}</p>
                  <h6>{t("address")}</h6>
                  <p className="px-5">{t("p_add_value")}</p>
                  <h6>{t("phone")}</h6>
                  <a href="tel:+9647704677070" className="contactLinks">
                    +964-770-467-7070
                  </a>
                  <br />
                  <h6>{t("email")}</h6>
                  <a
                    href="mailto:sanapanel@qandelblbas.com"
                    className="contactLinks"
                  >
                    powerpanel@qandelblbas.com
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div>
        <iframe
          title="runaky-location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3182.276347426345!2d42.6704592!3d37.0985388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40091d7d271d80bd%3A0x522f42b9b844dc97!2sSana%20panel%20factory!5e0!3m2!1sen!2str!4v1643116877754!5m2!1sen!2str"
          width="100%"
          height="100% "
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
      <GoTop id="s-head" />
    </>
  );
};

export default PowerPanel;
