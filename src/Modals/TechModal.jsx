import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const TechModal = ({ showModal }) => {
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
        <Modal.Title>Technology</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        As the majority of my work is 3D graphics and front-end web-based I use
        languages and frameworks such as javascript, typescript, react,
        bootstrap, material ui, etc. For all the graphics/WebXR programming I
        use three.js and react three fiber and GLSL for shader programming. I
        have also built back-end applications using node, express and database
        functionality. For desktop/native graphical applications I also have
        experience of Unity.
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TechModal;
