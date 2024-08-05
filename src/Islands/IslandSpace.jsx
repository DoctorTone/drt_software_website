import React, { useState, useRef } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { SpaceShip } from "../Models/SpaceShip.jsx";
import { SCENE, ISLANDS, MODALS, TRANSITIONS } from "../state/Config.js";
import useStore from "../state/store.js";
import { useFrame } from "@react-three/fiber";

export const IslandSpace = ({ name, fadeIn, fadeOut, direction }) => {
  const [hovered, setHovered] = useState(false);

  let fadeInEnabled = fadeIn;
  let fadeOutEnabled = fadeOut;

  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const speechBubbleVisible = useStore((state) => state.speechBubbleVisible);
  const displaySpeechBubble = useStore((state) => state.displaySpeechBubble);
  const setTransitionPhase = useStore((state) => state.setTransitionPhase);
  const setActiveIsland = useStore((state) => state.setActiveIsland);

  const textRef = useRef();
  const textMaterialRef = useRef();

  const selectIsland = () => {
    setVisibleModal(MODALS.SPACE);
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

  useFrame((_, delta) => {
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
      if (textMaterialRef.current.opacity >= 1) {
        textMaterialRef.current.opacity = 0;
      }
      textMaterialRef.current.opacity += delta * SCENE.FADE_DELAY;
      if (textMaterialRef.current.opacity >= 1) {
        textMaterialRef.current.opacity = 1;
        fadeInEnabled = false;
        setTransitionPhase(TRANSITIONS.FADE_OUT);
        setActiveIsland(name);
        displayModal(MODALS.SPACE);
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
        <SpaceShip
          direction={direction}
          fadeIn={fadeIn}
          fadeOut={fadeOut}
          position={ISLANDS.SpaceModelPosition}
          scale={0.4}
          rotation-y={-Math.PI / 4}
        />
        <Shadow
          scale={1.5}
          opacity={0.65}
          position={[
            ISLANDS.DRTModelPosition[0],
            ISLANDS.DRTModelPosition[1] - 0.5,
            ISLANDS.DRTModelPosition[2],
          ]}
        />
        <IslandPoints />
        <Text
          ref={textRef}
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.SpaceModelTextPosition}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          Space
          <meshBasicMaterial ref={textMaterialRef} transparent={true} />
        </Text>
      </group>
    </Float>
  );
};
