import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const EditorModal = ({ showModal }) => {
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
        <Modal.Title>Material Editor</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        The material properties of objects can also create realistic effects.
        The material editor below allows you to configure the physical material
        on a 3D model.
        <div className="text-center mt-2">
          <Row className="align-items-center">
            <Col xs={8}>
              <Image src="./images/editor.jpg" rounded fluid />
            </Col>
            <Col xs={4}>
              <Button
                href="https://drt-software.com/Demos/Material/editor.html"
                target="_blank"
                className="me-2"
                variant="warning"
              >
                Launch editor
              </Button>
            </Col>
          </Row>
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

export default EditorModal;
