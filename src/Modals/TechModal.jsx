import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stars, ThreeDots, Keyboard } from "react-bootstrap-icons";

import useStore from "../state/store.js";

const TechModal = ({ showModal }) => {
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setVisibleModal(MODALS.NONE);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal
      show={show}
      fullscreen
      contentClassName="mainModal"
      onHide={handleClose}
    >
      <Modal.Header
        closeButton
        className="border-0 pb-0 text-center mt-5"
        closeVariant="white"
      >
        <h2 className="mx-auto w-100 ps-3">Technology</h2>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row className="mb-3">
            <Keyboard color="orange" size="36" />
          </Row>
          <Row className="text-center">
            <p>
              Here is a rundown of the tech stack that I use most of the time:
            </p>
          </Row>
          <Row>
            <Col xs={12}>
              Languages and frameworks: 🔸Javascript 🔸Typescript 🔸React
              🔸three.js 🔸React three fiber 🔸Babylon.js 🔸Zustand (for state
              management)
            </Col>
            <Col xs={12}>
              Graphics related tech: 🔸WebGL 🔸GLSL (shaders) 🔸WebGPU 🔸Blender
              (for 3D modelling)
            </Col>
            <Col xs={12}>Desktop-related graphics: 🔸Unity 🔸C#</Col>
            <Col xs={12}>
              General:🔸HTML 🔸CSS frameworks - Material UI, bootstrap{" "}
            </Col>
            <Col xs={12}>
              Back-end: 🔸Node.js and express 🔸Familiarity with MySQL and
              MongoDB
            </Col>
            <Col xs={12}> Other: 🔸Git (for version control)</Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer className="border-0">
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TechModal;
