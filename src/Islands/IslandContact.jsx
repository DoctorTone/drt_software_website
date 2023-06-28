import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { Island } from "./Island.jsx";
import { Phone } from "../Models/Phone.jsx";
import { Dog } from "../Models/Dog.jsx";
import { SCENE, ISLANDS, MODALS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandContact = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const activeIsland = useStore((state) => state.activeIsland);
  const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      setVisibleModal(MODALS.CONTACT);
      selectSound.play();
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

  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={selectIsland}>
        <Phone position={ISLANDS.ContactModelPosition} scale={0.007} />
        <Dog
          scale={0.275}
          rotation-y={-Math.PI / 8}
          position={[
            ISLANDS.ContactModelPosition[0] - 0.5,
            ISLANDS.ContactModelPosition[1] - 0.5,
            ISLANDS.ContactModelPosition[2] - 0.9,
          ]}
        />
        <Shadow
          scale={1}
          position={[
            ISLANDS.ContactModelPosition[0],
            ISLANDS.ContactModelPosition[1] - 0.5,
            ISLANDS.ContactModelPosition[2],
          ]}
        />
        <Island position={ISLANDS.ContactPosition} />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.ContactTextPosition}
          rotation-y={-Math.PI / 2}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black">
          Contact
        </Text>
      </group>
    </Float>
  );
};
