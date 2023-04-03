import React from "react";
import Button from "react-bootstrap/Button";
import {
  House,
  ArrowCounterclockwise,
  InfoLg,
  Question,
} from "react-bootstrap-icons";
import { SCENE } from "../state/Config.js";
import useStore from "../state/store.js";

const NavigationUI = () => {
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);
  const setActiveScene = useStore((state) => state.setActiveScene);
  const showInfoModal = useStore((state) => state.showInfoModal);
  const animateNextScene = useStore((state) => state.animateNextScene);

  const Home = () => {
    const nextScene = {
      level: SCENE.MAIN_LEVEL,
      scene: "main",
      islands: 4,
      direction: SCENE.ANIMATE_DOWN,
    };
    animateNextScene(nextScene);
  };

  const Info = () => {
    showInfoModal(true);
  };

  return (
    <div id="home" className="panel ps-5">
      <div className="mb-3">
        <Button onClick={Home} variant="outline-dark">
          <House />
        </Button>
      </div>
      <div className="mb-3">
        <Button variant="outline-dark">
          <ArrowCounterclockwise />
        </Button>
      </div>
      <div>
        <Button onClick={Info} variant="outline-dark">
          <InfoLg />
        </Button>
      </div>
    </div>
  );
};

export default NavigationUI;
