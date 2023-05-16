import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const FinanceModal = ({ showModal }) => {
  const showFinanceVizModal = useStore((state) => state.showFinanceVizModal);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    showFinanceVizModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Finance Visualisation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        This demo offers a novel method to visualise data in three dimensions.
        The application visualises the FTSE-100 index for the whole of 2016. It
        illustrates the share price trends on a daily, weekly and monthly basis.
        The height of each bar also corresponds to the share price trend
        throughout the year.
        <div className="text-center mt-2">
          <Button
            className="me-2"
            variant="primary"
            href="https://www.drt-software.com/FTSEViz/FTSEViz.html"
            target="_blank">
            Launch demo
          </Button>
          <Button
            variant="warning"
            href="https://www.youtube.com/watch?v=P-B_Tk56038"
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

export default FinanceModal;
