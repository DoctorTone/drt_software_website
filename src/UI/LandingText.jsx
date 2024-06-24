import React from "react";
import Button from "react-bootstrap/Button";
import useStore from "../state/store";
import { ArrowRight } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LandingText = () => {
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);
  const enterLevel = useStore((state) => state.enterLevel);

  const nextLevel = () => {
    setCurrentLevel("Main");
    enterLevel(true);
  };

  return (
    <>
      <Container id="landingText" className="panel">
        <Row className="mt-5">
          <div className="mt-5"></div>
          <Col xs={12} md={6} className="lightGreyText">
            <div className="titleFont">Welcome.</div>
          </Col>
          <Col xs={12} md={6} className="lightGreyText mt-5 pt-5">
            <h3 className="mt-5 pt-5">I'm Tony.</h3>
            <h3>I do all things 3D.</h3>
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col className="mt-5">
            <Button variant="warning" onClick={nextLevel}>
              <h5 className="pt-1">
                Come and explore <ArrowRight />{" "}
              </h5>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingText;
