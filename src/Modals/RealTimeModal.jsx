import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const RealTimeModal = ({ showModal }) => {
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
        <Modal.Title>Real-Time Visualisation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Processing data over the web makes it an ideal platform to be able to
        visualise data in real-time. At the Mayhem Horror festival we visualised
        the EEG activity of film fans as they watched the horror! Made in
        conjunction with colleagues at Thrill Laboratory and the Mixed Reality
        Lab.
        <div className="text-center mt-2">
          <Row className="align-items-center">
            <Col xs={8}>
              <Image src="./images/horror.jpg" rounded fluid />
            </Col>
            <Col xs={4}>
              <Button
                className="mb-3"
                variant="primary"
                href="https://www.drt-software.com/Horror/brainViz.html"
                target="_blank"
              >
                Launch demo
              </Button>
              <Button
                variant="warning"
                href="https://www.youtube.com/watch?v=I-VyOMYmE5U"
                target="_blank"
              >
                Launch video
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

export default RealTimeModal;
