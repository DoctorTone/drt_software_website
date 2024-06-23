import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MODALS } from "../state/Config.js";
import { TelephoneFill, ThreeDots } from "react-bootstrap-icons";

import useStore from "../state/store.js";

const ContactModel = ({ showModal }) => {
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
        <h2 className="mx-auto w-100 ps-3">Please get in touch</h2>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row className="mb-3">
            <TelephoneFill color="orange" size="30" />
          </Row>
          <Form
            className="mb-5"
            action="https://usebasin.com/f/da50ea670849"
            method="POST"
          >
            <Row>
              <Col xs={1}></Col>
              <Col xs={3} md={2} className="ps-5">
                <Form.Label className="ps-5">Name</Form.Label>
              </Col>
              <Col xs={9} md={6} className="mb-2">
                <Form.Control
                  type="text"
                  name="userName"
                  placeholder="Enter name"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={1}></Col>
              <Col xs={3} md={2} className="ps-5">
                <Form.Label className="ps-5">Email</Form.Label>
              </Col>
              <Col xs={9} md={6} className="mb-2">
                <Form.Control
                  type="email"
                  name="userEmail"
                  placeholder="name@name.com"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={1}></Col>
              <Col xs={3} md={2} className="ps-5">
                <Form.Label className="ps-5">Phone</Form.Label>
              </Col>
              <Col xs={9} md={6} className="mb-2">
                <Form.Control
                  type="tel"
                  name="userPhone"
                  placeholder="12345 678910"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={1}></Col>
              <Col xs={3} md={2} className="ps-5">
                <Form.Label className="ps-5">Message</Form.Label>
              </Col>
              <Col xs={9} md={6} className="mb-2">
                <Form.Control type="text" name="userText" />
              </Col>
            </Row>
            <Row>
              <Col xs={1}></Col>
              <Col xs={3} md={2} className="ps-5">
                <Button type="submit" className="ms-5 mb-3">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
          <div className="text-center mb-5">
            <p>
              Alternatively you can email me here <Button>Contact</Button> or
              call me on 0115 8840440.
            </p>
          </div>
          <div className="text-center">
            <h6 className="me-5">I aim to respond within one working day</h6>
          </div>
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

export default ContactModel;
