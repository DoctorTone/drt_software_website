import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const VRModal = ({ showModal }) => {
  const showVRModal = useStore((state) => state.showVRModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    showVRModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Virtual Reality</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        With the advent of WebXR, it is now possible to have interactive,
        virtual reality environments online. This opens up the possibilities to
        develop simulations, games, educational apps and more, all in the
        browser. Click below for a simple VR framework I use to experiment with.
        <div className="text-center mt-2">
          <Button
            href="https://drt-software.com/Demos/VRFramework/VRFramework.html"
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

export default VRModal;
