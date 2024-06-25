import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArchiveFill, ThreeDots, BrightnessHigh } from "react-bootstrap-icons";
import Image from "react-bootstrap/Image";

import useStore from "../state/store.js";

const ProjectsModal = ({ showModal }) => {
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
        className="border-0 pb-0 text-center mt-1"
        closeButton
        closeVariant="white"
      >
        <h2 className="mx-auto w-100 ps-3">Previous projects</h2>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row className="mb-3">
            <ArchiveFill color="orange" size="30" />
          </Row>
          <Row className="text-center mb-1">
            <p>I've enjoyed building a diverse array of projects including:</p>
          </Row>
          <Row className="mb-3">
            <Col xs={6} md={4} className="mb-3">
              <Image src="./images/configurator.jpg" rounded fluid />
            </Col>
            <Col xs={6} md={4} className="mb-3">
              <Image src="./images/solar.jpg" rounded fluid />
            </Col>
            <Col xs={6} md={4} className="mb-3">
              <Image src="./images/museum.jpg" rounded fluid />
            </Col>
            <Col xs={6} md={4} className="mb-3">
              <Image src="./images/physics.jpg" rounded fluid />
            </Col>
            <Col xs={6} md={4} className="mb-3">
              <Image src="./images/brain.jpg" rounded fluid />
            </Col>
            <Col xs={6} md={4} className="mb-3">
              <Image src="./images/portfolio.jpg" rounded fluid />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={1} className="text-center">
              <BrightnessHigh color="orange" size={20} />
            </Col>
            <Col xs={11}>
              A virtual reality museum application for the art world allowing
              multiple participants to view exhibits as if they were real and in
              immersive VR.
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={1} className="text-center">
              <BrightnessHigh color="orange" size={20} />
            </Col>
            <Col xs={11}>
              3D editors and interface tools for the construction industry.
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={1} className="text-center">
              <BrightnessHigh color="orange" size={20} />
            </Col>
            <Col xs={11}>
              3D data visualisations for things such as climate data, finance,
              sports, music and a whole lot more.
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={1} className="text-center">
              <BrightnessHigh color="orange" size={20} />
            </Col>
            <Col xs={11}>
              A 3D product configurator for the bathroom industry.
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={1} className="text-center">
              <BrightnessHigh color="orange" size={20} />
            </Col>
            <Col xs={11}>
              Medical imaging applications for detecting and measuring tumours.
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={1} className="text-center">
              <BrightnessHigh color="orange" size={20} />
            </Col>
            <Col xs={11}>
              Virtual environments for collaborative gaming, social interaction,
              video communication and more.
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={1} className="text-center">
              <BrightnessHigh color="orange" size={20} />
            </Col>
            <Col xs={11}>
              3D websites to give your company or brand a competitive edge.
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={1} className="text-center">
              <BrightnessHigh color="orange" size={20} />
            </Col>
            <Col xs={11}>
              3D scene editors, graphical tools, games for children with autism,
              driving simulators and even a brian surgery simulator!
            </Col>
          </Row>
          <Row className="text-center mt-5">
            <p>
              These are some of the people I've been fortunate enough to work
              with:
            </p>
          </Row>
          <Row className="mb-3 align-items-center">
            <Col xs={6} md={4} lg={3} className="mb-2">
              <Image src="./images/logo_uon_dark.png" rounded fluid />
            </Col>
            <Col xs={6} md={4} lg={3} className="mb-2">
              <Image src="./images/iosh.png" rounded fluid />
            </Col>
            <Col xs={6} md={4} lg={3} className="mb-3">
              <Image src="./images/ThrillLab.jpg" rounded fluid />
            </Col>
            <Col xs={6} md={4} lg={3} className="mb-2">
              <Image src="./images/logo_imh.png" rounded fluid />
            </Col>
            <Col xs={6} md={4} lg={3} className="mb-2">
              <Image src="./images/NHS_Logo.png" rounded fluid />
            </Col>
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

export default ProjectsModal;
