import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stars, ThreeDots, Keyboard } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";

const Tech = () => {
  return (
    <div className="paleBackground pt-3">
      <Container>
        <Row>
          <Keyboard color="orange" size="42" />
        </Row>
        <Row className="mb-3">
          <h5>Tech</h5>
          <h2>Current Tech</h2>
          <hr></hr>
        </Row>
      </Container>
      <Container className="w-50">
        <Row>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/javascript.png"
              />
              <Card.Title>Javascript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img className="p-4" variant="top" src="./images/type.png" />
              <Card.Title>Typescript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/react.png"
              />
              <Card.Title>React</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/javascript.png"
              />
              <Card.Title>Javascript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img className="p-4" variant="top" src="./images/type.png" />
              <Card.Title>Typescript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/react.png"
              />
              <Card.Title>React</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="w-50">
        <Row>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/javascript.png"
              />
              <Card.Title>Javascript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img className="p-4" variant="top" src="./images/type.png" />
              <Card.Title>Typescript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/react.png"
              />
              <Card.Title>React</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/javascript.png"
              />
              <Card.Title>Javascript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img className="p-4" variant="top" src="./images/type.png" />
              <Card.Title>Typescript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/react.png"
              />
              <Card.Title>React</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="w-50">
        <Row>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/javascript.png"
              />
              <Card.Title>Javascript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img className="p-4" variant="top" src="./images/type.png" />
              <Card.Title>Typescript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/react.png"
              />
              <Card.Title>React</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/javascript.png"
              />
              <Card.Title>Javascript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img className="p-4" variant="top" src="./images/type.png" />
              <Card.Title>Typescript</Card.Title>
            </Card>
          </Col>
          <Col xs={2}>
            <Card style={{ width: "7rem" }} className="text-center">
              <Card.Img
                className="p-4"
                variant="top"
                src="./images/react.png"
              />
              <Card.Title>React</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="text-center pb-3">
          <ThreeDots color="orange" size={30} />
        </Row>
      </Container>
    </div>
  );
};

export default Tech;
