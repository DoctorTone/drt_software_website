import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { SCENE, ISLANDS, MODALS, TRANSITIONS } from "../state/Config.js";
import { IslandPoints } from "./IslandPoints.jsx";
import { Tablet } from "../Models/Tablet.jsx";
import useStore from "../state/store.js";

export const IslandFinanceViz = ({ name, fadeIn, fadeOut }) => {
  const [hovered, setHovered] = useState(false);

  let fadeInEnabled = fadeIn;
  let fadeOutEnabled = fadeOut;

  const setActiveIsland = useStore((state) => state.setActiveIsland);
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const setTransitionPhase = useStore((state) => state.setTransitionPhase);

  const textRef = useRef();

  const selectIsland = () => {
    setVisibleModal(MODALS.FINANCE);
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
      textRef.current.opacity += delta * SCENE.FADE_DELAY;
      if (textRef.current.opacity >= 1) {
        textRef.current.opacity = 1;
        fadeInEnabled = false;
        setTransitionPhase(TRANSITIONS.FADE_OUT);
        setActiveIsland(name);
        displayModal(MODALS.FINANCE);
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
          position={ISLANDS.FinanceVizModelPosition}
          rotation={[Math.PI, Math.PI / 2, -Math.PI / 8]}
          map={"./textures/FTSEViz.jpg"}
        />
        <Shadow
          scale={[1.85, 1, 1.25]}
          opacity={0.65}
          position={[
            ISLANDS.FinanceVizTextPosition[0],
            ISLANDS.FinanceVizTextPosition[1] - 2.3,
            ISLANDS.FinanceVizTextPosition[2] + 0.25,
          ]}
        />
        <IslandPoints />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.FinanceVizTextPosition}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          Financial
          <meshBasicMaterial ref={textRef} transparent={true} opacity={0} />
        </Text>
      </group>
    </Float>
  );
};
