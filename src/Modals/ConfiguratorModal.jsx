import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const ConfiguratorModal = ({ showModal }) => {
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
        <Modal.Title>3D Configurator</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One of the most effective uses of 3D graphics is to showcase products.
        The level of realism is sufficient that it gives customers an idea of
        what the products look like before they purchase. This can be utilised
        to configure anything from cars to ornaments!
        <div className="text-center mt-2 mb-3">
          <Row className="align-items-center">
            <Col xs={8}>
              <Image src="./images/configurator.jpg" rounded fluid />
            </Col>
            <Col xs={4}>
              <Button
                href="https://drt-software.com/Demos/Configurator/configurator.html"
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

export default ConfiguratorModal;
