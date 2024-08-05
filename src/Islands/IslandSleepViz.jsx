import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { SCENE, ISLANDS, MODALS, TRANSITIONS } from "../state/Config.js";
import { Tablet } from "../Models/Tablet.jsx";
import { IslandPoints } from "./IslandPoints.jsx";
import useStore from "../state/store.js";

export const IslandSleepViz = ({ name, fadeIn, fadeOut, direction }) => {
  const [hovered, setHovered] = useState(false);

  let fadeInEnabled = fadeIn;
  let fadeOutEnabled = fadeOut;

  const setActiveIsland = useStore((state) => state.setActiveIsland);
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const setTransitionPhase = useStore((state) => state.setTransitionPhase);

  const textRef = useRef();
  const textMaterialRef = useRef();

  const selectIsland = () => {
    setVisibleModal(MODALS.SLEEP);
  };

  const pointerOver = () => {
    setHovered(true);
  };

  const pointerOut = () => {
    setHovered(false);
  };

  const displayModal = (modal) => {
    setTimeout(() => {
      setVisibleModal(modal);
    }, SCENE.MODAL_DELAY);
  };

  useCursor(hovered);

  useFrame((state, delta) => {
    if (fadeOutEnabled) {
      textMaterialRef.current.opacity -= delta * SCENE.FADE_DELAY;
      textRef.current.position.x += delta * direction;
      if (textMaterialRef.current.opacity < 0) {
        textMaterialRef.current.opacity = 0;
        fadeOutEnabled = false;
        setTransitionPhase(TRANSITIONS.FADE_IN);
      }
    }
    if (fadeInEnabled) {
      textMaterialRef.current.opacity += delta * SCENE.FADE_DELAY;
      if (textMaterialRef.current.opacity >= 1) {
        textMaterialRef.current.opacity = 1;
        fadeInEnabled = false;
        setTransitionPhase(TRANSITIONS.FADE_OUT);
        setActiveIsland(name);
        displayModal(MODALS.SLEEP);
      }
    }
  });

  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={selectIsland}
        position={ISLANDS.MAIN_POSITION}
      >
        <Tablet
          fadeIn={fadeIn}
          fadeOut={fadeOut}
          position={ISLANDS.SleepVizModelPosition}
          rotation={[Math.PI, Math.PI / 2, -Math.PI / 8]}
          map={"./textures/sleepData.jpg"}
          direction={direction}
        />
        <Shadow
          scale={[1.85, 1, 1.25]}
          opacity={0.65}
          position={[
            ISLANDS.SleepVizTextPosition[0],
            ISLANDS.SleepVizTextPosition[1] - 2.3,
            ISLANDS.SleepVizTextPosition[2] + 0.25,
          ]}
        />
        <IslandPoints />
        <Text
          ref={textRef}
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.SleepVizTextPosition}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          Sleep
          <meshBasicMaterial
            ref={textMaterialRef}
            transparent={true}
            opacity={0}
          />
        </Text>
      </group>
    </Float>
  );
};
