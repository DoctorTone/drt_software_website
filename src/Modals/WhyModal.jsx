import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BoxFill, ThreeDots, Mouse2Fill } from "react-bootstrap-icons";

import useStore from "../state/store.js";

const WhyModal = ({ showModal }) => {
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
        <h2 className="mx-auto w-100 ps-3">Why use 3D?</h2>
      </Modal.Header>

      <Modal.Body>
        <Container className="text-center">
          <Row className="mb-5">
            <BoxFill color="orange" size="30" />
          </Row>
          <Row>
            <Col xs={4}>
              <Mouse2Fill
                className="mb-3 greyBackground p-2 rounded"
                color="orange"
                size="60"
              />
              <p className="h5 mb-3">Enhanced engagement</p>
              <p className="greyText">
                Users can explore and interact with realistic 3D models, making
                the experience more memorable, and feel more involved.
              </p>
            </Col>
            <Col xs={4}>Enhanced engagement</Col>
            <Col xs={4}>Enhanced engagement</Col>
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

export default WhyModal;
