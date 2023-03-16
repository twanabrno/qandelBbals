import React, { useEffect, useState, useRef } from "react";
import Navigation from "./Navigation";
import { Footer } from "./Footer";
import Brands from "./Brands";

import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { MdRoofing, MdOutlineContentCut } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { products } from "./products";
import GoTop from "./GoTop";

const Home = ({ lang: currentLanguage }) => {
  const [prods, setprods] = useState([]);
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

  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("app_title");
    if (currentLanguage.code === "kur") {
      setprods(products.kur);
    } else if (currentLanguage.code === "ar") {
      setprods(products.ar);
    } else {
      setprods(products.en);
    }
  }, [currentLanguage]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,
  };
  const menu = ["about", "services", "products"];
  return (
    <>
      <Navigation navs={menu} />
      {/* HOME */}
      <div id="topp" className="homeCarousel">
        <Slider {...settings}>
          <div className={`homeBackground1 `} id="home">
            <div className="backgroundoverlay">
              <Container className="px-md-5 h-100 align-middle homeText">
                <div className="intro-text">
                  <h1 className="mb-4 navMenuFont">Qandel Blbas Co.</h1>
                  <h5 className="h2Font">{t("home1")}</h5>
                </div>
              </Container>
            </div>
          </div>
          <div className="homeBackground2" id="home">
            <div className="backgroundoverlay">
              <Container className="px-md-5 h-100 align-middle homeText">
                <div className="intro-text">
                  <h1 className="mb-4 navMenuFont">Qandel Blbas Co.</h1>
                  <h5 className="h2Font">{t("home2")}</h5>
                </div>
              </Container>
            </div>
          </div>
          <div className="homeBackground3" id="home">
            <div className="backgroundoverlay">
              <Container className="px-md-5 h-100 align-middle homeText">
                <div className="intro-text">
                  <h1 className="mb-4 navMenuFont">Qandel Blbas Co.</h1>
                  <h5 className="h2Font">{t("home3")}</h5>
                </div>
              </Container>
            </div>
          </div>
        </Slider>
      </div>
      {/* BRANDS */}
      <Brands />
      {/* ABOUT */}
      <div id="about" className="h-about" data-aos="fade-up" data-aos-duration="1000">
        <Container fluid className="about">
          <Container>
            <Row>
              <Col xs={12} md={6} className="about-img"></Col>
              <Col xs={12} md={6} className="about-us">
                <div className="about-text">
                  <h2
                    className={` ${
                      currentLanguage.dir === "ltr" ? "h2Font" : "h2rtl"
                    }`}
                  >
                    {t("about_us")}
                  </h2>
                  <div className="mb-4">
                    <hr className="hr" />
                  </div>
                  <div className="about-text">
                    <p>{t("about_p")}</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row data-aos="fade-up" data-aos-duration="1000">
              <Col xs={12} md={6} className="why-us">
                <div>
                  <h2
                    className={` ${
                      currentLanguage.dir === "ltr" ? "h2Font" : "h2rtl"
                    }`}
                  >
                    {t("why_chose_us")}
                  </h2>
                  <div className="mb-4">
                    <hr className="hr" />
                  </div>
                  <div>
                    <Row className="about-text">
                      <Col>
                        <ul className="whychoseuslist list-unstyled">
                          <li>
                            <BsCheckLg className="checkicon" /> {t("reason1")}
                          </li>
                          <li>
                            <BsCheckLg className="checkicon" /> {t("reason1")}
                          </li>
                          <li>
                            <BsCheckLg className="checkicon" /> {t("reason1")}
                          </li>
                          <li>
                            <BsCheckLg className="checkicon" /> {t("reason1")}
                          </li>
                          <li>
                            <BsCheckLg className="checkicon" /> {t("reason1")}
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <ul className="whychoseuslist list-unstyled">
                          <li>
                            <BsCheckLg className="checkicon" /> {t("reason1")}
                          </li>
                          <li>
                            <BsCheckLg className="checkicon" /> {t("reason1")}
                          </li>
                          <li>
                            <BsCheckLg className="checkicon" /> {t("reason1")}
                          </li>
                          <li>
                            <BsCheckLg className="checkicon" /> {t("reason1")}
                          </li>
                          <li>
                            <BsCheckLg className="checkicon" /> {t("reason1")}
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} className="why-us-img"></Col>
            </Row>
          </Container>
        </Container>
      </div>
      {/* SERVICES */}
      <div id="services" className="h-service">
        <div className="overlay">
          <Container>
            <h2
              className={`text-center ${
                currentLanguage.dir === "ltr" ? "h2Font" : "h2rtl"
              }`}
              data-aos="fade-up" data-aos-duration="1000"
            >
              {t("services")}
            </h2>
            <div className="mb-5 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1000">
              <hr className="hr" />
            </div>
            <Row>
              <Col lg={4} className="text-center my-lg-0 mb-4 px-3" data-aos="zoom-in" data-aos-duration="1000">
                <div>
                  <MdOutlineContentCut className="serviceIcon" />
                </div>
                <h4
                  className={`my-lg-4 ${
                    currentLanguage.dir === "ltr" ? "h2Font" : "h3rtl"
                  }`}
                >
                  {t("service1")}
                </h4>
                <p>{t("service1_p")}</p>
                <ul className="ul list-unstyled p-0 m-0">
                  <li>{t("service1_li1")}</li>
                  <li>{t("service1_li2")}</li>
                  <li>{t("service1_li3")}</li>
                </ul>
              </Col>
              <Col lg={4} className="text-center my-lg-0 mb-4 px-3" data-aos="zoom-in" data-aos-duration="1000">
                <div>
                  <MdRoofing className="serviceIcon" />
                </div>
                <h4
                  className={`my-lg-4 mt-3 ${
                    currentLanguage.dir === "ltr" ? "h2Font" : "h3rtl"
                  }`}
                >
                  {t("service2")}
                </h4>
                <p>{t("service2_p")}</p>
                <ul className="ul list-unstyled p-0 m-0">
                  <li>{t("service2_li1")}</li>
                  <li>{t("service2_li2")}</li>
                  <li>{t("service2_li3")}</li>
                  <li>{t("service2_li4")}</li>
                </ul>
              </Col>
              <Col lg={4} className="text-center my-lg-0 mb-4 px-3" data-aos="zoom-in" data-aos-duration="1000">
                <div>
                  <MdOutlineContentCut className="serviceIcon" />
                </div>
                <h4
                  className={`my-lg-4 mt-3 ${
                    currentLanguage.dir === "ltr" ? "h2Font" : "h3rtl"
                  }`}
                >
                  {t("service1")}
                </h4>
                <p>{t("service1_p")}</p>
                <ul className="ul list-unstyled p-0 m-0">
                  <li>{t("service1_li1")}</li>
                  <li>{t("service1_li2")}</li>
                  <li>{t("service1_li3")}</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* PRODUCTS */}
      <div id="products" className="h-products">
        <div className="prod-overflow">
          <Container className="text-center">
            <h2
              className={`${
                currentLanguage.dir === "ltr" ? "h2Font" : "h2rtl"
              }`}
              data-aos="fade-up" data-aos-duration="1000"
            >
              {t("products")}
            </h2>
            <div className="mb-5 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1000">
              <hr className="hr" />
            </div>
            <Row className="px-1 px-md-0">
              {prods.map((p) => {
                return (
                  <Col
                    xs={4}
                    md={3}
                    lg={3}
                    className="mb-4 px-lg-4 px-1 d-flex justify-content-center"
                    key={p.id}
                    data-aos="fade-up" data-aos-duration="1000"
                  >
                    <Card
                      style={{ width: "15rem" }}
                      className="prod-card"
                      id={p.id}
                    >
                      <Card.Img
                        variant="top"
                        src={p.img}
                        className="prod1 img-fluid"
                        alt=""
                      />
                      <Card.Body>
                        <Card.Title
                          className={`card-title ${
                            currentLanguage.dir === "ltr"
                              ? "h2Font"
                              : "prof-title-rtl"
                          }`}
                        >
                          {p.name}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
      {/* CONTACT */}
      <div id="contact">
        <div className="overlay">
          <Container>
            <Row>
              <Col lg={{ span: 6, order: 2 }} className=" contactFormCol">
                <div className="contact-us">
                  <h4
                    className={`mb-4 text-center ${
                      currentLanguage.dir === "ltr" ? "h2Font" : "h3rtl"
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
              <Col lg={{ span: 6, order: 1 }} className="text-center px-4 py-4">
                <h3
                  className={`mb-4 ${
                    currentLanguage.dir === "ltr" ? "h2Font" : "h2rtl"
                  }`}
                >
                  {t("app_title")}
                </h3>
                <p className="fs-7 mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                  delectus ex vero, ducimus impedit aliquid quas quod eum omnis
                  exercitationem officia enim quia ullam nostrum dolore sint?
                  Neque, perferendis. Aliquid.
                </p>
                <h6>{t("address")}</h6>
                <p className="px-5">{t("address_value")}</p>
                <h6>{t("phone")}</h6>
                <a href="tel:+9647734456622" className="contactLinks">
                  +964-773-445-6622
                </a>{" "}
                <br />
                <a href="tel:+9647509521000" className="contactLinks">
                  +964-750-952-1000
                </a>
                <h6>{t("email")}</h6>
                <a href="mailto:info@qandelblbas.com" className="contactLinks">
                  info@qandelblbas.com
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div>
        <iframe
          title="runaky-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.8406758979345!2d44.021118415272284!3d36.17043148008313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400723178547ccf3%3A0x562341a87b27b3bc!2zUWFuZGVsIEJsYmFzIENvINi02LHZg9ipINmC2YbYr9mK2YQg2KjZhNio2KfYsw!5e0!3m2!1sen!2siq!4v1639757583802!5m2!1sen!2siq"
          width="100%"
          height="100% "
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
      <GoTop id="topp" />
    </>
  );
};

export default Home;
