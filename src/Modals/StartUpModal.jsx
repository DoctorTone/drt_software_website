import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { House, ArrowCounterclockwise } from "react-bootstrap-icons";

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
        <Modal.Title>Welcome to DRT!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Use the <strong>Prev</strong> and <strong>Next</strong> buttons at the
          bottom right to rotate the islands around.
        </p>
        <p>
          Click on the island in front of you to find out more. Feel free to
          explore.
        </p>
        <p>
          Use the home {<House />} and back {<ArrowCounterclockwise />} icons to
          move between the levels.
        </p>
        <p>
          Be sure to keep coming back as the content will change frequently!
          Enjoy!
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="primary">
          Got it!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StartUpModal;
