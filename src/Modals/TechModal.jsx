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
        Real time physics is now possible in the browser. The following example
        is a simple game level showing accurate physical simulation.
        <div className="text-center">
          <Button className="me-2" variant="primary">
            Launch demo
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

export default TechModal;
