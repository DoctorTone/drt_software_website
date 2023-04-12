import React from "react";
import Button from "react-bootstrap/Button";
import {
  House,
  ArrowCounterclockwise,
  InfoLg,
  Question,
  Twitter,
  Youtube,
  Linkedin,
} from "react-bootstrap-icons";
import { SCENE } from "../state/Config.js";
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
      islands: 4,
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
        islands = 4;
        break;

      case SCENE.LEVEL_2:
        scene = "portfolio";
        islands = 5;
        break;

      default:
        break;
    }

    const nextScene = {
      level: currentLevel - 1,
      scene: scene,
      islands: islands,
      activeIsland: 3,
      direction: SCENE.ANIMATE_DOWN,
    };

    animateNextScene(nextScene);
  };

  const Info = () => {
    showInfoModal(true);
  };

  return (
    <>
      <div id="home" className="panel ps-5">
        <div className="mb-3">
          <Button onClick={Home} variant="outline-dark">
            <House />
          </Button>
        </div>
        <div className="mb-3">
          <Button onClick={BackOneLevel} variant="outline-dark">
            <ArrowCounterclockwise />
          </Button>
        </div>
        <div>
          <Button onClick={Info} variant="outline-dark">
            <InfoLg />
          </Button>
        </div>
      </div>
      <div id="social" className="panel pe-5">
        <div className="mb-3">
          <Button variant="outline-dark">
            <a href="https://twitter.com/DrtSoftware" target="_blank">
              <Twitter />
            </a>
          </Button>
        </div>
        <div className="mb-3">
          <Button onClick={BackOneLevel} variant="outline-dark">
            <a
              className="redLink"
              href="https://www.youtube.com/channel/UCNYHLpd8oKLoE2xw49ZX1nQ?"
              target="_blank">
              <Youtube />
            </a>
          </Button>
        </div>
        <div>
          <Button onClick={Info} variant="outline-dark">
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
