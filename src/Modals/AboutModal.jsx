import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const AboutModal = ({ showModal }) => {
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
        <Modal.Title>Welcome to DRT</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          I'm Dr Tony Glover and I have more than 25 years experience in the
          software development industry. I am passionate about all things 3D -
          my mission is to create stunning interactive websites that showcase
          the power of 3D graphics.
        </p>
        <p>
          I've worked for both large and small commercial companies, start-ups
          and academia. I've built applications in the fields of virtual
          reality, data visualisation, product configuration, mental health,
          children's games, graphical tools, architecture, medical imaging,
          interactive experiences and lots more!
        </p>
        <p>
          If you want to harness the magic of 3D in your application then please
          get in touch!
        </p>
        <div className="text-center">
          <Image src="./images/drt.jpg" fluid rounded />
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

export default AboutModal;
