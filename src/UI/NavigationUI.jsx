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
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const animateNextScene = useStore((state) => state.animateNextScene);
  const activeIsland = useStore((state) => state.activeIsland);
  const [showLinks, setShowLinks] = useState(false);
  const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

  const About = () => {
    if (activeIsland === "About") {
      setVisibleModal(MODALS.ABOUT);
      selectSound.play();
    }
  };

  const Services = () => {};

  const Portfolio = () => {
    if (currentLevel === SCENE.LEVEL_1) return;

    const nextScene = {
      level: SCENE.LEVEL_1,
      scene: "portfolio",
      islands: ISLANDS.LEVEL_1_ISLANDS,
      activeIsland: ISLANDS.ACTIVE_ISLAND,
      direction: SCENE.ANIMATE_DOWN,
    };
    animateNextScene(nextScene);
    setShowLinks(false);
  };

  const DataViz = () => {
    if (currentLevel === SCENE.LEVEL_2) return;

    const nextScene = {
      level: SCENE.LEVEL_2,
      scene: "dataviz",
      islands: ISLANDS.LEVEL_2_ISLANDS,
      activeIsland: ISLANDS.ACTIVE_ISLAND,
      direction: SCENE.ANIMATE_DOWN,
    };
    animateNextScene(nextScene);
    setShowLinks(false);
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

  const Info = () => {
    setVisibleModal(MODALS.INFO);
  };

  const Contact = () => {
    setVisibleModal(MODALS.PERSON);
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
        <div className="mb-3">
          <Button onClick={About} variant="outline-dark" className="w-100">
            About
          </Button>
        </div>
        <div className="mb-3">
          <Button onClick={Services} variant="outline-dark" className="w-100">
            Services
          </Button>
        </div>
        <div className="mb-3">
          <Button onClick={Info} variant="outline-dark" className="w-100">
            Contact
          </Button>
        </div>
        <div className="mb-3">
          <Button onClick={Contact} variant="outline-dark" className="w-100">
            Porfolio
          </Button>
        </div>
        <div>
          <Offcanvas show={showLinks} onHide={handleClose} placement="start">
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title>Links</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p>Go straight to the level or demo you want.</p>
              <div className="mb-5">
                <h5>
                  <strong>Levels:</strong>
                </h5>
                <h5
                  onClick={About}
                  style={{ cursor: "pointer" }}
                  className="orangeText"
                >
                  Home
                </h5>
                <h5
                  onClick={Portfolio}
                  style={{ cursor: "pointer" }}
                  className="orangeText"
                >
                  Portfolio
                </h5>
                <h5
                  onClick={DataViz}
                  style={{ cursor: "pointer" }}
                  className="orangeText"
                >
                  Data visualisation
                </h5>
              </div>
              <div>
                <h5>
                  <strong>Demos:</strong>
                </h5>
                <h5>
                  <a
                    href="https://drt-software.com/Demos/VRFramework/VRFramework.html"
                    target="_blank"
                  >
                    VR framework
                  </a>
                </h5>
                <h5>
                  <a
                    href="https://drt-software.com/Demos/Physics/physics_demo.html"
                    target="_blank"
                  >
                    Physics
                  </a>
                </h5>
                <h5>
                  <a
                    href="https://drt-software.com/Demos/Effects/effects.html"
                    target="_blank"
                  >
                    Shader effects
                  </a>
                </h5>
                <h5>
                  <a
                    href="https://drt-software.com/Demos/Material/editor.html"
                    target="_blank"
                  >
                    Material editor
                  </a>
                </h5>
                <h5>
                  <a
                    href="https://www.drt-software.com/MedicalViz/medicalViz.html"
                    target="_blank"
                  >
                    Medical Viz
                  </a>
                </h5>
                <h5>
                  <a
                    href="https://www.drt-software.com/FTSEViz/FTSEViz.html"
                    target="_blank"
                  >
                    Financial Viz
                  </a>
                </h5>
                <h5>
                  <a
                    href="https://www.drt-software.com/Covid/covid19.html"
                    target="_blank"
                  >
                    Pandemic Viz
                  </a>
                </h5>
                <h5>
                  <a
                    href="https://www.drt-software.com/SleepViz/sleepViz.html"
                    target="_blank"
                  >
                    Sleep Viz
                  </a>
                </h5>
                <h5>
                  <a
                    href="https://www.drt-software.com/Horror/brainViz.html"
                    target="_blank"
                  >
                    Real-time Viz
                  </a>
                </h5>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
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
