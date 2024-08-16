import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stars, ThreeDots, Keyboard } from "react-bootstrap-icons";

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
        <Row>
          <Col xs={12} md={{ span: 10, offset: 2 }} className="mb-2">
            <span className="orangeText">Languages and frameworks:</span>{" "}
            🔸Javascript 🔸Typescript 🔸React 🔸three.js 🔸React three fiber
            🔸Babylon.js 🔸Zustand (for state management)
          </Col>
          <Col xs={12} md={{ span: 10, offset: 2 }} className="mb-2">
            <span className="orangeText">Graphics related tech:</span> 🔸WebGL
            🔸GLSL (shaders) 🔸WebGPU 🔸Blender (for 3D modelling)
          </Col>
          <Col xs={12} md={{ span: 10, offset: 2 }} className="mb-2">
            <span className="orangeText">Desktop-related graphics:</span>{" "}
            🔸Unity 🔸C#
          </Col>
          <Col xs={12} md={{ span: 10, offset: 2 }} className="mb-2">
            <span className="orangeText">General:</span>🔸HTML 🔸CSS frameworks
            - Material UI, bootstrap{" "}
          </Col>
          <Col xs={12} md={{ span: 10, offset: 2 }} className="mb-2">
            <span className="orangeText">Back-end:</span> 🔸Node.js and express
            🔸Familiarity with MySQL and MongoDB
          </Col>
          <Col xs={12} md={{ span: 10, offset: 2 }} className="mb-2">
            {" "}
            <span className="orangeText">Other:</span> 🔸Git (for version
            control)
          </Col>
        </Row>
        <Row className="text-center pb-3">
          <ThreeDots color="orange" size={30} />
        </Row>
      </Container>
    </div>
  );
};

export default Tech;
