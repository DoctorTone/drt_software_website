import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";

export const NavigationUI = () => {
  return (
    <div id="navigation" className="panel">
      <Container fluid>
        <Row className="text-center">
          <Col xs={6}>
            <CaretLeftFill size={72} color="royalblue" />
          </Col>
          <Col xs={6}>
            <CaretRightFill size={72} color="royalblue" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
