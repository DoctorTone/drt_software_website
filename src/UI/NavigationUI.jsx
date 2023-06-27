import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
  House,
  ArrowCounterclockwise,
  InfoLg,
  Question,
  Twitter,
  Youtube,
  Linkedin,
} from "react-bootstrap-icons";
import { SCENE, ISLANDS } from "../state/Config.js";
import useStore from "../state/store.js";

const NavigationUI = () => {
  const currentLevel = useStore((state) => state.currentLevel);
  const showInfoModal = useStore((state) => state.showInfoModal);
  const animateNextScene = useStore((state) => state.animateNextScene);

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
    showInfoModal(true);
  };

  const homeTips = (props) => {
    <Tooltip id="homeTip" {...props}>
      Go to top level
    </Tooltip>;
  };

  return (
    <>
      <div id="home" className="panel ps-3">
        <div className="mb-3">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="homeTip">Back to top level</Tooltip>}>
            <Button onClick={Home} variant="outline-dark">
              <House />
            </Button>
          </OverlayTrigger>
        </div>
        <div className="mb-3">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="backTip">Up one level</Tooltip>}>
            <Button onClick={BackOneLevel} variant="outline-dark">
              <ArrowCounterclockwise />
            </Button>
          </OverlayTrigger>
        </div>
        <div>
          <Button onClick={Info} variant="outline-dark">
            <InfoLg />
          </Button>
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
              target="_blank">
              <Youtube />
            </a>
          </Button>
        </div>
        <div>
          <Button variant="outline-dark">
            <a
              href="https://www.linkedin.com/in/tony-glover-4081694/"
              target="_blank">
              <Linkedin />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavigationUI;
