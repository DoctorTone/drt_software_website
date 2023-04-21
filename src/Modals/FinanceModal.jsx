import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const FinanceModal = ({ showModal }) => {
  const showFinanceVizModal = useStore((state) => state.showFinanceVizModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    showFinanceVizModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Finance Visualisation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        I've previously worked in the medical imaging industry developing
        applications that take 2D imaging data and create 3D volumetric models.
        The following demo was used to isolate and measure tumerous lesions in
        the brain.
        <div className="text-center mt-2">
          <Button
            className="me-2"
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

export default FinanceModal;
