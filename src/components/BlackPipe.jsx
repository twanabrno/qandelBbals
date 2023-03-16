import React from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

import black from "../Assets/img/blackPipe.png";
import Navigation from "./Navigation";

const BlackPipe = () => {
  const menu = ["about", "blackPipe"];
  return (
    <>
      <Navigation navs={menu} />
      <Container className="py-5 text-center">
        <img src={black} className="w-50 mt-5" alt="" />
      </Container>
    </>
  );
};

export default BlackPipe;
