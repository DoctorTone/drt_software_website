import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { Island } from "./Island.jsx";
import { Phone } from "../Models/Phone.jsx";
import { Dog } from "../Models/Dog.jsx";
import { SCENE, ISLANDS, MODALS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandContact = ({ slot }) => {
  const [hovered, setHovered] = useState(false);
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

  const selectIsland = () => {
    if (slot === 0) {
      setVisibleModal(MODALS.CONTACT);
      selectSound.play();
    }
  };

  const pointerOver = () => {
    if (slot === 0) {
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
        rotation-y={0}
        visible={slot >= 0}
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={selectIsland}
        position={ISLANDS.SLOT_POSITIONS[slot]}
      >
        <Phone
          position={ISLANDS.ContactModelPosition}
          rotation-y={Math.PI / 2}
          scale={0.007}
        />
        <Shadow
          scale={1}
          position={[
            ISLANDS.ContactModelPosition[0],
            ISLANDS.ContactModelPosition[1] - 0.5,
            ISLANDS.ContactModelPosition[2],
          ]}
        />
        <Island />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.ContactTextPosition}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          Contact
        </Text>
      </group>
    </Float>
  );
};
