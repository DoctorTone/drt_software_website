import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
	House,
	ArrowCounterclockwise,
	Link,
	EmojiLaughing,
} from "react-bootstrap-icons";
import { SCENE } from "../state/Config.js";

import useStore from "../state/store.js";

const StartUpModal = ({ showModal }) => {
	const showStartUpModal = useStore((state) => state.showStartUpModal);
	const displaySpeechBubble = useStore((state) => state.displaySpeechBubble);
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
		showStartUpModal(false);
		// Ensure user interacts after certain time
		setTimeout(() => {
			const elem = document.getElementById("speechBubble");
			if (!elem) return;

			if (elem.classList.contains("disabled")) return;

			elem.classList.remove("d-none");
			displaySpeechBubble(true);
		}, SCENE.ROTATE_TIMEOUT);
	};

	useEffect(() => {
		setShow(showModal);
	}, [showModal]);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Welcome to DRT!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Use the menu on the left to explore the site.</p>
				<p>
					Click on the island in <strong>front</strong> of you to find out more.
				</p>
				<p>
					Use the home {<House />} and back {<ArrowCounterclockwise />} icons to
					move between the levels.
				</p>
				<p>
					Be sure to keep coming back as the content will change frequently!
				</p>
				<p>Enjoy!!</p>
			</Modal.Body>

			<Modal.Footer>
				<Button onClick={handleClose} variant="primary">
					Got it!
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default StartUpModal;
