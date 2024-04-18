import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const EffectsModal = ({ showModal }) => {
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setVisibleModal(MODALS.NONE);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Effects and Materials</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        The following demo shows a collection of effects that illustrate an
        aspect of graphics technology (such as shaders) or an interesting
        algorithm, technique or process.
        <div className="text-center mt-2 mb-3">
          <Button
            href="https://drt-software.com/Demos/Effects/effects.html"
            target="_blank"
            className="me-2"
            variant="primary"
          >
            Launch demo
          </Button>
        </div>
        The material properties of objects can also create realistic effects.
        The material editor below allows you to configure the physical material
        on a 3D model.
        <div className="text-center mt-2">
          <Button
            href="https://drt-software.com/Demos/Material/editor.html"
            target="_blank"
            className="me-2"
            variant="warning"
          >
            Launch editor
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

export default EffectsModal;
