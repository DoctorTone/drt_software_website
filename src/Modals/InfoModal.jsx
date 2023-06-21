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
          Use the <strong>rotate</strong> buttons at the bottom to rotate the
          islands, then click the nearest island for more information.
        </p>
        <p>
          Thanks to the{" "}
          <a href="https://market.pmnd.rs/" target="_blank">
            pmndrs marketplace
          </a>{" "}
          and the{" "}
          <a href="https://blendswap.com/" target="_blank">
            blend swap
          </a>{" "}
          community for the majority of the models.
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
