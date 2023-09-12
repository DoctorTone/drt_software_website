import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import { MODALS } from "../state/Config.js";

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
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Please Contact</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form action="https://usebasin.com/f/da50ea670849" method="POST">
					<Form.Group className="row">
						<Col xs={3} md={2}>
							<Form.Label>Name</Form.Label>
						</Col>
						<Col xs={9} md={10} className="mb-2">
							<Form.Control
								type="text"
								name="userName"
								placeholder="Enter name"
								required
							/>
						</Col>
						<Col xs={3} md={2}>
							<Form.Label>Email</Form.Label>
						</Col>
						<Col xs={9} md={10} className="mb-2">
							<Form.Control
								type="email"
								name="userEmail"
								placeholder="name@name.com"
								required
							/>
						</Col>
						<Col xs={3} md={2}>
							<Form.Label>Phone</Form.Label>
						</Col>
						<Col xs={9} md={10} className="mb-2">
							<Form.Control
								type="tel"
								name="userPhone"
								placeholder="12345 678910"
							/>
						</Col>
						<Col xs={3} md={2}>
							<Form.Label>Message</Form.Label>
						</Col>
						<Col xs={9} md={10} className="mb-2">
							<Form.Control type="text" name="userText" />
						</Col>
					</Form.Group>
					<Button type="submit" className="mb-3">
						Submit
					</Button>
					<Form.Group>
						<Form.Label>Alternatively:</Form.Label>
						<br></br>
						<Form.Label>
							Email{" "}
							<a href="mailto:enquiries@drt-software.com">
								enquiries@drt-software.com
							</a>
						</Form.Label>
						<br></br>
						<Form.Label>Phone 0115 8840440</Form.Label>
					</Form.Group>
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
