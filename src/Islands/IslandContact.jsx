import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { Island } from "./Island.jsx";
import { Phone } from "../Models/Phone.jsx";
import { SCENE, ISLANDS } from "../state/Config.js";
import useSound from "use-sound";
import useStore from "../state/store.js";

export const IslandContact = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const showContactModal = useStore((state) => state.showContactModal);
  const activeIsland = useStore((state) => state.activeIsland);

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      showContactModal(true);
      play();
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

  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={selectIsland}>
        <Phone position={ISLANDS.ContactModelPosition} scale={0.007} />
        <Shadow
          scale={1}
          position={[
            ISLANDS.ContactModelPosition[0],
            ISLANDS.ContactModelPosition[1] - 0.5,
            ISLANDS.ContactModelPosition[2],
          ]}
        />
        <Island position={ISLANDS.ContactPosition} />
        <Suspense fallback={null}>
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
        </Suspense>
      </group>
    </Float>
  );
};
