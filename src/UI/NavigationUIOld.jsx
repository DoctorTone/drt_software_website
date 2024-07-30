import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
	House,
	ArrowCounterclockwise,
	InfoLg,
	Person,
	Twitter,
	Youtube,
	Linkedin,
	Link,
} from "react-bootstrap-icons";
import { SCENE, ISLANDS, MODALS } from "../state/Config.js";
import useStore from "../state/store.js";

const NavigationUI = () => {
	const currentLevel = useStore((state) => state.currentLevel);
	const setCurrentLevel = useStore((state) => state.setCurrentLevel);
	const setVisibleModal = useStore((state) => state.setVisibleModal);
	const animateNextScene = useStore((state) => state.animateNextScene);
	const activeIsland = useStore((state) => state.activeIsland);
	const setActiveIsland = useStore((state) => state.setActiveIsland);
	const setTargetIsland = useStore((state) => state.setTargetIsland);
	const setFadeOverlay = useStore((state) => state.setFadeOverlay);
	const updateSlots = useStore((state) => state.updateSlots);
	const overlayFaded = useStore((state) => state.overlayFaded);
	const setOverlayFaded = useStore((state) => state.setOverlayFaded);
	const speechBubbleVisible = useStore((state) => state.speechBubbleVisible);
	const displaySpeechBubble = useStore((state) => state.displaySpeechBubble);

	const [showLinks, setShowLinks] = useState(false);
	const [selectSound] = useState(() => new Audio("./sounds/select.wav"));
	const [menuState, setMenuState] = useState("Main");
	const [expanded, setExpanded] = useState(false);

	const selectItem = (event) => {
		console.log("Selected...");
	};

	const About = () => {
		if (activeIsland === "About") {
			setVisibleModal(MODALS.ABOUT);
			selectSound.play();
		} else {
			setTargetIsland("About");
		}
		setExpanded(false);
	};

	const Services = () => {
		if (activeIsland === "Services") {
			setVisibleModal(MODALS.SERVICES);
			selectSound.play();
		} else {
			setTargetIsland("Services");
		}
		setExpanded(false);
	};

	const Contact = () => {
		if (activeIsland === "Contact") {
			setVisibleModal(MODALS.CONTACT);
			selectSound.play();
		} else {
			setTargetIsland("Contact");
		}
		setExpanded(false);
	};

	const Projects = () => {
		setVisibleModal(MODALS.PROJECTS);
		selectSound.play();
		setExpanded(false);
	};

	const Latest = () => {
		setVisibleModal(MODALS.LATEST);
		selectSound.play();
		setExpanded(false);
	};

	const Portfolio = () => {
		setMenuState("Portfolio");
		// Fade overlay out
		setFadeOverlay(1);
		setExpanded(false);

		const elem = document.getElementById("speechBubble");
		if (!elem) return;

		if (speechBubbleVisible) {
			displaySpeechBubble(false);
			const elem = document.getElementById("speechBubble");
			if (!elem) return;

			elem.classList.add("d-none");
		}

		elem.classList.add("disabled");
	};

	const VR = () => {
		if (activeIsland === "VR") {
			setVisibleModal(MODALS.VR);
			selectSound.play();
		} else {
			setTargetIsland("VR");
		}
		setExpanded(false);
	};

	const Physics = () => {
		if (activeIsland === "Physics") {
			setVisibleModal(MODALS.PHYSICS);
			selectSound.play();
		} else {
			setTargetIsland("Physics");
		}
		setExpanded(false);
	};

	const Shaders = () => {
		if (activeIsland === "Shaders") {
			setVisibleModal(MODALS.SHADERS);
			selectSound.play();
		} else {
			setTargetIsland("Shaders");
		}
		setExpanded(false);
	};

	const Tech = () => {
		if (activeIsland === "Tech") {
			setVisibleModal(MODALS.TECH);
			selectSound.play();
		} else {
			setTargetIsland("Tech");
		}
		setExpanded(false);
	};

	const AR = () => {
		if (activeIsland === "AR") {
			setVisibleModal(MODALS.AR);
			selectSound.play();
		} else {
			setTargetIsland("AR");
		}
		setExpanded(false);
	};

	const DataViz = () => {
		setMenuState("DataViz");
		// Fade overlay out
		setFadeOverlay(1);
		setExpanded(false);
	};

	const Medical = () => {
		if (activeIsland === "Medical") {
			setVisibleModal(MODALS.MEDICAL);
			selectSound.play();
		} else {
			setTargetIsland("Medical");
		}
		setExpanded(false);
	};

	const Finance = () => {
		if (activeIsland === "Finance") {
			setVisibleModal(MODALS.FINANCE);
			selectSound.play();
		} else {
			setTargetIsland("Finance");
		}
		setExpanded(false);
	};

	const Sleep = () => {
		if (activeIsland === "Sleep") {
			setVisibleModal(MODALS.SLEEP);
			selectSound.play();
		} else {
			setTargetIsland("Sleep");
		}
		setExpanded(false);
	};

	const Pandemic = () => {
		if (activeIsland === "Pandemic") {
			setVisibleModal(MODALS.PANDEMIC);
			selectSound.play();
		} else {
			setTargetIsland("Pandemic");
		}
		setExpanded(false);
	};

	const RealTime = () => {
		if (activeIsland === "RealTime") {
			setVisibleModal(MODALS.REALTIME);
			selectSound.play();
		} else {
			setTargetIsland("RealTime");
		}
		setExpanded(false);
	};

	const Home = () => {
		setMenuState("Main");
		// Fade overlay out
		setFadeOverlay(1);
		setExpanded(false);
	};

	const Back = () => {
		switch (menuState) {
			case "Portfolio":
				setMenuState("Main");
				// Fade overlay out
				setFadeOverlay(1);
				break;

			case "DataViz":
				setMenuState("Portfolio");
				// Fade overlay out
				setFadeOverlay(1);
				break;

			default:
				break;
		}
		setExpanded(false);
	};

	useEffect(() => {
		if (!overlayFaded) return;

		switch (menuState) {
			case "Main":
				setCurrentLevel(SCENE.MAIN_LEVEL);
				updateSlots(["Contact", "About", "Services"]);
				setActiveIsland("About");
				setTargetIsland("");
				setOverlayFaded(false);
				setFadeOverlay(-1);
				break;

			case "Portfolio":
				setCurrentLevel(SCENE.LEVEL_1);
				updateSlots(["Physics", "VR", "Shaders"]);
				setActiveIsland("VR");
				setTargetIsland("");
				setOverlayFaded(false);
				setFadeOverlay(-1);
				break;

			case "DataViz":
				setCurrentLevel(SCENE.LEVEL_2);
				updateSlots(["Finance", "Medical", "Sleep"]);
				setActiveIsland("Medical");
				setTargetIsland("");
				setOverlayFaded(false);
				setFadeOverlay(-1);
				break;

			default:
				break;
		}
	}, [overlayFaded]);

	return (
		<>
			<div id="home" className="panel ps-2 ps-md-3">
				{menuState === "Main" ? (
					<Navbar
						expanded={expanded}
						expand="lg"
						className="bg-body-tertiary Main"
					>
						<Navbar.Toggle
							onClick={() => setExpanded(!expanded)}
							aria-controls="responsive-navbar-nav"
							className="mb-3"
						/>
						<Navbar.Collapse>
							<Nav className="flex-column">
								<div className="mb-3">
									<Button
										onClick={About}
										variant="outline-dark"
										className="w-100"
									>
										About
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={Services}
										variant="outline-dark"
										className="w-100"
									>
										Services
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={Contact}
										variant="outline-dark"
										className="w-100"
									>
										Contact
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={Projects}
										variant="outline-dark"
										className="w-100"
									>
										Projects
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={Latest}
										variant="outline-dark"
										className="w-100"
									>
										Latest
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={Portfolio}
										variant="outline-dark"
										className="w-100"
									>
										Portfolio
									</Button>
								</div>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				) : null}
				{menuState === "Portfolio" ? (
					<Navbar
						expanded={expanded}
						expand="lg"
						variant="dark"
						className="bg-body-tertiary"
					>
						<Navbar.Toggle
							onClick={() => setExpanded(!expanded)}
							aria-controls="responsive-navbar-nav"
							className="mb-3"
						/>
						<Navbar.Collapse>
							<Nav className="flex-column">
								<div className="mb-3">
									<OverlayTrigger
										placement="right"
										overlay={<Tooltip>Home</Tooltip>}
									>
										<Button
											onClick={Home}
											variant="outline-warning"
											className="w-100"
										>
											<House />
										</Button>
									</OverlayTrigger>
								</div>
								<div className="mb-3">
									<Button
										onClick={VR}
										variant="outline-warning"
										className="w-100"
									>
										VR
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={Physics}
										variant="outline-warning"
										className="w-100"
									>
										Physics
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={Shaders}
										variant="outline-warning"
										className="w-100"
									>
										Shaders
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={Tech}
										variant="outline-warning"
										className="w-100"
									>
										Tech
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={AR}
										variant="outline-warning"
										className="w-100"
									>
										AR
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={DataViz}
										variant="outline-warning"
										className="w-100"
									>
										DataViz
									</Button>
								</div>
								<div className="mb-3">
									<OverlayTrigger
										placement="right"
										overlay={<Tooltip>Back to previous</Tooltip>}
									>
										<Button
											onClick={Back}
											variant="outline-warning"
											className="w-100"
										>
											<ArrowCounterclockwise />
										</Button>
									</OverlayTrigger>
								</div>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				) : null}
				{menuState === "DataViz" ? (
					<Navbar
						expanded={expanded}
						expand="lg"
						className="bg-body-tertiary Viz"
					>
						<Navbar.Toggle
							onClick={() => setExpanded(!expanded)}
							aria-controls="responsive-navbar-nav"
							className="mb-3"
						/>
						<Navbar.Collapse>
							<Nav className="flex-column">
								<div className="mb-3">
									<OverlayTrigger
										placement="right"
										overlay={<Tooltip>Home</Tooltip>}
									>
										<Button
											onClick={Home}
											variant="outline-dark"
											className="w-100"
										>
											<House />
										</Button>
									</OverlayTrigger>
								</div>
								<div className="mb-3">
									<Button
										onClick={Medical}
										variant="outline-dark"
										className="w-100"
									>
										Medical
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={Finance}
										variant="outline-dark"
										className="w-100"
									>
										Finance
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={Pandemic}
										variant="outline-dark"
										className="w-100"
									>
										Pandemic
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={Sleep}
										variant="outline-dark"
										className="w-100"
									>
										Sleep
									</Button>
								</div>
								<div className="mb-3">
									<Button
										onClick={RealTime}
										variant="outline-dark"
										className="w-100"
									>
										Real-time
									</Button>
								</div>
								<div className="mb-3">
									<OverlayTrigger
										placement="right"
										overlay={<Tooltip>Back to previous</Tooltip>}
									>
										<Button
											onClick={Back}
											variant="outline-dark"
											className="w-100"
										>
											<ArrowCounterclockwise />
										</Button>
									</OverlayTrigger>
								</div>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				) : null}
			</div>
			<div id="social" className="panel pe-1 pe-md-3">
				<div className="mb-3">
					<Button variant="outline-secondary">
						<a href="https://twitter.com/DrtSoftware" target="_blank">
							<Image src="x_twitter.png" className="twitter" />
						</a>
					</Button>
				</div>
				<div className="mb-3">
					<Button variant="outline-dark">
						<a
							className="redLink"
							href="https://www.youtube.com/channel/UCNYHLpd8oKLoE2xw49ZX1nQ?"
							target="_blank"
						>
							<Youtube />
						</a>
					</Button>
				</div>
				<div>
					<Button variant="outline-dark">
						<a
							href="https://www.linkedin.com/in/tony-glover-4081694/"
							target="_blank"
						>
							<Linkedin />
						</a>
					</Button>
				</div>
			</div>
		</>
	);
};

export default NavigationUI;
