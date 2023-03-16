import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../Assets/img/qb.png";
import sana from "../Assets/img/sanaPanel.png";
import black from "../Assets/img/blackPipe.png";
import powerPanel from "../Assets/img/powerPanel.png";

const Brands = () => {
  return (
    <>
      {/* Brands */}
      <Container>
        <Container fluid id="brands">
          <Row>
            <Col className="text-center">
              <Link to="/">
                <img src={logo} className="img-fluid" alt="" />
              </Link>
            </Col>
            <Col className="text-center">
              <Link to="/powerpanel">
                <img src={powerPanel} className="img-fluid " alt="" />
              </Link>
            </Col>
            <Col className="text-center">
              <Link to="/sanapanel">
                <img src={sana} className="img-fluid " alt="" />
              </Link>
            </Col>
            <Col className="text-center">
              <Link to="/blackpipe">
                <img src={black} className="img-fluid" alt="" />
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Brands;
