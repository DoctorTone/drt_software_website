import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const TechModal = ({ showModal }) => {
  const showTechModal = useStore((state) => state.showTechModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    showTechModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Technology</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        The majority of my work is web-based so the technologies I use reflect
        this, such as javascript libraries like three.js and react three fiber.
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TechModal;
