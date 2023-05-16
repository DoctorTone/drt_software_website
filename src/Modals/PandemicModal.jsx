import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const PandemicModal = ({ showModal }) => {
  const showCovidVizModal = useStore((state) => state.showCovidVizModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    showCovidVizModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Pandemic Visualisation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        During the global pandemic, data visualisation played a key role in
        providing information and analysis of the virus. The huge quantities of
        data generated have been utilsied by both scientific and governmental
        bodies to help inform policy decisions. They also provide the general
        public with a means to scrutinise all the information. This
        visualisation shows the virus data for the first wave in the UK. It
        separates out aspects of the data so that they may be studied more
        easily, yet still allows comparisons to be made.
        <div className="text-center mt-2">
          <Button
            className="me-2"
            variant="primary"
            href="https://www.drt-software.com/Covid/covid19.html"
            target="_blank">
            Launch demo
          </Button>
          <Button
            variant="warning"
            href="https://www.youtube.com/watch?v=hWqefIG6otA&t=34s"
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

export default PandemicModal;
