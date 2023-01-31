import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const ContactModel = ({ showModal }) => {
  const showContactModal = useStore((state) => state.showContactModal);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    showContactModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Please contact us.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModel;
