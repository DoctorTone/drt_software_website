import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const SleepModal = ({ showModal }) => {
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
        <Modal.Title>Sleep Data Visualisation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        I've built numerous 3D data visualisations as I think it offers a
        different perspective to more conventional ways to present data. This
        example depicts sleep patterns for a subject over a number of months,
        illustrating all the associated attributes. The application is fully
        interactive allowing individual attribute selection, scaling and
        highlighting of any relevant trends.
        <div className="text-center mt-2">
          <Button
            className="me-2"
            variant="primary"
            href="https://www.drt-software.com/SleepViz/sleepViz.html"
            target="_blank">
            Launch demo
          </Button>
          <Button
            variant="warning"
            href="https://www.youtube.com/watch?v=ZTOuC_TjjB8"
            target="_blank">
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

export default SleepModal;
