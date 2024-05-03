import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const EffectsModal = ({ showModal }) => {
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Effects and animations</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        The following list of effects and animations showcase various graphical
        techniques that represent everything from realistic rendering to
        interesting effects that can be achieved with graphics technology. Be
        sure to keep checking back as the list is being updated!
        <div className="text-center mt-2 mb-3">
          <Row className="align-items-center">
            <Col xs={8}>
              <Image src="./images/effects.jpg" rounded fluid />
            </Col>
            <Col xs={4}>
              <Button
                href="https://drt-software.com/Demos/Effects/effects.html"
                target="_blank"
                className="me-2"
                variant="primary"
              >
                Launch demo
              </Button>
            </Col>
          </Row>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EffectsModal;
