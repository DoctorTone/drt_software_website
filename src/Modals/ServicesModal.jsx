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
        <p>
          As well as bespoke software design and development, I also do 3D
          consultancy, presentations, workshops and mentoring. If you need help
          with anything 3D-related then please get in touch.
        </p>
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
