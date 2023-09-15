import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const ARModal = ({ showModal }) => {
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
				<Modal.Title>Augmented Reality</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				WebXR allows us to create AR applications directly in the browser. AR
				enables virtual objects to be sitauted in the real world to enhance or
				augment what is alrady there. Application areas include games,
				advertising, education, medicine and lots more. Check out a couple of
				simple use cases in the video below.
				<div className="text-center mt-2">
					<Button
						href="https://www.youtube.com/watch?v=xyL2VPOHWPE"
						target="_blank"
						className="me-2"
						variant="primary"
					>
						Watch video
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

export default ARModal;
