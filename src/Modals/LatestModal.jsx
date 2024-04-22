import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const LatestModal = ({ showModal }) => {
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
        <Modal.Title>Latest News!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ul>
          <li>
            The portfolio section now includes some demos written with
            Babylon.js (
            <a href="https://www.babylonjs.com/" target="_blank">
              Babylon
            </a>
            )
          </li>
          <li>
            Check out the latest version of my{" "}
            <a
              href="https://drt-software.com/Demos/VRFramework/VRFramework.html"
              target="_blank"
            >
              VRFramework
            </a>
            , for experimenting with all things VR!
          </li>
        </ul>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LatestModal;
