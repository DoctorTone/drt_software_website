import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
import useStore from "../state/store.js";
import { TRANSITIONS } from "../state/Config.js";

export const NavigationUI = () => {
  const setTargetIsland = useStore((state) => state.setTargetIsland);
  const enterLevel = useStore((state) => state.enterLevel);
  let islandNumber = useStore((state) => state.islandNumber);
  const setCurrentDirection = useStore((state) => state.setCurrentDirection);

  const clickLeft = () => {
    setTargetIsland(--islandNumber);
    enterLevel(false);
    setCurrentDirection(TRANSITIONS.LEFT);
  };

  const clickRight = () => {
    setTargetIsland(++islandNumber);
    enterLevel(false);
    setCurrentDirection(TRANSITIONS.RIGHT);
  };

  return (
    <div id="navigation" className="panel">
      <Container fluid>
        <Row className="text-md-center">
          <Col xs={6}>
            <CaretLeftFill
              className="navArrows"
              size={72}
              color="royalblue"
              onClick={clickLeft}
            />
          </Col>
          <Col xs={6} className="text-end text-sm-center">
            <CaretRightFill
              className="navArrows"
              size={72}
              color="royalblue"
              onClick={clickRight}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
