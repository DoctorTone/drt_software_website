import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
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
	const fadeOverlay = useStore((state) => state.fadeOverlay);
	const updateSlots = useStore((state) => state.updateSlots);

	const [showLinks, setShowLinks] = useState(false);
	const [selectSound] = useState(() => new Audio("./sounds/select.wav"));
	const [menuState, setMenuState] = useState("Main");

	const About = () => {
		if (activeIsland === "About") {
			setVisibleModal(MODALS.ABOUT);
			selectSound.play();
		} else {
			setTargetIsland("About");
		}
	};

	const Services = () => {
		if (activeIsland === "Services") {
			setVisibleModal(MODALS.SERVICES);
			selectSound.play();
		} else {
			setTargetIsland("Services");
		}
	};

	const Contact = () => {
		if (activeIsland === "Contact") {
			setVisibleModal(MODALS.CONTACT);
			selectSound.play();
		} else {
			setTargetIsland("Contact");
		}
	};

	const Portfolio = () => {
		setMenuState("Portfolio");
		fadeOverlay();
		setCurrentLevel(SCENE.LEVEL_1);
		updateSlots(["Physics", "VR", "Shaders"]);
	};

	const DataViz = () => {
		setMenuState("DataViz");
	};

	const Home = () => {
		setCurrentLevel(SCENE.MAIN_LEVEL);
		updateSlots(["Contact", "About", "Services"]);
	};

	const BackOneLevel = () => {
		if (currentLevel === SCENE.MAIN_LEVEL) return;

		let scene;
		let islands;

		switch (currentLevel) {
			case SCENE.LEVEL_1:
				scene = "main";
				islands = ISLANDS.MAIN_LEVEL_ISLANDS;
				break;

			case SCENE.LEVEL_2:
				scene = "portfolio";
				islands = ISLANDS.LEVEL_1_ISLANDS;
				break;

			default:
				break;
		}

		const nextScene = {
			level: currentLevel - 1,
			scene: scene,
			islands: islands,
			activeIsland: ISLANDS.ACTIVE_ISLAND,
			direction: SCENE.ANIMATE_DOWN,
		};

		animateNextScene(nextScene);
	};

	const showDemoLinks = (event) => {
		event.preventDefault();

		setShowLinks(true);
	};

	const handleClose = () => {
		setShowLinks(false);
	};

	return (
		<>
			<div id="home" className="panel ps-2 ps-md-3 w-10">
				{menuState === "Main" ? (
					<div>
						<div className="mb-3">
							<Button onClick={About} variant="outline-dark" className="w-100">
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
								onClick={Portfolio}
								variant="outline-dark"
								className="w-100"
							>
								Porfolio
							</Button>
						</div>
					</div>
				) : null}
				{menuState === "Portfolio" ? (
					<div>
						<div className="mb-3">
							<Button onClick={About} variant="outline-dark" className="w-100">
								VR
							</Button>
						</div>
						<div className="mb-3">
							<Button
								onClick={Services}
								variant="outline-dark"
								className="w-100"
							>
								Physics
							</Button>
						</div>
						<div className="mb-3">
							<Button
								onClick={Contact}
								variant="outline-dark"
								className="w-100"
							>
								Shaders
							</Button>
						</div>
						<div className="mb-3">
							<Button
								onClick={Services}
								variant="outline-dark"
								className="w-100"
							>
								Tech
							</Button>
						</div>
						<div className="mb-3">
							<Button
								onClick={DataViz}
								variant="outline-dark"
								className="w-100"
							>
								Data Viz
							</Button>
						</div>
						<div className="mb-3">
							<Button onClick={Home} variant="outline-dark" className="w-100">
								<House />
							</Button>
						</div>
					</div>
				) : null}
				{menuState === "DataViz" ? (
					<div>
						<div className="mb-3">
							<Button onClick={About} variant="outline-dark" className="w-100">
								Medical
							</Button>
						</div>
						<div className="mb-3">
							<Button
								onClick={Services}
								variant="outline-dark"
								className="w-100"
							>
								Finance
							</Button>
						</div>
						<div className="mb-3">
							<Button
								onClick={Contact}
								variant="outline-dark"
								className="w-100"
							>
								Pandemic
							</Button>
						</div>
						<div className="mb-3">
							<Button
								onClick={Services}
								variant="outline-dark"
								className="w-100"
							>
								Sleep
							</Button>
						</div>
						<div className="mb-3">
							<Button
								onClick={DataViz}
								variant="outline-dark"
								className="w-100"
							>
								Real-time
							</Button>
						</div>
					</div>
				) : null}
			</div>
			<div id="social" className="panel pe-1 pe-md-3">
				<div className="mb-3">
					<Button variant="outline-dark">
						<a href="https://twitter.com/DrtSoftware" target="_blank">
							<Twitter />
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
