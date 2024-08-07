import React, { useState, useRef } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { Question } from "../Models/Question.jsx";
import { SCENE, ISLANDS, MODALS, TRANSITIONS } from "../state/Config.js";
import useStore from "../state/store.js";
import { useFrame } from "@react-three/fiber";

export const IslandWhy = ({ name, fadeIn, fadeOut, direction }) => {
  const [hovered, setHovered] = useState(false);

  let fadeInEnabled = fadeIn;
  let fadeOutEnabled = fadeOut;

  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const setTransitionPhase = useStore((state) => state.setTransitionPhase);
  const setActiveIsland = useStore((state) => state.setActiveIsland);

  const textRef = useRef();
  const textMaterialRef = useRef();

  const selectIsland = () => {
    setVisibleModal(MODALS.WHY);
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
        displayModal(MODALS.WHY);
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
        <Question
          fadeIn={fadeIn}
          fadeOut={fadeOut}
          position={ISLANDS.WhyModelPosition}
          direction={direction}
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
          position={ISLANDS.WhyTextPosition}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          Why 3D?
          <meshBasicMaterial ref={textMaterialRef} transparent={true} />
        </Text>
      </group>
    </Float>
  );
};
