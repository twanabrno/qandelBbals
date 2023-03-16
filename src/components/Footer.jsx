import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import blackPipe from "../Assets/img/blackPipe.png";
import sanaPanel from "../Assets/img/sanaPanel.png";
import powerPanel from "../Assets/img/powerPanel.png";
import qb from "../Assets/img/qb.png";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div id="footer">
      <Container
        fluid
        className="footer d-flex justify-content-between align-items-center"
      >
        <div>
          <span className="copyright ">{t("copy_right")}</span>
        </div>
        <div>
          <div>
            <ul className="list-unstyled m-0">
              <li className="d-inline mx-1 mx-lg-3">
                <img
                  src={qb}
                  className="img-fluid footerbrand"
                  alt="power panel"
                />
              </li>
              <li className="d-inline mx-1 mx-lg-3">
                <img
                  src={powerPanel}
                  className="img-fluid footerbrand"
                  alt="power panel"
                />
              </li>
              <li className="d-inline mx-1 mx-lg-3">
                <img
                  src={sanaPanel}
                  className="img-fluid footerbrand"
                  alt="sana panel"
                />
              </li>
              <li className="d-inline mx-1 mx-lg-3">
                <img
                  src={blackPipe}
                  className="img-fluid footerbrand"
                  alt="black pipe"
                />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
