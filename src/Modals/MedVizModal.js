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
        <p>I provide the following services</p>
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