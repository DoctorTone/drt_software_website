import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
import { TRANSITIONS } from "../state/Config.js";
import useStore from "../state/store.js";

export const NavigationUI = () => {
  const setTargetIsland = useStore((state) => state.setTargetIsland);
  const enterLevel = useStore((state) => state.enterLevel);
  let islandNumber = useStore((state) => state.islandNumber);

  const clickLeft = () => {
    setTargetIsland(--islandNumber);
    enterLevel(false);
  };

  const clickRight = () => {
    setTargetIsland(++islandNumber);
    enterLevel(false);
  };

  return (
    <div id="navigation" className="panel">
      <Container fluid>
        <Row className="text-center">
          <Col xs={6}>
            <CaretLeftFill size={72} color="royalblue" onClick={clickLeft} />
          </Col>
          <Col xs={6}>
            <CaretRightFill size={72} color="royalblue" onClick={clickRight} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
