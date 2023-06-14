import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const StartUpModal = ({ showModal }) => {
  const showStartUpModal = useStore((state) => state.showStartUpModal);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    showStartUpModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Welcome to my website!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StartUpModal;
