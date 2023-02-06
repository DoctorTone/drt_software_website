import React, { Suspense, useState } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { Island } from "../Island.js";
import { Work } from "../Work.js";
import { SCENE } from "../../state/Config.js";
import useSound from "use-sound";
import useStore from "../../state/store.js";

export const IslandServices = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const showServicesModal = useStore((state) => state.showServicesModal);
  const activeIsland = useStore((state) => state.activeIsland);

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      showServicesModal(true);
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
        <Island position={[0, 0, -5]} />
        <Work
          rotation-y={Math.PI / 2}
          scale={0.1}
          position={[0, 2.15, -5.25]}
        />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={0.2}
            position={[0, 2.85, -5.25]}
            rotation-y={Math.PI}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="black">
            Services
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
