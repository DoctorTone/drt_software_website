import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { MODALS } from "../state/Config.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <Modal
      show={show}
      fullscreen
      contentClassName="mainModal"
      onHide={handleClose}
    >
      <Modal.Header
        className="border-0 pb-0 text-center mt-5"
        closeButton
        closeVariant="white"
      >
        <h2 className="mx-auto w-100 ps-3">Who am I ?</h2>
      </Modal.Header>

      <Modal.Body>
        <div className="text-center mb-3">
          <Image src="./images/profile.jpg" fluid roundedCircle />
        </div>
        <Container>
          <Row>
            <Col xs={2}></Col>
            <Col xs={8}>
              <p>
                I'm Dr Tony Glover and I have more than 25 years experience in
                the software development industry. I am passionate about all
                things 3D - my mission is to create stunning interactive
                websites that showcase the power of 3D graphics.
              </p>
              <p>
                I formed DRT in 2017 to provide 3D data visualisation services
                to a number of companies. Since then I've had the pleasure of
                working with some amazing people on all sorts of wonderful
                projects.
              </p>
              <p>
                I've worked with clients in both small and large companies, as
                well as start-ups and academic institutions. I've worked on a
                diverse array of projects including 3D editors for the
                construction industry, data visualisation applications, virtual
                museum exhibits, driving simulators, mental health trials and
                even a brain surgery simulator!
              </p>
              <p>
                I'm always open to new project ideas and collaborations and
                would love to hear from you if you have an exciting and
                challenging project that you need some help with. Feel free to
                get in touch.
              </p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer className="border-0">
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AboutModal;
