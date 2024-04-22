import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { Work } from "../Models/Work.jsx";
import { SCENE, ISLANDS, MODALS, TRANSITIONS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandServices = ({ name, fadeIn, fadeOut }) => {
  const [hovered, setHovered] = useState(false);

  let fadeInEnabled = fadeIn;
  let fadeOutEnabled = fadeOut;

  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const speechBubbleVisible = useStore((state) => state.speechBubbleVisible);
  const displaySpeechBubble = useStore((state) => state.displaySpeechBubble);
  const setTransitionPhase = useStore((state) => state.setTransitionPhase);
  const setActiveIsland = useStore((state) => state.setActiveIsland);

  const textRef = useRef();

  const selectIsland = () => {
    setVisibleModal(MODALS.SERVICES);
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
        displayModal(MODALS.SERVICES);
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
        <Work
          fadeIn={fadeIn}
          fadeOut={fadeOut}
          scale={0.1}
          position={ISLANDS.ServicesModelPosition}
          rotation-y={Math.PI / 2}
        />
        <Shadow
          scale={1}
          position={[
            0,
            ISLANDS.ServicesModelPosition[1] - 0.5,
            ISLANDS.ServicesModelPosition[2],
          ]}
        />
        <IslandPoints />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.ServicesTextPosition}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          Services
          <meshBasicMaterial ref={textRef} transparent={true} />
        </Text>
      </group>
    </Float>
  );
};
