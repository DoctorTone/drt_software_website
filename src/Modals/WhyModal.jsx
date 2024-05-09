import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const WhyModal = ({ showModal }) => {
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
        <Modal.Title>Why 3D?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          <ul>
            <li>
              You sell a wonderful product but if only your customers could see
              it up close.
            </li>
            <li>
              You have complex data that you would like everyone to see and
              interact with in real-time regardless of their location.
            </li>
            <li>
              You would like to show clients a fly-through of the house that
              you've just designed.
            </li>
            <li>
              You would like your students to experience a detailed, accurate
              model of the solar system and fly around the planets.
            </li>
            <li>
              You'd like to wander around a museum and see all the exhibits as
              if you were there.
            </li>
            <li>
              If only there were a way to train people in hazardous environments
              that's completely safe and repeatable?
            </li>
            <li>
              <strong>
                <em>You get the idea right?</em>
              </strong>
            </li>
          </ul>
        </p>
        <h4 className="modal-title">Why me?</h4>
        <br></br>
        <p>
          I'm incredibly hard working and have a wealth of experience in
          building applications. I am customer-focused, I provide the level of
          service I would expect myself, and I communicate the process every
          step of the way.
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

export default WhyModal;
