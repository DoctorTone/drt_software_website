import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BoxFill,
  ThreeDots,
  Mouse2Fill,
  EyeFill,
  PencilFill,
  PeopleFill,
  BookHalf,
  TrophyFill,
} from "react-bootstrap-icons";

import useStore from "../state/store.js";

const WhyModal = ({ showModal }) => {
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
        <h2 className="mx-auto w-100 ps-3">Why use 3D?</h2>
      </Modal.Header>

      <Modal.Body>
        <Container className="text-center">
          <Row className="mb-5">
            <BoxFill color="orange" size="50" />
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Mouse2Fill
                className="mb-3 greyBackground px-3 rounded"
                color="orange"
                size="60"
              />
              <p className="h5 mb-3">Enhanced engagement</p>
              <p className="greyText mb-5">
                Users can explore and interact with realistic 3D models, making
                the experience more memorable, and feel more involved.
              </p>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <EyeFill
                className="mb-3 greyBackground px-3 rounded"
                color="orange"
                size="60"
              />
              <p className="h5 mb-3">Improved visualisation</p>
              <p className="greyText mb-5">
                Products can be represented realistically and viewed from any
                angle. Complex data can be simplified and shared for a better
                understanding.
              </p>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <PencilFill
                className="mb-3 greyBackground px-3 rounded"
                color="orange"
                size="60"
              />
              <p className="h5 mb-3">Innovative Branding</p>
              <p className="greyText mb-5">
                There are more innovative ways to represent your products. This
                can greatly enhance the appearence compared to a traditional
                website.
              </p>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <PeopleFill
                className="mb-3 greyBackground px-3 rounded"
                color="orange"
                size="60"
              />
              <p className="h5 mb-3">Increased visitors</p>
              <p className="greyText mb-5">
                The interactive and engaging nature of the site will encourage
                more users. Once there, they will be more tempted to stay
              </p>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <BookHalf
                className="mb-3 greyBackground px-3 rounded"
                color="orange"
                size="60"
              />
              <p className="h5 mb-3">Compelling experiences</p>
              <p className="greyText mb-5">
                Visitors can explore interacive elements providing increased
                depth and context.
              </p>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <TrophyFill
                className="mb-3 greyBackground px-3 rounded"
                color="orange"
                size="60"
              />
              <p className="h5 mb-3">Competitive edge</p>
              <p className="greyText mb-5">
                3D interactive websites can provide a distinct advantage over a
                more conventional website.
              </p>
            </Col>
          </Row>
          <ThreeDots color="orange" size="30" />
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

export default WhyModal;
