import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const ServicesModal = ({ showModal }) => {
  const showServicesModal = useStore((state) => state.showServicesModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    showServicesModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Services</Modal.Title>
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

export default ServicesModal;
