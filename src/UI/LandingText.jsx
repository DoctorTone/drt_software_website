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
          <Col xs={6}>
            <h1>Welcome.</h1>
          </Col>
          <Col xs={6}>
            <h3>I'm Tony and</h3>
            <h3>I do all things 3D.</h3>
            <h3>Come and explore.</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingText;
