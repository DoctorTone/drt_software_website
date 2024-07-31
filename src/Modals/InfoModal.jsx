import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";
import { Link } from "react-bootstrap-icons";

import useStore from "../state/store.js";

const InfoModal = ({ showModal }) => {
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
        <Modal.Title>Information</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Use the left/right arrows to see all the options.</p>
        <p>Click on the islands for more information.</p>
        <p>Use the levels menu to switch between the different levels.</p>
        <p>
          For added ambience try the day/night mode and play a little music!
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
        <p>
          Please contact me if you have any questions{" "}
          <Button href="mailto:enquiries@drt-software.com">Contact</Button>
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
