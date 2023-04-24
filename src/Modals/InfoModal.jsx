import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const InfoModal = ({ showModal }) => {
  const showInfoModal = useStore((state) => state.showInfoModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    showInfoModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Information</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          Use the next and previous buttons at the bottom right to rotate the
          scene. Click on the islands for more information.
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

export default InfoModal;
