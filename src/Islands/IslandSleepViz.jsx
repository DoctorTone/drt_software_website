import React, { Suspense, useState } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { Tablet } from "../Models/Tablet.jsx";
import useSound from "use-sound";
import useStore from "../state/store.js";

const IslandSleepViz = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const activeIsland = useStore((state) => state.activeIsland);
  const showSleepVizModal = useStore((state) => state.showSleepVizModal);

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      play();
      showSleepVizModal(true);
    }
  };

  const pointerOver = () => {
    if (activeIsland === islandNumber) {
      setHovered(true);
    }
  };

  const pointerOut = () => {
    setHovered(false);
  };

  useCursor(hovered);
  const [play] = useSound("./sounds/select.wav", { volume: 0.25 });

  return <div>IslandSleepViz</div>;
};

export default IslandSleepViz;
