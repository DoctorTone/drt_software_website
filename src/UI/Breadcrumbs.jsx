import React from "react";
import { SCENE } from "../state/Config.js";
import Alert from "react-bootstrap/Alert";
import useStore from "../state/store.js";

const Breadcrumbs = () => {
  const currentLevel = useStore((state) => state.currentLevel);

  const getLevelText = () => {
    switch (currentLevel) {
      case SCENE.MAIN_LEVEL:
        return "Home";
        break;

      case SCENE.LEVEL_1:
        return "Home->Portfolio";
        break;

      case SCENE.LEVEL_2:
        return "Home->Portfolio->DataViz";
        break;

      default:
        return "";
    }
  };
  return (
    <div id="breadcrumbs" className="panel infoDisplay">
      <em>Level:</em> {getLevelText()}
    </div>
  );
};

export default Breadcrumbs;
