import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const ProjectsModal = ({ showModal }) => {
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
        <Modal.Title>Previous Projects</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          I've enjoyed building a diverse array of projects including:
          <ul>
            <li>
              A metaverse museum application for the art world allowing multiple
              participants to view exhibits in the browser and VR.
            </li>
            <li>
              3D data visualisations for things such as climate data, finance,
              sports, music and a whole lot more.
            </li>
            <li>
              Medical imaging applications for detecting and measuring tumours.
            </li>
            <li>A brain surgery simulator!</li>
            <li>
              A clinical mental health trial with Nottinghamshire Healthcare
              Trust to aid people in coping with mental health issues.
            </li>
            <li>
              3D product configurators, 3D editors, graphical tools, games for
              children with autism, driving simulators...
            </li>
            <li>
              I've worked with Universities, the Institute of Mental Health, the
              NHS, artists, advertising agencies and lots of wonderful people.
            </li>
            <li>I'm always open to discussing new project ideas.</li>
          </ul>
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

export default ProjectsModal;
