import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tools, HexagonHalf } from "react-bootstrap-icons";

import useStore from "../state/store.js";

const ServicesModal = ({ showModal }) => {
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
        className="border-0 pb-0 text-center mt-5"
        closeButton
        closeVariant="white"
      >
        <h2 className="mx-auto w-100 ps-3">How can I help?</h2>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row className="mb-4">
            <Tools color="orange" size="30" />
          </Row>
          <Row className="mb-3">
            <Col xs={2} className="text-center">
              <HexagonHalf color="orange" size="24" />
            </Col>
            <Col xs={10}>
              <p className="greyerText">
                I build highly interactive and engaging 3D graphical web
                applications. I don't just build ordinary websites, I utilise 3D
                graphics technolgy to create immersive experiences.
              </p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={2} className="text-center">
              <HexagonHalf color="orange" size="24" />
            </Col>
            <Col xs={10}>
              <p className="greyerText">
                I have worked with large and small organisations, start-ups and
                academic institutions to create diverse projects ranging from
                virtual environments to brain surgery simulators.
              </p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={2} className="text-center">
              <HexagonHalf color="orange" size="24" />
            </Col>
            <Col xs={10}>
              <p className="greyerText">
                I have been involved in all aspects of the development from
                requirements to implementation. I can take your ideas and turn
                them into a viable product. Projects are built to the highest
                quality and delivered on time.
              </p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={2} className="text-center">
              <HexagonHalf color="orange" size="24" />
            </Col>
            <Col xs={10}>
              <div className="greyerText">
                Do you have an ongoing project that needs to be completed? No
                problem! I can look at your existing codebase and get it done.
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={2} className="text-center">
              <HexagonHalf color="orange" size="24" />
            </Col>
            <Col xs={10}>
              <div className="greyerText">
                I have a fantastic work ethic, am customer-focused, I provide
                the level of service I would expect myself, and I communicate
                the process every step of the way.
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={2} className="text-center">
              <HexagonHalf color="orange" size="24" />
            </Col>
            <Col xs={10}>
              <div className="greyerText">
                I offer consultancy services to try and help people decide on
                the best technology choices available and the most applicable to
                thier needs.
              </div>
            </Col>
          </Row>
          <div className="mb-2">
            If you would like to discuss a potential project or collaboration or
            would just like to have a conversation about graphics technology in
            general then please get in touch.
          </div>
          <div className="text-center">
            <Button href="mailto:enquiries@drt-software.com">Contact</Button>
          </div>
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

export default ServicesModal;
