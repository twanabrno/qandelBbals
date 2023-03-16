import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, Container, Row } from "react-bootstrap";

const Default = () => {
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(function () {
      window.location.replace("/");
    }, 2000);
  }, []);

  return (
    <Container>
      <Row style={{ height: "500px" }}>
        <Card
          className="text-center card align-self-center p-5"
          style={{
            border: "3px solid black",
            color: "black",
          }}
        >
          <Card.Body className="">
            <h1>{t("page_not_found")}</h1>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Default;
