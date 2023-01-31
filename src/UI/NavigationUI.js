import React from "react";
import Button from "react-bootstrap/Button";
import { House, ArrowCounterclockwise } from "react-bootstrap-icons";
import { SCENE } from "../state/Config.js";
import useStore from "../state/store.js";

const NavigationUI = () => {
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);

  const Home = () => {
    setCurrentLevel(SCENE.MAIN_LEVEL);
  };

  return (
    <div id="home" className="panel ps-5">
      <div className="mb-3">
        <Button onClick={Home} variant="outline-dark">
          <House />
        </Button>
      </div>
      <div>
        <Button variant="outline-dark">
          <ArrowCounterclockwise />
        </Button>
      </div>
    </div>
  );
};

export default NavigationUI;
