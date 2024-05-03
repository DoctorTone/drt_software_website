import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const MedVizModal = ({ showModal }) => {
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
        <Modal.Title>Medical Visualisation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        I've previously worked in the medical imaging industry developing
        applications that take 2D imaging data and create 3D volumetric models.
        The following demo was used to isolate and measure tumerous lesions in
        the brain.
        <div className="text-center mt-2">
          <Row className="align-items-center">
            <Col xs={8}>
              <Image src="./images/brain.jpg" rounded fluid />
            </Col>
            <Col xs={4}>
              <Button
                className="mb-3"
                variant="primary"
                href="https://www.drt-software.com/MedicalViz/medicalViz.html"
                target="_blank"
              >
                Launch demo
              </Button>
              <Button
                variant="warning"
                href="https://www.youtube.com/watch?v=MoKVrdJoqAM"
                target="_blank"
              >
                Launch video
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

export default MedVizModal;
