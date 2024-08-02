import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const SpaceModal = ({ showModal }) => {
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
        <Modal.Title>Solar System</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        The web isn't just confined to visualisations. We can show simulations
        of all shapes and sizes, from atomic structures to the solar system and
        beyond. This is an example of an educational demo that shows the
        relative sizes of the planets and simulates their rotations.
        <div className="text-center mt-2">
          <Row className="align-items-center">
            <Col xs={8}>
              <Image src="./images/solar.jpg" rounded fluid />
            </Col>
            <Col xs={4}>
              <Button
                className="mb-3"
                variant="primary"
                href="https://www.drt-software.com/Solar/"
                target="_blank"
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

export default SpaceModal;
