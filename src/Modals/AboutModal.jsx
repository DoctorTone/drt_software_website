import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { MODALS } from "../state/Config.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stars, ThreeDots } from "react-bootstrap-icons";

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
      size="xl"
      contentClassName="mainModal"
      onHide={handleClose}
    >
      <Modal.Header
        className="border-0 pb-0 text-center"
        closeButton
        closeVariant="white"
      >
        <h2 className="mx-auto w-100 ps-3">Welcome</h2>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row className="mb-3">
            <Stars color="orange" size="30" />
          </Row>
          <Row className="mb-3">
            <Col xs={12} className="text-center">
              <h3 className="mb-4">I'm Dr Tony Glover</h3>
              <Image
                className="portrait"
                src="./images/profile.jpg"
                fluid
                roundedCircle
              />
            </Col>
            <Col xs={12} className="pt-3 greyText">
              <p className="greyText">
                I have more than 25 years experience in the software development
                industry. I am passionate about all things 3D - my mission is to
                create stunning interactive websites that showcase the power of
                3D graphics.
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
          <Row>
            <ThreeDots color="orange" size="36" />
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
