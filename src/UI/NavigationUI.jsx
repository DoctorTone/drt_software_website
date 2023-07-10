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
  const [showLinks, setShowLinks] = useState(false);

  const Home = () => {
    if (currentLevel === SCENE.MAIN_LEVEL) return;

    const nextScene = {
      level: SCENE.MAIN_LEVEL,
      scene: "main",
      islands: ISLANDS.MAIN_LEVEL_ISLANDS,
      activeIsland: ISLANDS.ACTIVE_ISLAND,
      direction: SCENE.ANIMATE_DOWN,
    };
    animateNextScene(nextScene);
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
      <div id="home" className="panel ps-3">
        <div className="mb-3">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="homeTip">Back to top level</Tooltip>}
          >
            <Button onClick={Home} variant="outline-dark">
              <House />
            </Button>
          </OverlayTrigger>
        </div>
        <div className="mb-3">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="backTip">Up one level</Tooltip>}
          >
            <Button onClick={BackOneLevel} variant="outline-dark">
              <ArrowCounterclockwise />
            </Button>
          </OverlayTrigger>
        </div>
        <div className="mb-3">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="infoTip">Information</Tooltip>}
          >
            <Button onClick={Info} variant="outline-dark">
              <InfoLg />
            </Button>
          </OverlayTrigger>
        </div>
        <div className="mb-3">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="contactTip">Contact me</Tooltip>}
          >
            <Button onClick={Contact} variant="outline-dark">
              <Person />
            </Button>
          </OverlayTrigger>
        </div>
        <div>
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="linkTip">Demo links</Tooltip>}
          >
            <Button onClick={showDemoLinks} variant="outline-dark">
              <Link />
            </Button>
          </OverlayTrigger>
          <Offcanvas show={showLinks} onHide={handleClose} placement="start">
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title>Demo Links</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p>Go straight to the level or demo you want.</p>
              <div className="mb-5">
                <h5>
                  <strong>Levels:</strong>
                </h5>
                <h5>Home</h5>
                <h5>Portfolio</h5>
                <h5>Data visualisation</h5>
              </div>
              <div>
                <h5>
                  <strong>Demos:</strong>
                </h5>
                <h5>VR framework</h5>
                <h5>Physics</h5>
                <h5>Shader effects</h5>
                <h5>Material editor</h5>
                <h5>Medical Viz</h5>
                <h5>Financial Viz</h5>
                <h5>Pandemic Viz</h5>
                <h5>Sleep Viz</h5>
                <h5>Real-time Viz</h5>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
      <div id="social" className="panel pe-3">
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
