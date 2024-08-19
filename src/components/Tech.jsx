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
      <a id="tech"></a>
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
      <Container className="mb-2 techWidth">
        <p>A collection of the technology that I'm currently using:</p>
        <Row>
          <Col xs={4} md={2} className="mb-2">
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/javascript.png"
              />
              <Card.Title>JS</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/type.png"
              />
              <Card.Title>TS</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/react.png"
              />
              <Card.Title>React</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/three.png"
              />
              <Card.Title>Three.js</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/react.png"
              />
              <Card.Title>Fiber</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/Babylon.png"
              />
              <Card.Title>Babylon</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mb-2 techWidth">
        <Row>
          <Col xs={4} md={2} className="mb-2">
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/zustand.jpg"
              />
              <Card.Title>Zustand</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/next.jpg"
              />
              <Card.Title>Next.js</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/gsap.jpg"
              />
              <Card.Title>GSAP</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/WebGL.png"
              />
              <Card.Title>WebGL</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/WebGL.png"
              />
              <Card.Title>GLSL</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/gpu.png"
              />
              <Card.Title>WebGPU</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mb-2 techWidth">
        <Row>
          <Col xs={4} md={2} className="mb-2">
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/blender.jpg"
              />
              <Card.Title>Blender</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/unity.png"
              />
              <Card.Title>Unity</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/unreal.png"
              />
              <Card.Title>Unreal</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/html.png"
              />
              <Card.Title>HTML</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/css.png"
              />
              <Card.Title>CSS</Card.Title>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className="text-center cardWidth">
              <Card.Img
                className="p-2 p-xl-2"
                variant="top"
                src="./images/node.png"
              />
              <Card.Title>Node</Card.Title>
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
