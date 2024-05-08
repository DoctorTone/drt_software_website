import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const ServicesModal = ({ showModal }) => {
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
        <Modal.Title>Services + Technology</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          I build highly interactive and engaging 3D graphical web applications.
          I don't just build ordinary websites, I utilise 3D graphics technolgy
          to create immersive experiences.
        </p>
        <p>
          The potential application areas are huge - engineering, data
          visualisation, virtual reality, education, architecture, aeronautics,
          cosmology, games, music, art, virtual tours, advertising... 3D
          technology has the ability to revolutionise how visitors interact with
          your content.
        </p>
        <p>
          <em>
            <span className="mildFont">
              For those that want to know the technical details
            </span>
          </em>{" "}
          I use languages and frontend frameworks such as javascript,
          typescript, react, material ui, bootstrap etc. For all the
          graphics/WebXR programming I use three.js and react three fiber,
          Babylon.js and GLSL for shader programming. For desktop/native
          graphical applications I use Unity. I have also built back-end
          applications using node, express and database functionality.
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

export default ServicesModal;
