import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Envelope, Telephone } from "react-bootstrap-icons";
import useStore from "../state/store.js";

const PersonModal = ({ showModal }) => {
  const showPersonModal = useStore((state) => state.showPersonModal);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    showPersonModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact me</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>If you'd like to contact me for a quick informal chat then:</p>
        <p>
          {<Envelope />} :{" "}
          {
            <a href="mailto:enquiries@drt-software.com">
              enquiries@drt-software.com
            </a>
          }
        </p>
        <p>{<Telephone />} : +44 (0) 115 8840440</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PersonModal;
