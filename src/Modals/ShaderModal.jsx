import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const ShaderModal = ({ showModal }) => {
  const showShaderModal = useStore((state) => state.showShaderModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    showShaderModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shaders</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Shaders provide the opportunity to create an amazing array of graphical
        transformations, ranging from increased realism to weird and wonderful
        effects. The following demo shows a number of effects that you can
        switch between.
        <div className="text-center mt-2">
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

export default ShaderModal;
