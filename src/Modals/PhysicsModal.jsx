import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const PhysicsModal = ({ showModal }) => {
  const showPhysicsModal = useStore((state) => state.showPhysicsModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    showPhysicsModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Physics</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Sophisticated physics simulations are now possible in the browser. The
        following demo uses the rapier physics engine to let you play a simple
        game level. Enjoy!
        <div className="text-center mt-2">
          <Button
            href="https://drt-software.com/Demos/Physics/physics_demo.html"
            target="_blank"
            className="me-2"
            variant="primary">
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

export default PhysicsModal;
