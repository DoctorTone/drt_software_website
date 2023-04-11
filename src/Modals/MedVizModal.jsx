import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const MedVizModal = ({ showModal }) => {
  const showMedVizModal = useStore((state) => state.showMedVizModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    showMedVizModal(false);
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
        I've previously worked in the medical imaging industry developing applications that take 2D imaging data and create 3D volumetric models.
        <div className="text-center">
            <Button className="me-2" variant="primary">Launch demo</Button>
            <Button variant="warning">Launch video</Button>
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