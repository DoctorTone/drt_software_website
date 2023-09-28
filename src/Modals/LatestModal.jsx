import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const LatestModal = ({ showModal }) => {
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
				<Modal.Title>Latest News!</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<ul>
					<li>
						Great news regarding the{" "}
						<a
							href="https://www.researchintorecovery.com/research/neon/"
							target="_blank"
						>
							NEON
						</a>{" "}
						mental health application that I helped to build. A paper discussing
						the positive outcomes of the trial has been accepted for publication
						into the journal of World Psychiatry, one of the world's most
						influential journals on mental health research.
					</li>
					<li>
						Check out the latest version of my{" "}
						<a
							href="https://drt-software.com/Demos/VRFramework/VRFramework.html"
							target="_blank"
						>
							VRFramework
						</a>
						, for experimenting with all things VR!
					</li>
				</ul>
			</Modal.Body>

			<Modal.Footer>
				<Button onClick={handleClose} variant="secondary">
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default LatestModal;
