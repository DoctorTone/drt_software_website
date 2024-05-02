import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const VRModal = ({ showModal }) => {
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
        <Modal.Title>Virtual Reality</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        With the advent of WebXR, it is now possible to have interactive,
        virtual reality environments online. This opens up the possibilities to
        develop simulations, games, educational apps and more, all in the
        browser. Click below to look around my experimental VR framework, and be
        sure to check it regularly for updates!
        <div className="text-center mt-2">
          <Row className="align-items-center">
            <Col xs={8}>
              <Image src="./images/vr.jpg" rounded fluid />
            </Col>
            <Col xs={4}>
              <Button
                href="https://drt-software.com/Demos/VRFramework/VRFramework.html"
                target="_blank"
                className="me-2"
                variant="primary"
              >
                Launch demo
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

export default VRModal;
