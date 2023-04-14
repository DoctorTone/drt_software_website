import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const AboutModal = ({ showModal }) => {
  const showAboutModal = useStore((state) => state.showAboutModal);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    showAboutModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to DRT</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          I'm Dr Tony Glover and I have more than 25 years experience in the
          software development industry. I do all things 3D - VR, metaverse,
          virtual environments, data visualisation, games, graphical tools. If
          you need some interactive 3D graphics then let me know!
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

export default AboutModal;
