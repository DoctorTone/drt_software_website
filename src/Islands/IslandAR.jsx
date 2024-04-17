import React, { useState, useRef } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { IslandPoints } from "./IslandPoints.jsx";
import { AR } from "../Models/AR.jsx";
import { SCENE, ISLANDS, MODALS, TRANSITIONS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandAR = ({ name, fadeIn, fadeOut }) => {
  const [hovered, setHovered] = useState(false);

  let fadeInEnabled = fadeIn;
  let fadeOutEnabled = fadeOut;

  const setActiveIsland = useStore((state) => state.setActiveIsland);
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const setTransitionPhase = useStore((state) => state.setTransitionPhase);

  const textRef = useRef();

  const selectIsland = () => {
    setVisibleModal(MODALS.AR);
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
      textRef.current.opacity -= delta * SCENE.FADE_DELAY;
      if (textRef.current.opacity < 0) {
        textRef.current.opacity = 0;
        fadeOutEnabled = false;
        setTransitionPhase(TRANSITIONS.FADE_IN);
      }
    }
    if (fadeInEnabled) {
      if (textRef.current.opacity >= 1) {
        textRef.current.opacity = 0;
      }
      textRef.current.opacity += delta * SCENE.FADE_DELAY;
      if (textRef.current.opacity >= 1) {
        textRef.current.opacity = 1;
        fadeInEnabled = false;
        setTransitionPhase(TRANSITIONS.FADE_OUT);
        setActiveIsland(name);
        displayModal(MODALS.AR);
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
        <AR
          fadeIn={fadeIn}
          fadeOut={fadeOut}
          position={ISLANDS.ARModelPosition}
          rotation-y={Math.PI / 6}
          scale={2}
        />
        <Shadow
          scale={1.65}
          opacity={0.85}
          position={[
            ISLANDS.ARTextPosition[0],
            ISLANDS.ARTextPosition[1] - 1.35,
            ISLANDS.ARTextPosition[2],
          ]}
        />
        <IslandPoints />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.ARTextPosition}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          AR
          <meshBasicMaterial ref={textRef} transparent={true} />
        </Text>
      </group>
    </Float>
  );
};
