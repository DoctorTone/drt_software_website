import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import useStore from "../state/store.js";

const ContactModel = ({ showModal }) => {
  const showContactModal = useStore((state) => state.showContactModal);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    showContactModal(false);
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Please Contact</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="row">
            <div className="col-2">
              <Form.Label>Name</Form.Label>
            </div>
            <div className="col-10 mb-2">
              <Form.Control type="text" />
            </div>
            <div className="col-2">
              <Form.Label>Email</Form.Label>
            </div>
            <div className="col-10 mb-2">
              <Form.Control type="email" />
            </div>
            <div className="col-2">
              <Form.Label>Phone</Form.Label>
            </div>
            <div className="col-10 mb-2">
              <Form.Control type="phone" />
            </div>
          </Form.Group>
          <Button>Submit</Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <h6 className="me-5">I aim to respond in one working day</h6>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModel;
