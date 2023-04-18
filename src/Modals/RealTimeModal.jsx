import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const RealTimeModal = ({ showModal }) => {
  const showRealTimeModal = useStore((state) => state.showRealTimeModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    showRealTimeModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Real-Time Visualisation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Processing data over the web can result in being able to visualise data
        in real-time. At the Mayhem Horror festival we visualised the EEG
        activity of film fans as they watched the horror! Made in conjunction
        with colleagues at Thrill Laboratory and the Mixed Reality Lab.
        <div className="text-center mt-2">
          <Button
            className="me-2"
            variant="primary"
            href="https://www.drt-software.com/MedicalViz/medicalViz.html"
            target="_blank"
          >
            Launch demo
          </Button>
          <Button
            variant="warning"
            href="https://www.youtube.com/watch?v=MoKVrdJoqAM"
            target="_blank"
          >
            Launch video
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

export default RealTimeModal;
