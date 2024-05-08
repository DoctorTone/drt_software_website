import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const PhysicsModal = ({ showModal }) => {
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
        <Modal.Title>Physics and Simulation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Sophisticated physics simulations are now possible in the browser. The
        following demo uses the rapier physics engine to let you play a simple
        game level. Enjoy!
        <div className="text-center mt-2">
          <Row className="align-items-center">
            <Col xs={8}>
              <Image src="./images/physics.jpg" rounded fluid />
            </Col>
            <Col xs={4}>
              <Button
                href="https://drt-software.com/Demos/Physics/physics_demo.html"
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

export default PhysicsModal;
